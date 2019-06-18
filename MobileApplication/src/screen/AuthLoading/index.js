import React, {PureComponent} from "react"
import {StyleSheet, View, Image} from "react-native"
import {images} from "@src/common/images"
import {WIDTH} from "@src/utilities/scale"
import {connect} from "react-redux"
import {bindActionCreators} from "redux"
import {fetchPostForSale, getUserProfile, getUriAvatar, getInfoSignIn} from "@src/redux/actions"
import {onShowMessage} from "@src/component/message/redux/actions"
import {getItemAsyncStorage} from "@src/utilities/asyncStorage"

class AuthLoading extends PureComponent {
  constructor(props) {
    super(props)
    this._bootstrapAsync()
  }

  _bootstrapAsync = async () => {
    let userOauth = await getItemAsyncStorage("USER_OAUTH")
    let isSkipLogin = await getItemAsyncStorage("IS_SKIP_SIGNIN")
    let isLogin = await getItemAsyncStorage("IS_SIGNIN")

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
    }
    if (prevProps.loading !== this.props.loading && !this.props.loading) {
      // this.props.newUser &&
      //   this.props.onShowMessage({
      //     typeMessage: `WARNING_DIALONG`,
      //     message:
      //       "Bạn chưa câp nhập thông tin cá nhân, vui lòng cập nhập thông tin cá nhân để được sử dụng đầy đủ chức năng nhất"
      //   })
      this.props.navigation.navigate("HomeStack")
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Image resizeMode={"contain"} style={{width: WIDTH - 20}} source={images.logo} />
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
    loading: state.userProfile.userProfile.loading || state.userProfile.uriAvatar.loading,
    newUser: !state.userProfile.userProfile.success || !state.userProfile.uriAvatar.success
  }
}

const mapDispatchToProps = (dispatch) => {
  let actionCreators = {getUserProfile, getUriAvatar, getInfoSignIn, onShowMessage}
  let actions = bindActionCreators(actionCreators, dispatch)
  return {...actions, dispatch}
}

const AuthLoadingContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthLoading)

export default AuthLoadingContainer
