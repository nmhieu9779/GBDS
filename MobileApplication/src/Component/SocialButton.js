import React, { Component } from "react"
import { Image, StyleSheet, TouchableOpacity } from "react-native"
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome"

export default class SocialButton extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { icon, size, color } = this.props
    return (
      <TouchableOpacity style={stylesSocialButton.container}>
        {icon ? (
          <FontAwesomeIcon color={color} size={size} icon={icon} />
        ) : null}
      </TouchableOpacity>
    )
  }
}
const stylesSocialButton = StyleSheet.create({
  container: {
    borderColor: "#ccc",
    borderWidth: 0.5,
    borderRadius: 999,
    padding: 5,
    margin: 10,
    width: 50,
    height: 50,
    alignItems: "center",
    justifyContent: "center"
  }
})
