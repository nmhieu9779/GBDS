import React, { Component } from "react"
import { Platform, StyleSheet, Text } from "react-native"
import propTypes from "prop-types"
import { SafeAreaView } from "react-navigation"

class HomeScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {}
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
