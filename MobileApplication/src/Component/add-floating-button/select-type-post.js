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
import {scale} from "@src/utilities"
import {toast} from "@src/utilities"

const SelectTypePost = (props) => {
  return (
    <Modal
      isVisible={props.visiable}
      deviceHeight={scale.HEIGHT}
      onBackdropPress={() => props.closeSelectTypePost()}
      style={styles.modalContainer}>
      <Card style={styles.typeContainer}>
        <Text style={styles.modalTitle}>{string.modalTitle}</Text>
        <View style={styles.modalButtonContainer}>
          <TouchableOpacity
            style={[styles.modalButton, {marginRight: 2.5}]}
            onPress={() => {
              props.isNewProfile
                ? toast.showToast("Bạn chưa câp nhập thông tin cá nhân", "#ffffff", "#E0002C")
                : NavigationService.navigate("ForNewPost")
              props.closeSelectTypePost()
            }}
            activeOpacity={1}>
            <Text style={styles.textBtn}>{string.forSale}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.modalButton, {marginLeft: 2.5}]}
            onPress={() => {
              props.isNewProfile
                ? toast.showToast("Bạn chưa câp nhập thông tin cá nhân", "#ffffff", "#E0002C")
                : NavigationService.navigate("NeedNewPost")
              props.closeSelectTypePost()
            }}
            activeOpacity={1}>
            <Text style={styles.textBtn}>{string.forRent}</Text>
          </TouchableOpacity>
        </View>
      </Card>
    </Modal>
  )
}

const mapStateToProps = (state) => {
  return {
    visiable: state.selectTypePost.visiable,
    screen: state.selectTypePost.screen,
    isNewProfile: !state.userProfile.userProfile.success && !state.userProfile.uriAvatar.success
  }
}

const mapDispatchToProps = (dispatch) => {
  let actionCreators = {closeSelectTypePost}
  let actions = bindActionCreators(actionCreators, dispatch)
  return {...actions, dispatch}
}

const SelectTypePostContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SelectTypePost)

export default SelectTypePostContainer
