import React, { Component } from "react"
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Dimensions,
  ImageBackground,
  Animated
} from "react-native"
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

const { width, height } = Dimensions.get("screen")

function ButtonCustom(props) {
  return (
    <TouchableOpacity
      style={[
        {
          backgroundColor: props.backgroundColor,
          justifyContent: "center",
          alignItems: "center",
          padding: 10,
          borderTopLeftRadius: props.borderRadius ? props.borderRadius : 20,
          borderBottomRightRadius: props.borderRadius ? props.borderRadius : 20,
          borderColor: "gray",
          borderWidth: 0.5
        },
        props.style
      ]}
      onPress={() => props.onPress()}
    >
      {props.label ? (
        <Text style={{ color: props.textColor, fontWeight: "bold" }}>
          {props.label}
        </Text>
      ) : null}
      {props.icon ? (
        <FontAwesomeIcon icon={props.icon} color={props.iconColor} />
      ) : null}
    </TouchableOpacity>
  )
}

function TextInputCustom(props) {
  return (
    <View
      style={[
        {
          backgroundColor: "#f0f0f0",
          flexDirection: "row",
          alignItems: "center",
          padding: 10
        },
        props.style
      ]}
    >
      <FontAwesomeIcon
        style={{ marginRight: 10 }}
        icon={props.icon}
        color={"#34A853"}
      />
      <TextInput
        style={{
          flex: 1,
          ...Platform.select({ android: { padding: 0 } })
        }}
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
  return (
    <Animated.View
      style={{
        opacity: props.focusedAnim.interpolate({
          inputRange: [0, 2],
          outputRange: [0, 1]
        })
      }}
    >
      <View style={{ alignItems: "center", marginBottom: 40 }}>
        <TextInputCustom
          style={{
            width: 0.7 * width + 10,
            borderTopLeftRadius: 15,
            marginBottom: 1
          }}
          icon={faMailBulk}
          placeholder={"Email"}
          value={props.email}
          onChangeText={text => props.onChangeText(text, "email")}
          keyboardType={"email-address"}
          returnKeyType={"next"}
        />
        <TextInputCustom
          style={{
            width: 0.7 * width + 10,
            borderBottomRightRadius: 15,
            marginBottom: 10
          }}
          icon={faUserLock}
          placeholder={"Mật khẩu"}
          value={props.password}
          onChangeText={text => props.onChangeText(text, "password")}
          secureTextEntry={true}
          returnKeyType={"go"}
        />
        <View style={{ width: 0.7 * width + 10, alignItems: "flex-end" }}>
          <TouchableOpacity>
            <Text>{"Quên mật khẩu?"}</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ alignItems: "center" }}>
        <ButtonCustom
          style={{
            width: 0.7 * width + 10,
            marginBottom: 10,
            paddingTop: 15,
            paddingBottom: 15
          }}
          label={"Đăng nhập"}
          textColor={"white"}
          backgroundColor={"#4285F4"}
          onPress={() => props.onPress()}
        />
        <Text style={{ marginBottom: 10 }}>{"hoặc"}</Text>
        <View style={{ flexDirection: "row" }}>
          <ButtonCustom
            style={{ marginRight: 10 }}
            borderRadius={10}
            icon={faFacebookF}
            iconColor={"white"}
            backgroundColor={"#3B5998"}
          />
          <ButtonCustom
            icon={faGoogle}
            borderRadius={10}
            iconColor={"white"}
            backgroundColor={"red"}
          />
        </View>
      </View>
    </Animated.View>
  )
}

function SignUp(props) {
  return (
    <Animated.View
      style={{
        opacity: props.focusedAnim.interpolate({
          inputRange: [0, 2],
          outputRange: [0, 1]
        })
      }}
    >
      <View style={{ alignItems: "center", marginBottom: 40 }}>
        <TextInputCustom
          style={{
            width: 0.7 * width + 10,
            borderTopLeftRadius: 15,
            marginBottom: 1
          }}
          icon={faUser}
          placeholder={"Họ và tên"}
          value={props.fullName}
          onChangeText={text => props.onChangeText(text, "fullName")}
          returnKeyType={"next"}
        />
        <TextInputCustom
          style={{
            width: 0.7 * width + 10,
            marginBottom: 1
          }}
          icon={faUserLock}
          placeholder={"Mật khẩu"}
          value={props.password}
          onChangeText={text => props.onChangeText(text, "password")}
          secureTextEntry={true}
          returnKeyType={"next"}
        />
        <TextInputCustom
          style={{
            width: 0.7 * width + 10,
            marginBottom: 1
          }}
          icon={faMailBulk}
          placeholder={"Email"}
          value={props.email}
          onChangeText={text => props.onChangeText(text, "email")}
          keyboardType={"email-address"}
          returnKeyType={"next"}
        />
        <TextInputCustom
          style={{
            width: 0.7 * width + 10,
            borderBottomRightRadius: 15
          }}
          icon={faPhone}
          placeholder={"Số điện thoại"}
          value={props.phone}
          onChangeText={text => props.onChangeText(text, "phone")}
          keyboardType={"numeric"}
          returnKeyType={"next"}
        />
      </View>
      <View style={{ alignItems: "center" }}>
        <ButtonCustom
          style={{
            width: 0.7 * width + 10,
            marginBottom: 10,
            paddingTop: 15,
            paddingBottom: 15
          }}
          label={"Đăng ký"}
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
      debugger
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
    console.log(this.props)
    const { status, focusedAnim, signIn, signUp } = this.state
    return (
      <SafeAreaView style={styles.container}>
        <ImageBackground
          imageStyle={{ opacity: 0.5 }}
          source={require("../../res/background.jpg")}
          style={{ flex: 1, justifyContent: "center" }}
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
              label={"Đăng nhập"}
              textColor={this.getColor("SignIn", "textColor")}
              backgroundColor={this.getColor("SignIn", "backgroundColor")}
              onPress={() => this.onPress("SignIn")}
            />
            <ButtonCustom
              style={{ width: "35%" }}
              label={"Đăng ký"}
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
  }
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
