import React, { PureComponent } from "react"
import Icon from "./icon"
import Title from "./title"
import styles from "./styles"
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

export default TopBarMenu
