import React, {PureComponent} from "react"
import {Platform, StyleSheet, View, Image} from "react-native"
import AsyncStorage from "@react-native-community/async-storage"

class AuthLoadingScreen extends PureComponent {
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
        <Image source={require("../../res/logo.png")} />
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

export default AuthLoadingScreen
