import React, { Component } from "react"
import { Text, ScrollView, TouchableOpacity, Image, View } from "react-native"
import Header from "../../Component/HeaderPost"
import constants from "../../Constant"
import style from "../style"
import ImagePicker from "react-native-image-picker"
import { SafeAreaView } from "react-navigation"
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome"
import { faImages } from "@fortawesome/free-regular-svg-icons"

class Step4 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [{ isSelected: true }]
    }
  }

  render() {
    const styles = style.step4
    const string = constants.ForSalePostScreen.step4
    return (
      <SafeAreaView style={[styles.container, this.props.style]}>
        <Header text={string.header} />
        <ScrollView>
          <Text style={styles.note}>{string.note}</Text>
          <Text style={styles.suggest}>{string.suggest}</Text>
          <View style={styles.imageContainer}>
            {this.state.data.map(
              (item, index) =>
                (item.isSelected && (
                  <TouchableOpacity
                    style={[styles.image, styles.center]}
                    onPress={this.selectPhotoTapped.bind(this)}
                  >
                    <FontAwesomeIcon
                      size={50}
                      icon={faImages}
                      color={"#C9D9CB"}
                    />
                    <Text>{string.image}</Text>
                  </TouchableOpacity>
                )) ||
                (item.uri && (
                  <Image style={styles.image} source={{ uri: item.uri }} />
                ))
            )}
          </View>
        </ScrollView>
      </SafeAreaView>
    )
  }

  selectPhotoTapped() {
    let me = this
    const options = {
      title: "Chọn Hình"
    }

    ImagePicker.showImagePicker(options, response => {
      if (response.didCancel) {
        console.log("User cancelled photo picker")
      } else if (response.error) {
        console.log("ImagePicker Error: ", response.error)
      } else if (response.customButton) {
        console.log("User tapped custom button: ", response.customButton)
      } else {
        me.handleResponse(response)
      }
    })
  }

  handleResponse = async response => {
    const data = [{ uri: response.uri }, ...this.state.data]
    this.setState({
      data: data
    })
  }
}

export default Step4
