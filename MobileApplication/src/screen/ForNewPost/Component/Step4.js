import React, {useState} from "react"
import {Text, ScrollView, TouchableOpacity, Image, View} from "react-native"
import Header from "@src/component/header-post"
import {stringStep4 as string} from "../string"
import {step4 as styles} from "../styles"
import ImagePicker from "react-native-image-picker"
import SafeAreaView from "react-native-safe-area-view"
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome"
import {faImages} from "@fortawesome/free-regular-svg-icons"

const Step4 = ({onChangeData}) => {
  const [data, setData] = useState([{isSelected: true}])

  const selectPhotoTapped = () => {
    const options = {
      title: "Chọn Hình"
    }
    ImagePicker.showImagePicker(options, ({type, uri}) => {
      type && uri && handleResponse({type, uri})
    })
  }

  const editContentType = (contentType) => {
    let temp = contentType
    temp = temp.replace("image/", ".")
    return temp
  }
  const handleResponse = ({type, uri}) => {
    let formData = new FormData()
    formData.append("image", {
      uri: uri,
      name: `${Date.parse(new Date())}${editContentType(type)}`,
      type: type
    })

    console.log(formData)
  }

  return (
    <SafeAreaView style={styles.container}>
      <Header text={string.header} />
      <ScrollView contentContainerStyle={styles.contentContainerStyle}>
        <Text style={styles.note}>{string.note}</Text>
        <Text style={styles.suggest}>{string.suggest}</Text>
        <View style={styles.imageContainer}>
          {data.map(
            (item, index) =>
              (item.isSelected && (
                <TouchableOpacity
                  key={index}
                  style={[styles.image, styles.center, styles.border]}
                  onPress={selectPhotoTapped.bind(this)}>
                  <FontAwesomeIcon size={50} icon={faImages} color={"#C9D9CB"} />
                  <Text>{string.image}</Text>
                </TouchableOpacity>
              )) ||
              (item.uri && <Image key={index} style={styles.image} source={{uri: item.uri}} />)
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Step4
