import React, {useState, useEffect} from "react"
import {Text, Animated, TouchableWithoutFeedback, View, TouchableOpacity} from "react-native"
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome"
import {faExclamationTriangle} from "@fortawesome/free-solid-svg-icons"
import styles from "./styles"
import {getHeightStatusBar} from "@src/utilities/statusBar"

const WarningMessageDialog = (props) => {
  const [focusedAnim] = useState(new Animated.Value(0))

  useEffect(() => {
    Animated.timing(focusedAnim, {
      toValue: 1
    }).start()
  }, [])

  useEffect(() => {
    !props.isShow &&
      Animated.timing(focusedAnim, {
        toValue: 0
      }).start()
  }, [props.isShow])

  return (
    <TouchableWithoutFeedback onPress={props.onPressClose.bind(this)}>
      <Animated.View
        style={[
          styles.container,
          {
            opacity: focusedAnim.interpolate({
              inputRange: [0, 1],
              outputRange: [0, 1]
            }),
            top: getHeightStatusBar()
          }
        ]}>
        <TouchableWithoutFeedback>
          <View style={styles.messConatiner}>
            <View style={styles.topContainer}>
              <FontAwesomeIcon style={styles.icon} size={30} color={"white"} icon={faExclamationTriangle} />
              <Text style={styles.btnText}>{props.warning}</Text>
            </View>
            <Text style={styles.content}>{props.message}</Text>
            <TouchableOpacity
              activeOpacity={1}
              style={styles.btnContainer}
              onPress={() => {
                props.onPressBtn()
              }}>
              <Text style={styles.btnText}>{props.btnLabel}</Text>
            </TouchableOpacity>
          </View>
        </TouchableWithoutFeedback>
      </Animated.View>
    </TouchableWithoutFeedback>
  )
}

export default WarningMessageDialog
