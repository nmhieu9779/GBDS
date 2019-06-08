import React, {useState, useEffect} from "react"
import {Text, Animated, TouchableWithoutFeedback} from "react-native"
import SafeAreaView from "react-native-safe-area-view"
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome"
import {faTimesCircle} from "@fortawesome/free-regular-svg-icons"
import styles from "./styles"
import {getHeightStatusBar} from "@src/utilities/statusBar"

const ErrorMessage = (props) => {
  const [focusedAnim] = useState(new Animated.Value(0))

  useEffect(() => {
    Animated.timing(focusedAnim, {
      toValue: 1
    }).start()
  }, [])

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Animated.timing(focusedAnim, {
          toValue: 0
        }).start()
      }}>
      <Animated.View
        style={[
          styles.container,
          {
            borderLeftColor: props.color || "red",
            opacity: focusedAnim.interpolate({
              inputRange: [0, 1],
              outputRange: [0, 1]
            }),
            top: getHeightStatusBar()
          }
        ]}>
        <FontAwesomeIcon style={styles.icon} size={30} color={props.color || "red"} icon={faTimesCircle} />
        <Text>{props.message || "Email hoặc mật khẩu sai, vui lòng thử lại"}</Text>
      </Animated.View>
    </TouchableWithoutFeedback>
  )
}

export default ErrorMessage
