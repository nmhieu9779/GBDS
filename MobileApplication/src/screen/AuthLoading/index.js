import React, {PureComponent} from "react"
import {StyleSheet, View, Image} from "react-native"
import AsyncStorage from "@react-native-community/async-storage"
import images from "@src/common/images"
import {width} from "@src/utilities/scale"
import {connect} from "react-redux"
import {onFetchPostForSaleHome} from "@src/screen/NewFeedForSale/redux/actions"
import {onGetUserProfile} from "@src/screen/UserProfile/redux/actions"

class AuthLoading extends PureComponent {
  constructor(props) {
    super(props)
    this._bootstrapAsync()
  }

  _bootstrapAsync = async () => {
    const userOauth = await AsyncStorage.getItem("USER_OAUTH")
    const skipLogin = await AsyncStorage.getItem("SKIP_LOGIN")

    if (skipLogin && JSON.parse(skipLogin)) {
      this.props.fetchPostForSaleHome()
      userOauth && this.props.getUserProfile({email: JSON.parse(userOauth).email})
    } else {
      this.props.navigation.navigate("AuthStack")
    }
  }

  componentDidUpdate = (prevProps) => {
    if (prevProps.loading !== this.props.loading && !this.props.loading) {
      this.props.navigation.navigate("HomeStack")
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Image resizeMode={"contain"} style={{width: width - 20}} source={images.logo} />
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
      dispatch(onFetchPostForSaleHome())
    },
    getUserProfile: (payload) => {
      dispatch(onGetUserProfile(payload))
    }
  }
}

const AuthLoadingContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthLoading)

export default AuthLoadingContainer
