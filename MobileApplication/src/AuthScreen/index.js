import React, { Component } from "react"
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ImageBackground,
  Animated,
  AsyncStorage
} from "react-native"
import constants from "../Constant"
import { connect } from "react-redux"
import { signInAction, signUpAction } from "./authAction"
import { SafeAreaView } from "react-navigation"
import {
  faUser,
  faUserLock,
  faMailBulk,
  faPhone
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome"
import { faFacebookF, faGoogle } from "@fortawesome/free-brands-svg-icons"

function ButtonCustom(props) {
  const stylesButtonCustom = {
    container: {
      backgroundColor: props.backgroundColor,
      justifyContent: "center",
      alignItems: "center",
      padding: 10,
      borderTopLeftRadius: props.borderRadius ? props.borderRadius : 20,
      borderBottomRightRadius: props.borderRadius ? props.borderRadius : 20,
      borderColor: "gray",
      borderWidth: 0.5
    },
    text: { color: props.textColor, fontWeight: "bold" }
  }
  return (
    <TouchableOpacity
      style={[stylesButtonCustom.container, props.style]}
      onPress={() => props.onPress()}
    >
      {props.label ? (
        <Text style={stylesButtonCustom.text}>{props.label}</Text>
      ) : null}
      {props.icon ? (
        <FontAwesomeIcon icon={props.icon} color={props.iconColor} />
      ) : null}
    </TouchableOpacity>
  )
}

function TextInputCustom(props) {
  const stylesTextInputCustom = {
    container: {
      backgroundColor: "#f0f0f0",
      flexDirection: "row",
      alignItems: "center",
      padding: 10
    },
    icon: {
      marginRight: 10
    },
    input: {
      flex: 1,
      ...Platform.select({ android: { padding: 0 } })
    }
  }
  return (
    <View style={[stylesTextInputCustom.container, props.style]}>
      <FontAwesomeIcon
        style={stylesTextInputCustom.icon}
        icon={props.icon}
        color={"#34A853"}
      />
      <TextInput
        style={stylesTextInputCustom.input}
        placeholder={props.placeholder}
        value={props.value}
        onChangeText={text => props.onChangeText(text)}
        secureTextEntry={props.secureTextEntry}
        keyboardType={props.keyboardType}
        returnKeyType={props.returnKeyType}
      />
    </View>
  )
}

function SignIn(props) {
  const stylesSignIn = {
    conatiner: {
      opacity: props.focusedAnim.interpolate({
        inputRange: [0, 2],
        outputRange: [0, 1]
      })
    },
    input_container: { alignItems: "center", marginBottom: 40 },
    input: {
      width: 0.7 * constants.width + 10,
      borderTopLeftRadius: 15,
      marginBottom: 1
    },
    button_forgot_password: {
      width: 0.7 * constants.width + 10,
      alignItems: "flex-end"
    },
    button_container: { alignItems: "center" },
    button_signIn: {
      width: 0.7 * constants.width + 10,
      marginBottom: 10,
      paddingTop: 15,
      paddingBottom: 15
    },
    social_container: { flexDirection: "row" },
    button_custom: { marginRight: 10 }
  }
  return (
    <Animated.View style={stylesSignIn.conatiner}>
      <View style={stylesSignIn.input_container}>
        <TextInputCustom
          style={stylesSignIn.input}
          icon={faMailBulk}
          placeholder={constants.authScreen.email}
          value={props.email}
          onChangeText={text => props.onChangeText(text, "email")}
          keyboardType={"email-address"}
          returnKeyType={"next"}
        />
        <TextInputCustom
          style={stylesSignIn.input}
          icon={faUserLock}
          placeholder={constants.authScreen.password}
          value={props.password}
          onChangeText={text => props.onChangeText(text, "password")}
          secureTextEntry={true}
          returnKeyType={"go"}
        />
        <View style={stylesSignIn.button_forgot_password}>
          <TouchableOpacity onPress={() => alert(constants.commingSoon)}>
            <Text>{constants.authScreen.forgotPassword}</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={stylesSignIn.button_container}>
        <ButtonCustom
          style={stylesSignIn.button_signIn}
          label={constants.authScreen.textSignIn}
          textColor={"white"}
          backgroundColor={"#4285F4"}
          onPress={() => props.onPress()}
        />
        <Text style={{ marginBottom: 10 }}>{constants.authScreen.or}</Text>
        <View style={stylesSignIn.social_container}>
          <ButtonCustom
            style={stylesSignIn.button_custom}
            borderRadius={10}
            icon={faFacebookF}
            iconColor={"white"}
            backgroundColor={"#3B5998"}
            onPress={() => alert(constants.commingSoon)}
          />
          <ButtonCustom
            icon={faGoogle}
            borderRadius={10}
            iconColor={"white"}
            backgroundColor={"red"}
            onPress={() => alert(constants.commingSoon)}
          />
        </View>
      </View>
    </Animated.View>
  )
}

function SignUp(props) {
  const stylesSignUp = {
    conatiner: {
      opacity: props.focusedAnim.interpolate({
        inputRange: [0, 2],
        outputRange: [0, 1]
      })
    },
    input_container: { alignItems: "center", marginBottom: 40 },
    input: {
      width: 0.7 * constants.width + 10,
      borderTopLeftRadius: 15,
      marginBottom: 1
    },
    button_container: { alignItems: "center" },
    button_signUp: {
      width: 0.7 * constants.width + 10,
      marginBottom: 10,
      paddingTop: 15,
      paddingBottom: 15
    }
  }
  return (
    <Animated.View style={stylesSignUp.conatiner}>
      <View style={stylesSignUp.input_container}>
        <TextInputCustom
          style={stylesSignUp.input}
          icon={faUser}
          placeholder={constants.authScreen.fullName}
          value={props.fullName}
          onChangeText={text => props.onChangeText(text, "fullName")}
          returnKeyType={"next"}
        />
        <TextInputCustom
          style={stylesSignUp.input}
          icon={faUserLock}
          placeholder={constants.authScreen.password}
          value={props.password}
          onChangeText={text => props.onChangeText(text, "password")}
          secureTextEntry={true}
          returnKeyType={"next"}
        />
        <TextInputCustom
          style={stylesSignUp.input}
          icon={faMailBulk}
          placeholder={constants.authScreen.email}
          value={props.email}
          onChangeText={text => props.onChangeText(text, "email")}
          keyboardType={"email-address"}
          returnKeyType={"next"}
        />
        <TextInputCustom
          style={stylesSignUp.input}
          icon={faPhone}
          placeholder={constants.authScreen.telephoneNumber}
          value={props.phone}
          onChangeText={text => props.onChangeText(text, "phone")}
          keyboardType={"numeric"}
          returnKeyType={"next"}
        />
      </View>
      <View style={stylesSignUp.button_container}>
        <ButtonCustom
          style={stylesSignUp.button_signUp}
          label={constants.authScreen.textSignUp}
          textColor={"white"}
          backgroundColor={"#4285F4"}
          onPress={() => props.onPress()}
        />
      </View>
    </Animated.View>
  )
}

class AuthScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      focusedAnim: new Animated.Value(0),
      status: "",
      signIn: {
        email: "nmhieu9779@gmail.com",
        password: "123456"
      },
      signUp: {
        fullName: "",
        password: "",
        email: "",
        phone: ""
      }
    }
  }

  componentWillReceiveProps = nextProps => {
    let props = nextProps.auth
    let state = this.state
    if (props.signInSuccess && !props.isLoading) {
      this.props.navigation.navigate("HomeScreen")
    }
    if (props.signUpSuccess && !props.isLoading) {
      this.setState({
        signIn: {
          email: state.signUp.email,
          password: state.signUp.password
        },
        signUp: {
          fullName: "",
          password: "",
          email: "",
          phone: ""
        }
      })
      this.onPress("SignIn")
    }
  }

  getColor = (type, typeColor) => {
    color = "white"
    switch (typeColor) {
      case "textColor":
        color = this.state.status === type ? "white" : "black"
        break
      case "backgroundColor":
        color = this.state.status === type ? "#4285F4" : "white"
        break
      default:
        break
    }
    return color
  }

  onPress = action => {
    if (this.state.status) {
      Animated.timing(this.state.focusedAnim, {
        toValue: 0
      }).start()
      setTimeout(() => {
        this.setState({ status: action })
        Animated.timing(this.state.focusedAnim, {
          toValue: 2
        }).start()
      }, 500)
    } else {
      this.setState({ status: action })
      Animated.timing(this.state.focusedAnim, {
        toValue: 2
      }).start()
    }
  }

  render() {
    const { status, focusedAnim, signIn, signUp } = this.state
    return (
      <SafeAreaView style={styles.container}>
        <ImageBackground
          imageStyle={styles.image_style_background}
          source={require("../../res/background.jpg")}
          style={styles.background_image}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              marginBottom: 40
            }}
          >
            <ButtonCustom
              style={{ width: "35%", marginRight: 10 }}
              label={constants.authScreen.textSignIn}
              textColor={this.getColor("SignIn", "textColor")}
              backgroundColor={this.getColor("SignIn", "backgroundColor")}
              onPress={() => this.onPress("SignIn")}
            />
            <ButtonCustom
              style={{ width: "35%" }}
              label={constants.authScreen.textSignUp}
              textColor={this.getColor("SignUp", "textColor")}
              backgroundColor={this.getColor("SignUp", "backgroundColor")}
              onPress={() => this.onPress("SignUp")}
            />
          </View>
          {status === "SignIn" ? (
            <SignIn
              focusedAnim={focusedAnim}
              email={signIn.email}
              password={signIn.password}
              onChangeText={(text, type) =>
                this.setState({
                  signIn: { ...this.state.signIn, [type]: text }
                })
              }
              onPress={() =>
                this.props.onSignIn({
                  email: signIn.email,
                  password: signIn.password
                })
              }
            />
          ) : status === "SignUp" ? (
            <SignUp
              focusedAnim={focusedAnim}
              fullName={signUp.fullName}
              password={signUp.password}
              email={signUp.email}
              phone={signUp.phone}
              onChangeText={(text, type) =>
                this.setState({
                  signUp: { ...this.state.signUp, [type]: text }
                })
              }
              onPress={() =>
                this.props.onSignUp({
                  email: signUp.email,
                  password: signUp.password
                })
              }
            />
          ) : null}
        </ImageBackground>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  background_image: {
    flex: 1,
    justifyContent: "center"
  },
  image_style_background: { opacity: 0.5 }
})

const mapStateToProps = state => {
  return {
    auth: state.authReducers
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onSignIn: payload => {
      dispatch(signInAction(payload))
    },
    onSignUp: payload => {
      dispatch(signUpAction(payload))
    }
  }
}

const AuthContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthScreen)
export default AuthContainer
