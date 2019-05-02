import React, { Component } from "react"
import { Platform, StyleSheet, Text } from "react-native"
import propTypes from "prop-types"
import { SafeAreaView } from "react-navigation"
import AsyncStorage from "@react-native-community/async-storage"

class HomeScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {}
    AsyncStorage.removeItem("accessToken")
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text />
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ccc"
  }
})

export default HomeScreen
