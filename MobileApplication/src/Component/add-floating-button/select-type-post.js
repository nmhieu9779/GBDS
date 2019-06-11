import React from "react"
import {View, Text, TouchableOpacity} from "react-native"
import styles from "./styles"
import string from "./string"
import {connect} from "react-redux"
import {bindActionCreators} from "redux"
import {closeSelectTypePost} from "@src/redux/actions"
import NavigationService from "@src/navigation/NavigationService"
import Card from "@src/component/card"
import Modal from "react-native-modal"
import {HEIGHT} from "@src/utilities/scale"

const SelectTypePost = ({visiable, closeSelectTypePost}) => {
  return (
    <Modal
      isVisible={visiable}
      deviceHeight={HEIGHT}
      onBackdropPress={() => closeSelectTypePost()}
      style={styles.modalContainer}>
      <Card style={styles.typeContainer}>
        <Text style={styles.modalTitle}>{string.modalTitle}</Text>
        <View style={styles.modalButtonContainer}>
          <TouchableOpacity
            style={[styles.modalButton, {marginRight: 2.5}]}
            onPress={() => {
              closeSelectTypePost()
              NavigationService.navigate("ForNewPost")
            }}
            activeOpacity={1}>
            <Text style={styles.textBtn}>{string.forSale}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.modalButton, {marginLeft: 2.5}]}
            onPress={() => {
              closeSelectTypePost()
              NavigationService.navigate("NeedNewPost")
            }}
            activeOpacity={1}>
            <Text style={styles.textBtn}>{string.forRent}</Text>
          </TouchableOpacity>
        </View>
      </Card>
    </Modal>
  )
}

const mapStateToProps = ({selectTypePost}) => {
  return {
    visiable: selectTypePost.visiable
  }
}

const mapDispatchToProps = (dispatch) => {
  let actionCreators = {
    closeSelectTypePost
  }
  let actions = bindActionCreators(actionCreators, dispatch)
  return {...actions, dispatch}
}

const SelectTypePostContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SelectTypePost)

export default SelectTypePostContainer
