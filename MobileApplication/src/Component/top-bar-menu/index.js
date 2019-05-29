import React from "react"
import Icon from "./icon"
import Title from "./title"
import styles from "./styles"
import SafeAreaView from "react-native-safe-area-view"
import stylesheets from "@src/common/stylesheets"

const TopBarMenu = ({icon, title, onPressLeft, onPressRight}) => (
  <SafeAreaView style={[styles.container, stylesheets.boxShadow]}>
    <Icon style={styles.icon} onPress={() => onPressLeft()} icon={icon.left} />
    <Title title={title} />
    <Icon style={styles.icon} onPress={() => onPressRight()} icon={icon.right} />
  </SafeAreaView>
)

export default TopBarMenu
