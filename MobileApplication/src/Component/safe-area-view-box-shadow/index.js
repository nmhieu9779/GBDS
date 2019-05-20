import React, { PureComponent } from "react"
import { SafeAreaView } from "react-navigation"
import styles from "./styles"

class SafeAreaViewBoxShadow extends PureComponent {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <SafeAreaView style={[this.props.style, styles.boxShadow]}>
        {this.props.children}
      </SafeAreaView>
    )
  }
}

export default SafeAreaViewBoxShadow
