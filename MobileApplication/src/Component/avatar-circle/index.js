import React from "react"
import {TouchableOpacity} from "react-native"
import {faUserCircle} from "@fortawesome/free-solid-svg-icons"
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome"
import {scale} from "@src/utilities"
import ImagePicker from "react-native-image-picker"
import FastImage from "react-native-fast-image"

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
