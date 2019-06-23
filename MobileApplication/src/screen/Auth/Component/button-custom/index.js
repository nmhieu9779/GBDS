import React from "react"
import {Text, TouchableOpacity} from "react-native"
import styles from "./styles"
import {scale} from "@src/utilities"
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome"

const ButtonCustom = ({style, label, iconColor, icon, onPress, backgroundColor, borderRadius, textColor}) => (
  <TouchableOpacity
    style={[
      styles.container,
      style,
      {
        backgroundColor: backgroundColor,
        borderTopLeftRadius: scale.moderateScale(borderRadius || 20),
        borderBottomRightRadius: scale.moderateScale(borderRadius || 20)
      }
    ]}
    onPress={onPress.bind(this)}>
    {label && <Text style={[styles.text, {color: textColor}]}>{label}</Text>}
    {icon && <FontAwesomeIcon icon={icon} color={iconColor} />}
  </TouchableOpacity>
)

export default ButtonCustom
