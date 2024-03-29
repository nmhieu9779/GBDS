import React, {useState, useEffect} from "react"
import {View, ImageBackground, Animated, TouchableOpacity, Text, Platform} from "react-native"
import styles from "./styles"
import string from "./string"
import {connect} from "react-redux"
import {bindActionCreators} from "redux"
import {signIn, signUp, getInfoFacebook} from "@src/redux/actions"
import SafeAreaView from "react-native-safe-area-view"
import ButtonCustom from "./component/button-custom"
import SignIn from "./component/sign-in"
import SignUp from "./component/sign-up"
import {images} from "@src/common/images"
import {onShowMessage} from "@src/component/message/redux/actions"
import {asyncStorage} from "@src/utilities"
import {LoginManager, AccessToken} from "react-native-fbsdk"

const Auth = (props) => {
  const defaultSignUp = {
    fullName: "",
    password: "",
    email: "",
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
    !props.loading && props.signInSuccess && validateInfo()
  }, [props.loading])

  useEffect(() => {
    props.getInfoFacebookSuccess && props.signIn({email: props.email, with3RdParty: true})
  }, [props.getInfoFacebookSuccess])

  const validateInfo = () => {
    props.isNewProfile &&
      props.onShowMessage({
        typeMessage: `WARNING_DIALONG`,
        message:
          "Bạn chưa câp nhập thông tin cá nhân, vui lòng cập nhập thông tin cá nhân để được sử dụng đầy đủ chức năng nhất"
      })
    props.navigation.navigate("NewFeedForSale")
  }

  useEffect(() => {
    props.signUpSuccess &&
      (setSignIn({email: signUp.email, password: signUp.password}),
      setSignUp(defaultSignUp),
      onPress("SignIn"))
  }, [props.signUpSuccess])

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

  const onPress = (action) => {
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

  const onPressSkipLogin = async () => {
    await asyncStorage.setItemAsyncStorage({keyName: "IS_SKIP_SIGNIN", data: true})
    await asyncStorage.setItemAsyncStorage({keyName: "IS_SIGNIN", data: false})
    await props.navigation.navigate("HomeStack")
  }

  onLoginFacebook = () => {
    Platform.OS === "android" &&
      LoginManager.logInWithPermissions(["email"]).then(
        function(result) {
          AccessToken.getCurrentAccessToken().then((data) => {
            const {accessToken} = data
            props.getInfoFacebook(accessToken)
          })
        },
        function(error) {
          console.log(error)
        }
      )
  }

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        imageStyle={styles.image_style_background}
        source={require("../../../assets/images/background.jpg")}
        style={styles.background_image}>
        <TouchableOpacity onPress={() => onPressSkipLogin()} style={styles.btnSkipLogin}>
          <Text>{"Bỏ qua"}</Text>
        </TouchableOpacity>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginBottom: 40
          }}>
          <ButtonCustom
            style={{width: "35%", marginRight: 10}}
            label={string.textSignIn}
            textColor={getColor("SignIn", "textColor")}
            backgroundColor={getColor("SignIn", "backgroundColor")}
            onPress={() => onPress("SignIn")}
          />
          <ButtonCustom
            style={{width: "35%"}}
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
            onChangeText={(text, type) => setSignIn({...signIn, [type]: text})}
            onPress={() =>
              props.signIn({
                email: signIn.email,
                password: signIn.password
              })
            }
            onLoginFacebook={onLoginFacebook.bind()}
          />
        )}
        {status === "SignUp" && (
          <SignUp
            focusedAnim={focusedAnim}
            fullName={signUp.fullName}
            password={signUp.password}
            email={signUp.email}
            phone={signUp.phone}
            onChangeText={(text, type) => setSignUp({...signUp, [type]: text})}
            onPress={() =>
              props.signUp({
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

const mapStateToProps = (state) => {
  return {
    signInSuccess: state.auth.signIn.success,
    signUpSuccess: state.auth.signUp.success,
    isNewProfile: !state.userProfile.userProfile.success,
    loading: state.userProfile.userProfile.loading || state.userProfile.uriAvatar.loading,
    getInfoFacebookSuccess: state.auth.infoFacebook.success,
    email: state.auth.infoFacebook.response && state.auth.infoFacebook.response.email
  }
}

const mapDispatchToProps = (dispatch) => {
  let actionCreators = {
    signIn,
    signUp,
    onShowMessage,
    getInfoFacebook
  }
  let actions = bindActionCreators(actionCreators, dispatch)
  return {...actions, dispatch}
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Auth)
