import React from "react"
import { View, Text, Modal, TouchableOpacity } from "react-native"
import SafeAreaViewBoxShadow from "../safe-area-view-box-shadow"
import styles from "./styles"
import string from "./string"
import { connect } from "react-redux"
import { closeSelectTypePostAction } from "./redux/actions"
import NavigationService from "../../navigation/NavigationService"

const SelectTypePost = ({ visiable, close }) => {
  return (
    <Modal visible={visiable} transparent={true}>
      <SafeAreaViewBoxShadow style={styles.modalContainer}>
        <View>
          <Text style={styles.modalTitle}>{string.modalTitle}</Text>
        </View>
        <View style={styles.modalContent} />
        <View style={styles.modalButtonContainer}>
          <TouchableOpacity
            style={styles.modalButton}
            onPress={() => {
              close()
              NavigationService.navigate("ForSalePostScreen")
            }}
          >
            <Text style={{ textAlign: "center" }}>{string.forSale}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.modalButton}
            onPress={() => {
              close()
              NavigationService.navigate("ForRentPostScreen")
            }}
          >
            <Text style={{ textAlign: "center" }}>{string.forRent}</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaViewBoxShadow>
    </Modal>
  )
}

const mapStateToProps = ({ selectTypePostReducers }) => {
  return {
    visiable: selectTypePostReducers.visiable
  }
}

const mapDispatchToProps = dispatch => {
  return {
    close: () => {
      dispatch(closeSelectTypePostAction())
    }
  }
}

const SelectTypePostContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SelectTypePost)

export default SelectTypePostContainer
