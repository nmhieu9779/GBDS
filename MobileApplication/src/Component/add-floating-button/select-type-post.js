import React from "react"
import {View, Text, Modal, TouchableOpacity} from "react-native"
import stylesheets from "@src/common/stylesheets"
import styles from "./styles"
import string from "./string"
import {connect} from "react-redux"
import {closeSelectTypePostAction} from "./redux/actions"
import NavigationService from "../../navigation/NavigationService"
import SafeAreaView from "react-native-safe-area-view"

const SelectTypePost = ({visiable, close}) => {
  return (
    <Modal visible={visiable} transparent={true}>
      <SafeAreaView style={[styles.modalContainer, stylesheets.boxShadow]}>
        <Text style={styles.modalTitle}>{string.modalTitle}</Text>
        <View style={styles.modalButtonContainer}>
          <TouchableOpacity
            style={styles.modalButton}
            onPress={() => {
              close()
              NavigationService.navigate("ForSalePostScreen")
            }}>
            <Text style={styles.textBtn}>{string.forSale}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.modalButton}
            onPress={() => {
              close()
              NavigationService.navigate("NeedSalePostScreen")
            }}>
            <Text style={styles.textBtn}>{string.forRent}</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </Modal>
  )
}

const mapStateToProps = ({selectTypePostReducers}) => {
  return {
    visiable: selectTypePostReducers.visiable
  }
}

const mapDispatchToProps = (dispatch) => {
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
