import React from "react"
import {View, Text, Modal, TouchableOpacity} from "react-native"
import styles from "./styles"
import string from "./string"
import {connect} from "react-redux"
import {closeSelectTypePostAction} from "./redux/actions"
import NavigationService from "@src/navigation/NavigationService"
import SafeAreaView from "react-native-safe-area-view"
import Card from "@src/component/card"

const SelectTypePost = ({visiable, close}) => {
  return (
    <Modal visible={visiable} transparent={true}>
      <SafeAreaView style={styles.modalContainer}>
        <Card style={styles.typeContainer}>
          <Text style={styles.modalTitle}>{string.modalTitle}</Text>
          <View style={styles.modalButtonContainer}>
            <TouchableOpacity
              style={styles.modalButton}
              onPress={() => {
                close()
                NavigationService.navigate("ForNewPost")
              }}
              activeOpacity={1}>
              <Text style={styles.textBtn}>{string.forSale}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.modalButton}
              onPress={() => {
                close()
                NavigationService.navigate("NeedNewPost")
              }}
              activeOpacity={1}>
              <Text style={styles.textBtn}>{string.forRent}</Text>
            </TouchableOpacity>
          </View>
        </Card>
      </SafeAreaView>
    </Modal>
  )
}

const mapStateToProps = ({selectTypePost}) => {
  return {
    visiable: selectTypePost.visiable
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
