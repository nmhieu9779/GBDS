import React, { PureComponent } from "react"
import { StyleSheet, Text } from "react-native"

class Title extends PureComponent {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <Text
        style={{
          flex: 1,
          fontSize: 24,
          color: "black",
          textAlign: "center",
          textAlignVertical: "center"
        }}
      >
        {this.props.title}
      </Text>
    )
  }
}

export default Title
