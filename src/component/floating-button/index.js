import React from "react"
import {TouchableOpacity, Animated, Platform, StyleSheet} from "react-native"
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome"
import styles from "./styles"
import {PanGestureHandler, State} from "react-native-gesture-handler"
import {scale} from "@src/utilities"

const FloatingButton = (props) => {
  let _translateX = new Animated.Value(0)
  let _translateY = new Animated.Value(0)
  let _lastOffset = {x: 0, y: 0}
  let _onGestureEvent = Animated.event(
    [
      {
        nativeEvent: {
          translationX: _translateX,
          translationY: _translateY
        }
      }
    ],
    {useNativeDriver: true}
  )

  const _onHandlerStateChange = (event) => {
    if (event.nativeEvent.oldState === State.ACTIVE) {
      _lastOffset.x += event.nativeEvent.translationX
      _lastOffset.y += event.nativeEvent.translationY
      _translateX.setOffset(_lastOffset.x)
      _translateX.setValue(0)
      _translateY.setOffset(_lastOffset.y)
      _translateY.setValue(0)
    }
  }

  return (
    <PanGestureHandler onGestureEvent={_onGestureEvent} onHandlerStateChange={_onHandlerStateChange}>
      <Animated.View
        style={{
          transform: [{translateX: _translateX}, {translateY: _translateY}],
          borderRadius: scale.moderateScale(30),
          position: "absolute",
          backgroundColor: "white",
          bottom: 100,
          right: 10,
          ...Platform.select({
            ios: {
              zIndex: 999
            },
            android: {
              elevation: 999
            }
          })
        }}>
        <TouchableOpacity onPress={() => props.onPress()} style={styles.floatingButtonConainer}>
          <FontAwesomeIcon size={30} color={"white"} icon={props.icon} />
        </TouchableOpacity>
      </Animated.View>
    </PanGestureHandler>
  )
}

export default FloatingButton
