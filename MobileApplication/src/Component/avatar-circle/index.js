import React from "react"
import {Image, TouchableOpacity} from "react-native"
import {faUserCircle} from "@fortawesome/free-solid-svg-icons"
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome"
import {moderateScale} from "@src/utilities/scale"
import ImagePicker from "react-native-image-picker"

const AvatarCirCle = (props) => {
  const selectPhotoTapped = () => {
    const options = {
      title: "Chọn Hình"
    }
    ImagePicker.showImagePicker(options, ({type, uri}) => {
      type && uri && props.onChange({type, uri})
    })
  }

  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={() => {
        props.enableEdit && selectPhotoTapped()
      }}>
      {props.avatarImageUrl ? (
        <Image
          style={{
            width: moderateScale(props.size),
            height: moderateScale(props.size),
            overflow: "hidden",
            borderRadius: moderateScale(props.size / 2)
          }}
          source={{uri: props.avatarImageUrl}}
        />
      ) : (
        <FontAwesomeIcon size={props.size} icon={faUserCircle} />
      )}
    </TouchableOpacity>
  )
}

export default AvatarCirCle
