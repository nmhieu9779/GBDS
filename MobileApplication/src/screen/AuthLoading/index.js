import React, {PureComponent} from "react"
import {StyleSheet, View, Image} from "react-native"
import AsyncStorage from "@react-native-community/async-storage"
import images from "@src/common/images"
import {width, height} from "@src/utilities/scale"

class AuthLoading extends PureComponent {
  constructor(props) {
    super(props)
    this._bootstrapAsync()
  }

  _bootstrapAsync = async () => {
    const userInfo = await AsyncStorage.getItem("userInfo")
    setTimeout(() => {
      this.props.navigation.navigate(
        (userInfo && JSON.parse(userInfo).accessToken && "HomeStack") || "AuthStack"
      )
    }, 2000)
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

export default AuthLoading
