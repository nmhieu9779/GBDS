import React, {PureComponent} from "react"
import {StyleSheet, View, Image} from "react-native"
import AsyncStorage from "@react-native-community/async-storage"
import images from "@src/common/images"

class AuthLoading extends PureComponent {
  constructor(props) {
    super(props)
    this._bootstrapAsync()
  }

  _bootstrapAsync = async () => {
    const accessToken = await AsyncStorage.getItem("accessToken")
    setTimeout(() => {
      this.props.navigation.navigate(accessToken ? "HomeStack" : "AuthStack")
    }, 2000)
  }

  render() {
    return (
      <View style={styles.container}>
        <Image source={images.logo} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#4267b2"
  }
})

export default AuthLoading
