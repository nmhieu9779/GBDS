import React, { PureComponent } from "react"
import { StyleSheet, Text } from "react-native"

class Header extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return <Text style={styles.container}>{this.props.text}</Text>
  }
}

const styles = StyleSheet.create({
  container: { fontWeight: "bold", fontSize: 20, padding: 10 }
})

export default Header
