import React from "react"
import { Text, TouchableOpacity } from "react-native"
import styles from "./styles"
import { moderateScale } from "@src/utilities/scale"
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome"

const ButtonCustom = ({
  style,
  label,
  iconColor,
  icon,
  onPress,
  backgroundColor,
  borderRadius,
  textColor
}) => (
  <TouchableOpacity
    style={[
      styles.container,
      style,
      {
        backgroundColor: backgroundColor,
        borderTopLeftRadius: moderateScale(borderRadius || 20),
        borderBottomRightRadius: moderateScale(borderRadius || 20)
      }
    ]}
    onPress={() => onPress()}
  >
    {label && <Text style={[styles.text, { color: textColor }]}>{label}</Text>}
    {icon && <FontAwesomeIcon icon={icon} color={iconColor} />}
  </TouchableOpacity>
)

export default ButtonCustom
