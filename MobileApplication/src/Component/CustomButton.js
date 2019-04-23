import React, { Component } from "react"
import { StyleSheet, TouchableOpacity } from "react-native"

export default class CustomButton extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <TouchableOpacity
        style={[stylesButton.container, this.props.style]}
        onPress={this.props.onPress}
      >
        {this.props.children}
      </TouchableOpacity>
    )
  }
}
const stylesButton = StyleSheet.create({
  container: {
    backgroundColor: "rgb(58,169,171)",
    borderRadius: 999,
    height: 50,
    alignItems: "center",
    justifyContent: "center"
    // opacity: 1
  }
})
