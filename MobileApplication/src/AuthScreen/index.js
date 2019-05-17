import React, { Component } from "react"
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ImageBackground,
  Animated
} from "react-native"
import constants from "../Constant"
import styles from "./styles"
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
  const stylesButtonCustom = StyleSheet.create({
    container: {
      backgroundColor: props.backgroundColor,
      justifyContent: "center",
      alignItems: "center",
      padding: 10,
      borderTopLeftRadius: props.borderRadius || 20,
      borderBottomRightRadius: props.borderRadius || 20,
      borderColor: "gray",
      borderWidth: 0.5
    },
    text: { color: props.textColor, fontWeight: "bold" }
  })
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
  const stylesTextInputCustom = StyleSheet.create({
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
  })
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
  return (
    <Animated.View
      style={{
        opacity: props.focusedAnim.interpolate({
          inputRange: [0, 2],
          outputRange: [0, 1]
        })
      }}
    >
      <View style={styles.stylesSignIn.input_container}>
        <TextInputCustom
          style={styles.stylesSignIn.input}
          icon={faMailBulk}
          placeholder={constants.authScreen.email}
          value={props.email}
          onChangeText={text => props.onChangeText(text, "email")}
          keyboardType={"email-address"}
          returnKeyType={"next"}
        />
        <TextInputCustom
          style={styles.stylesSignIn.input}
          icon={faUserLock}
          placeholder={constants.authScreen.password}
          value={props.password}
          onChangeText={text => props.onChangeText(text, "password")}
          secureTextEntry={true}
          returnKeyType={"go"}
        />
        <View style={styles.stylesSignIn.button_forgot_password}>
          <TouchableOpacity onPress={() => alert(constants.commingSoon)}>
            <Text>{constants.authScreen.forgotPassword}</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.stylesSignIn.button_container}>
        <ButtonCustom
          style={styles.stylesSignIn.button_signIn}
          label={constants.authScreen.textSignIn}
          textColor={"white"}
          backgroundColor={"#4285F4"}
          onPress={() => props.onPress()}
        />
        <Text style={{ marginBottom: 10 }}>{constants.authScreen.or}</Text>
        <View style={styles.stylesSignIn.social_container}>
          <ButtonCustom
            style={styles.stylesSignIn.button_custom}
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
  return (
    <Animated.View
      style={{
        opacity: props.focusedAnim.interpolate({
          inputRange: [0, 2],
          outputRange: [0, 1]
        })
      }}
    >
      <View style={styles.stylesSignUp.input_container}>
        <TextInputCustom
          style={styles.stylesSignUp.input}
          icon={faUser}
          placeholder={constants.authScreen.fullName}
          value={props.fullName}
          onChangeText={text => props.onChangeText(text, "fullName")}
          returnKeyType={"next"}
        />
        <TextInputCustom
          style={styles.stylesSignUp.input}
          icon={faUserLock}
          placeholder={constants.authScreen.password}
          value={props.password}
          onChangeText={text => props.onChangeText(text, "password")}
          secureTextEntry={true}
          returnKeyType={"next"}
        />
        <TextInputCustom
          style={styles.stylesSignUp.input}
          icon={faMailBulk}
          placeholder={constants.authScreen.email}
          value={props.email}
          onChangeText={text => props.onChangeText(text, "email")}
          keyboardType={"email-address"}
          returnKeyType={"next"}
        />
        <TextInputCustom
          style={styles.stylesSignUp.input}
          icon={faPhone}
          placeholder={constants.authScreen.telephoneNumber}
          value={props.phone}
          onChangeText={text => props.onChangeText(text, "phone")}
          keyboardType={"numeric"}
          returnKeyType={"next"}
        />
      </View>
      <View style={styles.stylesSignUp.button_container}>
        <ButtonCustom
          style={styles.stylesSignUp.button_signUp}
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
      this.setState(
        {
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
        },
        this.onPress("SignIn")
      )
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
      <SafeAreaView style={styles.main.container}>
        <ImageBackground
          imageStyle={styles.main.image_style_background}
          source={require("../../res/background.jpg")}
          style={styles.main.background_image}
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
                this.onChangeText(text, type, "SignIn")
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
                this.onChangeText(text, type, "SignUp")
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
  onChangeText = (text, type, parent) => {
    switch (parent) {
      case "SignIn":
        this.setState({
          signIn: { ...this.state.signIn, [type]: text }
        })
        break
      case "SignUp":
        this.setState({
          signUp: { ...this.state.signUp, [type]: text }
        })
      default:
        break
    }
  }
}

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
