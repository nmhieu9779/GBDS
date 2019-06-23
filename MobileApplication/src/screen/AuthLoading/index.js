import React, {PureComponent} from "react"
import {StyleSheet, View} from "react-native"
import {images} from "@src/common/images"
import {connect} from "react-redux"
import {bindActionCreators} from "redux"
import {getCity, getUserProfile, getUriAvatar, getInfoSignIn, getProductType} from "@src/redux/actions"
import {onShowMessage} from "@src/component/message/redux/actions"
import {asyncStorage, scale} from "@src/utilities"
import FastImage from "react-native-fast-image"

class AuthLoading extends PureComponent {
  constructor(props) {
    super(props)
    this._bootstrapAsync()
  }

  _bootstrapAsync = async () => {
    let userOauth = await asyncStorage.getItemAsyncStorage("USER_OAUTH")
    let isSkipLogin = await asyncStorage.getItemAsyncStorage("IS_SKIP_SIGNIN")
    let isLogin = await asyncStorage.getItemAsyncStorage("IS_SIGNIN")

    if (isSkipLogin) {
      if (isLogin) {
        this.props.getInfoSignIn(userOauth)
      } else {
        this.props.navigation.navigate("HomeStack")
      }
    } else {
      this.props.navigation.navigate("AuthStack")
    }
  }

  componentDidUpdate = (prevProps) => {
    if (prevProps.success !== this.props.success && this.props.success) {
      this.props.getUserProfile({email: this.props.email})
      this.props.getUriAvatar({email: this.props.email})
      this.props.getProductType()
      this.props.getCity()
    }
    if (prevProps.loading !== this.props.loading && !this.props.loading) {
      this.props.newUser &&
        this.props.onShowMessage({
          typeMessage: `WARNING_DIALONG`,
          message:
            "Bạn chưa câp nhập thông tin cá nhân, vui lòng cập nhập thông tin cá nhân để được sử dụng đầy đủ chức năng nhất"
        })
      this.props.navigation.navigate("HomeStack")
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <FastImage resizeMode={"contain"} style={{width: scale.WIDTH - 20}} source={images.logo} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2E75ED"
  }
})

const mapStateToProps = (state) => {
  return {
    success: state.auth.signIn.success,
    email: state.auth.signIn.success && state.auth.signIn.response.email,
    loading:
      state.userProfile.userProfile.loading ||
      state.userProfile.uriAvatar.loading ||
      state.address.city.loading,
    newUser: !state.userProfile.userProfile.success || !state.userProfile.uriAvatar.success
  }
}

const mapDispatchToProps = (dispatch) => {
  let actionCreators = {getUserProfile, getUriAvatar, getInfoSignIn, onShowMessage, getCity, getProductType}
  let actions = bindActionCreators(actionCreators, dispatch)
  return {...actions, dispatch}
}

const AuthLoadingContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthLoading)

export default AuthLoadingContainer
