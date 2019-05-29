import React from "react"
import {TouchableOpacity} from "react-native"
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome"
import styles from "./styles"
import SafeAreaViewBoxShadow from "../safe-area-view-box-shadow"

const FloatingButton = ({icon, onPress}) => (
  <SafeAreaViewBoxShadow style={styles.container}>
    <TouchableOpacity onPress={() => onPress()} style={styles.floatingButtonConainer}>
      <FontAwesomeIcon color={"white"} icon={icon} />
    </TouchableOpacity>
  </SafeAreaViewBoxShadow>
)

export default FloatingButton
