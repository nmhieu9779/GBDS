import React from "react"
import {Text, View, TouchableOpacity} from "react-native"
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome"
import {faExclamationTriangle} from "@fortawesome/free-solid-svg-icons"
import styles from "./styles"
import Modal from "react-native-modal"
import Card from "@src/component/card"
import {scale} from "@src/utilities"

const WarningMessageDialog = (props) => {
  return (
    <Modal
      isVisible={true}
      style={styles.container}
      deviceHeight={scale.HEIGHT}
      onBackdropPress={props.onPressClose.bind(this)}>
      <Card style={styles.messConatiner}>
        <View style={styles.topContainer}>
          <FontAwesomeIcon style={styles.icon} size={30} color={"white"} icon={faExclamationTriangle} />
          <Text style={styles.btnText}>{props.warning}</Text>
        </View>
        <View style={styles.content}>
          <Text>{props.message}</Text>
        </View>
        <TouchableOpacity
          activeOpacity={1}
          style={styles.btnContainer}
          onPress={() => {
            props.onPressBtn()
          }}>
          <Text style={styles.btnText}>{props.btnLabel}</Text>
        </TouchableOpacity>
      </Card>
    </Modal>
  )
}

export default WarningMessageDialog
