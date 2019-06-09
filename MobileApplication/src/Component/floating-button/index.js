import React from "react"
import {TouchableOpacity} from "react-native"
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome"
import styles from "./styles"
import Card from "@src/component/card"

const FloatingButton = ({icon, onPress}) => (
  <Card style={styles.container}>
    <TouchableOpacity onPress={() => onPress()} style={styles.floatingButtonConainer}>
      <FontAwesomeIcon color={"white"} icon={icon} />
    </TouchableOpacity>
  </Card>
)

export default FloatingButton
