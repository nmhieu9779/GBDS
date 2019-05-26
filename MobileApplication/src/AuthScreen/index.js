import React, { useState, useEffect } from "react"
import { View, ImageBackground, Animated } from "react-native"
import styles from "./styles"
import string from "./string"
import { connect } from "react-redux"
import { signInAction, signUpAction } from "./redux/actions"
import { SafeAreaView } from "react-navigation"
import ButtonCustom from "./Component/button-custom"
import SignIn from "./Component/sign-in"
import SignUp from "./Component/sign-up"

const AuthScreen = ({
  onSignIn,
  onSignUp,
  signInSuccess,
  signUpSuccess,
  navigation
}) => {
  const defaultSignUp = {
    fullName: "",
    password: "123456",
    email: "nmhieu9779@gmail.com",
    phone: ""
  }
  const [focusedAnim] = useState(new Animated.Value(0))
  const [status, setStatus] = useState("")
  const [signIn, setSignIn] = useState({
    email: "",
    password: ""
  })
  const [signUp, setSignUp] = useState(defaultSignUp)

  useEffect(() => {
    signInSuccess && navigation.navigate("HomeScreen")
  }, [signInSuccess])

  useEffect(() => {
    signUpSuccess &&
      (setSignIn({ email: signUp.email, password: signUp.password }),
      setSignUp(defaultSignUp),
      onPress("SignIn"))
  }, [signUpSuccess])

  const getColor = (type, typeColor) => {
    color = "white"
    switch (typeColor) {
      case "textColor":
        color = status === type ? "white" : "black"
        break
      case "backgroundColor":
        color = status === type ? "#4285F4" : "white"
        break
      default:
        break
    }
    return color
  }

  const onPress = action => {
    if (status) {
      Animated.timing(focusedAnim, {
        toValue: 0
      }).start()
      setTimeout(() => {
        setStatus(action)
        Animated.timing(focusedAnim, {
          toValue: 2
        }).start()
      }, 500)
    } else {
      setStatus(action)
      Animated.timing(focusedAnim, {
        toValue: 2
      }).start()
    }
  }

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
            label={string.textSignIn}
            textColor={getColor("SignIn", "textColor")}
            backgroundColor={getColor("SignIn", "backgroundColor")}
            onPress={() => onPress("SignIn")}
          />
          <ButtonCustom
            style={{ width: "35%" }}
            label={string.textSignUp}
            textColor={getColor("SignUp", "textColor")}
            backgroundColor={getColor("SignUp", "backgroundColor")}
            onPress={() => onPress("SignUp")}
          />
        </View>
        {status === "SignIn" && (
          <SignIn
            focusedAnim={focusedAnim}
            email={signIn.email}
            password={signIn.password}
            onChangeText={(text, type) =>
              setSignIn({ ...signIn, [type]: text })
            }
            onPress={() =>
              onSignIn({
                email: signIn.email,
                password: signIn.password
              })
            }
          />
        )}
        {status === "SignUp" && (
          <SignUp
            focusedAnim={focusedAnim}
            fullName={signUp.fullName}
            password={signUp.password}
            email={signUp.email}
            phone={signUp.phone}
            onChangeText={(text, type) =>
              setSignUp({ ...signUp, [type]: text })
            }
            onPress={() =>
              onSignUp({
                email: signUp.email,
                password: signUp.password
              })
            }
          />
        )}
      </ImageBackground>
    </SafeAreaView>
  )
}

const mapStateToProps = state => {
  return {
    signInSuccess: state.authReducers.signInSuccess,
    signUpSuccess: state.authReducers.signUpSuccess
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
