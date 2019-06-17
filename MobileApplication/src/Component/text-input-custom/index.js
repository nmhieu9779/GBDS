import React, {useState, useEffect, useRef} from "react"
import {Platform, TextInput, Animated, TouchableWithoutFeedback, View} from "react-native"
import styles from "./styles"

const TextInputCustom = ({
  value,
  secureTextEntry,
  keyboardType,
  label,
  editable,
  onChangeText,
  children,
  color,
  width,
  marginBottom
}) => {
  const [focusedAnim] = useState(() => (value ? new Animated.Value(1) : new Animated.Value(0)))

  let textInput = useRef(null)

  const focus = () => editable && textInput.current.focus()

  const onBlur = () => !value && _toggle(false)

  const onFocus = () => _toggle(true)

  const _toggle = (isActive) => {
    Animated.timing(focusedAnim, {
      toValue: isActive ? 1 : 0
    }).start()
  }

  return (
    <View style={[styles.container, {width, marginBottom: marginBottom}]}>
      <TouchableWithoutFeedback onPress={focus.bind(this)}>
        <Animated.View
          style={[
            styles.labelContainer,
            {
              opacity: focusedAnim.interpolate({
                inputRange: [0, 0.5, 1],
                outputRange: [0.5, 0, 1]
              }),
              ...Platform.select({
                ios: {
                  top: focusedAnim.interpolate({
                    inputRange: [0, 0.5, 0.51, 1],
                    outputRange: [17, 17, 2, 2]
                  })
                },
                android: {
                  top: focusedAnim.interpolate({
                    inputRange: [0, 0.5, 0.51, 1],
                    outputRange: [17, 17, 0, 0]
                  })
                }
              }),
              left: focusedAnim.interpolate({
                inputRange: [0, 0.5, 0.51, 1],
                outputRange: [10, 30, 0, 5]
              })
            }
          ]}>
          <Animated.Text style={[styles.label, {color: color}]}>{label}</Animated.Text>
        </Animated.View>
      </TouchableWithoutFeedback>
      <TextInput
        ref={textInput}
        value={value}
        style={[
          styles.input,
          {
            width: width
          }
        ]}
        onBlur={onBlur.bind(this)}
        onChangeText={(text) => onChangeText(text)}
        onFocus={onFocus.bind(this)}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        editable={editable}
      />
      {children}
      <Animated.View
        style={[
          styles.border,
          {
            width: focusedAnim.interpolate({
              inputRange: [0, 1],
              outputRange: [0, width]
            }),
            backgroundColor: "green"
          }
        ]}
      />
    </View>
  )
}

export default TextInputCustom
