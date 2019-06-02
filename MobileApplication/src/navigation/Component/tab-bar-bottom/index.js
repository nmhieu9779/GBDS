import React from "react"
import {TouchableOpacity, Text} from "react-native"
import styles from "./styles"
import string from "./string"
import SafeAreaView from "react-native-safe-area-view"
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome"

const TabBarBottomItem = ({label, icon, color, onPress}) => (
  <TouchableOpacity style={styles.btnContainer} onPress={onPress.bind(this)}>
    <FontAwesomeIcon size={25} color={color} icon={icon} />
    <Text style={[styles.label, {color: color}]}>{label}</Text>
  </TouchableOpacity>
)

const TabBarBottom = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      {string.data.map(({label, icon, stateName}, index) => (
        <TabBarBottomItem
          key={index}
          label={label}
          icon={icon}
          color={navigation.state.index === index ? "white" : "#33AAD5"}
          onPress={() => {
            navigation.navigate(stateName)
          }}
        />
      ))}
    </SafeAreaView>
  )
}

export default TabBarBottom
