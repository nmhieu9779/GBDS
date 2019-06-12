import React, {PureComponent} from "react"
import {StyleSheet, View, Image} from "react-native"
import {images} from "@src/common/images"
import {WIDTH} from "@src/utilities/scale"
import {connect} from "react-redux"
import {fetchPostForSale, getUserProfile, getUriAvatar} from "@src/redux/actions"
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
      this.props.navigation.navigate("HomeStack")
      if (isLogin) {
        this.props.getUserProfile({email: userOauth.email})
        this.props.getUriAvatar({email: userOauth.email})
      }
    } else {
      this.props.navigation.navigate("AuthStack")
    }
  }

  componentDidUpdate = async (prevProps) => {
    if (prevProps.loading !== this.props.loading && !this.props.loading) {
      let avatar = await getItemAsyncStorage("AVATAR")
      let userProfile = await getItemAsyncStorage("USER_PROFILE")
      let isLogin = await getItemAsyncStorage("IS_SIGNIN")
      if (isLogin) {
        !avatar &&
          !userProfile &&
          this.props.showMessage({
            typeMessage: `WARNING_DIALONG`,
            message:
              "Bạn chưa câp nhập thông tin cá nhân, vui lòng cập nhập thông tin cá nhân để được sử dụng đầy đủ chức năng nhất"
          })
      }
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

const mapStateToProps = (state) => ({
  loading: state.userProfile.loading || state.newFeedForSale.loading
})

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPostForSaleHome: () => {
      dispatch(fetchPostForSale({page: 1, size: 10}))
    },
    getUserProfile: (payload) => {
      dispatch(getUserProfile(payload))
    },
    getUriAvatar: (payload) => {
      dispatch(getUriAvatar(payload))
    },
    showMessage: (payload) => {
      dispatch(onShowMessage(payload))
    }
  }
}

const AuthLoadingContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthLoading)

export default AuthLoadingContainer
