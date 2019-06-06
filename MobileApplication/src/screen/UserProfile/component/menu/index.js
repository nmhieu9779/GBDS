import React from "react"
import {View, Text, TouchableOpacity} from "react-native"
import {faChevronRight} from "@fortawesome/free-solid-svg-icons"
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome"
import styles from "./styles"

const MenuItem = (props) => (
  <TouchableOpacity onPress={() => props.onPress()} style={styles.itemInfo}>
    {props.icon && <FontAwesomeIcon style={styles.icon} color="#3B5998" icon={props.icon} />}
    <View style={styles.labelContainer}>
      <Text>{props.label}</Text>
    </View>
    <FontAwesomeIcon color={"#AAB8C2"} icon={faChevronRight} />
  </TouchableOpacity>
)

const Menu = (props) => {
  return (
    <>
      {props.data.map((item, index) => (
        <MenuItem key={index} icon={item.icon} label={item.label} onPress={() => item.onPress()} />
      ))}
    </>
  )
}

export default Menu
