import React from "react"
import {TouchableOpacity, View, Platform} from "react-native"
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome"
import {moderateScale} from "@src/utilities/scale"

const Icon = ({icon, onPress, style}) =>
  (icon && (
    <TouchableOpacity style={style} onPress={() => onPress()}>
      <FontAwesomeIcon size={moderateScale(Platform.OS === "ios" ? 20 : 23)} icon={icon} />
    </TouchableOpacity>
  )) || <View style={{width: moderateScale(40)}} />

export default Icon
