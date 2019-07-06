import React from "react"
import {TouchableOpacity} from "react-native"
import {faUserCircle} from "@fortawesome/free-solid-svg-icons"
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome"
import {scale} from "@src/utilities"
import ImagePicker from "react-native-image-crop-picker"
import FastImage from "react-native-fast-image"

const AvatarCirCle = (props) => {
  const selectPhotoTapped = async () => {
    ImagePicker.openPicker({
      multiple: false,
      mediaType: "photo"
    }).then((images) => {
      props.onChange(images)
    })
  }

  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={() => {
        props.enableEdit ? selectPhotoTapped() : props.onPress()
      }}>
      {props.avatarImageUrl ? (
        <FastImage
          style={{
            width: scale.moderateScale(props.size),
            height: scale.moderateScale(props.size),
            overflow: "hidden",
            borderRadius: scale.moderateScale(props.size / 2)
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
