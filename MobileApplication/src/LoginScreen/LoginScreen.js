import React, { Component } from "react"
import {
  Platform,
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ActivityIndicator,
  Dimensions,
  ScrollView,
  ImageBackground
} from "react-native"
import { SafeAreaView } from "react-navigation"
import { faUser, faUserLock } from "@fortawesome/free-solid-svg-icons"
import {
  faFacebookF,
  faGoogle,
  faInstagram
} from "@fortawesome/free-brands-svg-icons"
import { connect } from "react-redux"
import { loginAction } from "./loginActions"
import TextInputCustom from "../Component/TextInputCustom"
import SocialButton from "../Component/SocialButton"
import CustomButton from "../Component/CustomButton"

function ButtonForgotPassword(props) {
  const { label, style } = props
  const stylesButtonForgotPassword = StyleSheet.create({
    container: { alignSelf: "center" },
    label: {
      borderBottomColor: "#f4f8f7",
      borderBottomWidth: 2,
      paddingBottom: 3,
      color: "black"
    }
  })
  return (
    <TouchableOpacity style={[stylesButtonForgotPassword.container, style]}>
      <Text style={stylesButtonForgotPassword.label}>{label}</Text>
    </TouchableOpacity>
  )
}

class LoginScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: "",
      password: "",
      isLogin: false
    }
  }

  componentDidUpdate = prevProps => {
    let me = this
    if (prevProps.login != this.props.login) {
      if (this.props.login.status === "failed") {
        me.setState({ isLogin: false })
      } else {
        // me._loginAsync(this.props.login.uid)
      }
    }
  }

  render() {
    const { email, password, isLogin } = this.state
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <ImageBackground
          resizeMode={"stretch"}
          source={require("../../res/background.jpg")}
          style={styles.login_container}
          imageStyle={{ opacity: 0.7 }}
        >
          <View style={styles.header_container}>
            <Text style={styles.title}>{"Login to GBDS"}</Text>
            <View style={styles.social_container}>
              <SocialButton size={30} color={"blue"} icon={faFacebookF} />
              <SocialButton size={30} color={"#FF3D00"} icon={faGoogle} />
              <SocialButton size={30} color={"#673AB7"} icon={faInstagram} />
            </View>
          </View>
          <View style={{ flex: 3 }}>
            <Text style={styles.label}>{"or use your email account:"}</Text>
            <View style={styles.group_input}>
              <TextInputCustom
                onChangeText={text => this.setState({ email: text })}
                value={this.state.email}
                style={{
                  container: {
                    width: Dimensions.get("screen").width - 50,
                    marginBottom: 5
                  }
                }}
                label={"Email"}
              />
              <TextInputCustom
                onChangeText={text => this.setState({ password: text })}
                value={this.state.password}
                style={{
                  container: {
                    width: Dimensions.get("screen").width - 50,
                    marginBottom: 5
                  }
                }}
                label={"Password"}
              />
            </View>
            <ButtonForgotPassword
              style={styles.button_forgot_password_container}
              label={"Forgot your password?"}
            />
            <CustomButton
              onPress={this.onPressLogin.bind(this)}
              style={{ marginBottom: 10 }}
            >
              {isLogin ? (
                <ActivityIndicator size="large" color="white" />
              ) : (
                <Text style={{ color: "white" }}>{"LOGIN"}</Text>
              )}
            </CustomButton>
            <CustomButton
              onPress={() =>
                this.props.navigation.navigate("RegistrationScreen")
              }
            >
              <Text style={{ color: "white" }}>{"REGISTRATION"}</Text>
            </CustomButton>
          </View>
        </ImageBackground>
      </SafeAreaView>
    )
  }

  onPressLogin = () => {
    // const { email, password } = this.state
    // let validate = this.validateEmailPassword(email, password)
    // if (validate === true) {
    //   this.setState({ isLogin: true })
    //   this.props.onLogin({ email, password })
    // } else {
    //   validate === "email" ? this.refEmail.focus() : this.refPassword.focus()
    // }
    this.props.navigation.navigate("UserStack")
  }

  validateEmailPassword = (email, password) =>
    email ? (password ? true : "password") : "email"
}

const styles = StyleSheet.create({
  login_container: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    color: "rgb(58,169,171)",
    fontWeight: "bold",
    fontSize: 30,
    textAlign: "center",
    marginBottom: 20
  },
  label: { textAlign: "center", color: "#ccc", marginBottom: 20 },
  group_input: { marginBottom: 30 },
  button_forgot_password_container: { marginBottom: 30 },
  header_container: { flex: 2, justifyContent: "center" },
  social_container: { flexDirection: "row", justifyContent: "center" }
})

const mapStateToProps = state => {
  return {
    login: state.loginReducers
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onLogin: payload => {
      dispatch(loginAction(payload))
    }
  }
}

const LoginContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginScreen)
export default LoginContainer
