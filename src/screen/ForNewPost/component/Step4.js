import React, {memo} from "react"
import {Text, ScrollView, TouchableOpacity, View} from "react-native"
import Header from "@src/component/header-post"
import {stringStep4 as string} from "../string"
import {step4 as styles} from "../styles"
import ImagePicker from "react-native-image-crop-picker"
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome"
import {faImages, faTrashAlt} from "@fortawesome/free-regular-svg-icons"
import FastImage from "react-native-fast-image"

const Step4 = ({images, onUpload, deleteImage}) => {
  const selectPhotoTapped = async () => {
    ImagePicker.openPicker({
      multiple: true,
      mediaType: "photo"
    }).then((images) => {
      handleResponse(images)
    })
  }

  const editContentType = (contentType) => {
    let temp = contentType
    temp = temp.replace("image/", ".")
    return temp
  }
  const handleResponse = async (images) => {
    let formData = new FormData()
    images.map((item) => {
      formData.append("files", {
        uri: item.path,
        name: `${Date.parse(new Date())}${editContentType(item.mime)}`,
        type: item.mime
      })
      formData.append("floor", "-1")
      formData.append("uploadAs", "PROPERTY_IMAGES_OTHERS")
    })
    onUpload(formData)
  }

  return (
    <View style={styles.container}>
      <Header text={string.header} />
      <ScrollView contentContainerStyle={styles.contentContainerStyle}>
        <Text style={styles.note}>{string.note}</Text>
        <Text style={styles.suggest}>{string.suggest}</Text>
        <View style={styles.imageContainer}>
          {images &&
            images.map((item, index) => (
              <FastImage key={index} style={styles.image} source={{uri: item}}>
                <TouchableOpacity
                  style={styles.trashIcon}
                  onPress={deleteImage.bind(this, {uri: item, index: index})}>
                  <FontAwesomeIcon icon={faTrashAlt} color={"red"} />
                </TouchableOpacity>
              </FastImage>
            ))}
          <TouchableOpacity
            style={[styles.image, styles.center, styles.border]}
            onPress={selectPhotoTapped.bind(this)}>
            <FontAwesomeIcon size={50} icon={faImages} color={"#C9D9CB"} />
            <Text>{string.image}</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  )
}

export default Step4
