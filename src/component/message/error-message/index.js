import React from "react"
import {Text, TouchableOpacity, Platform, StyleSheet, View, Animated} from "react-native"
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome"
import {faTimesCircle} from "@fortawesome/free-regular-svg-icons"
import styles from "./styles"
import {PanGestureHandler, State} from "react-native-gesture-handler"

const ErrorMessage = (props) => {
  const cardStyle = Platform.select({
    ios: () =>
      StyleSheet.create({
        container: {
          shadowRadius: 3,
          shadowOpacity: 0,
          shadowOffset: {width: 0, height: 3}
        }
      }),
    android: () =>
      StyleSheet.create({
        container: {
          elevation: 3
        }
      })
  })()
  return (
    <PanGestureHandler>
      <View
        style={[
          cardStyle,
          styles.container,
          {
            zIndex: 1,
            position: "absolute",
            backgroundColor: "white",
            top: 0,
            left: 0
          }
        ]}>
        <TouchableOpacity onPress={props.onPressClose.bind(this)}>
          <FontAwesomeIcon style={styles.icon} size={30} color={props.color} icon={faTimesCircle} />
          <Text>{props.message}</Text>
        </TouchableOpacity>
      </View>
    </PanGestureHandler>
  )
}

export default ErrorMessage
