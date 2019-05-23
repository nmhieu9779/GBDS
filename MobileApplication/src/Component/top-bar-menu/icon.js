import React from "react"
import { TouchableOpacity, View } from "react-native"
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome"

const Icon = ({ icon, onPress, style }) =>
  (icon && (
    <TouchableOpacity style={style} onPress={() => onPress()}>
      <FontAwesomeIcon size={24} icon={icon} />
    </TouchableOpacity>
  )) || <View style={{ width: 56 }} />

export default Icon
