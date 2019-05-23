import React from "react"
import Icon from "./icon"
import Title from "./title"
import styles from "./styles"
import SafeAreaViewBoxShadow from "../safe-area-view-box-shadow"

const TopBarMenu = ({ icon, title, onPressLeft, onPressRight }) => (
  <SafeAreaViewBoxShadow style={styles.container}>
    <Icon style={styles.icon} onPress={() => onPressLeft()} icon={icon.left} />
    <Title title={title} />
    <Icon
      style={styles.icon}
      onPress={() => onPressRight()}
      icon={icon.right}
    />
  </SafeAreaViewBoxShadow>
)

export default TopBarMenu
