import React from "react"
import {View, TextInput} from "react-native"
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome"
import styles from "./styles"

const TextInputCustom = ({
  style,
  icon,
  placeholder,
  value,
  onChangeText,
  secureTextEntry,
  keyboardType,
  returnKeyType
}) => (
  <View style={[styles.container, style]}>
    <FontAwesomeIcon style={styles.icon} icon={icon} color={"#34A853"} />
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      value={value}
      onChangeText={(text) => onChangeText(text)}
      secureTextEntry={secureTextEntry}
      keyboardType={keyboardType}
      returnKeyType={returnKeyType}
    />
  </View>
)

export default TextInputCustom
