import React, { PureComponent } from "react"
import { StyleSheet, Platform, Dimensions } from "react-native"
import { SafeAreaView } from "react-navigation"
import Icon from "./icon"
import Title from "./title"
import SafeAreaViewBoxShadow from "../safe-area-view-box-shadow"

class TopBarMenu extends PureComponent {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <SafeAreaViewBoxShadow style={styles.container}>
        <Icon
          style={styles.icon}
          onPress={() => this.props.onPressLeft()}
          icon={this.props.icon.left}
        />
        <Title title={this.props.title} />
        <Icon
          style={styles.icon}
          onPress={() => this.props.onPressRight()}
          icon={this.props.icon.right}
        />
      </SafeAreaViewBoxShadow>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    height: 56,
    backgroundColor: "white",
    alignItems: "center"
  },
  icon: {
    margin: 16
  }
})

export default TopBarMenu
