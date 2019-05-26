import React, { useState } from "react"
import {
  Platform,
  TextInput,
  Animated,
  TouchableWithoutFeedback
} from "react-native"
import { SafeAreaView } from "react-navigation"
import styles from "./styles"

const TextInputCustom = ({
  value,
  style,
  secureTextEntry,
  keyboardType,
  label,
  editable,
  onChangeText,
  children
}) => {
  const [focusedAnim] = useState(new Animated.Value(0))

  let textInput = React.createRef()

  const focus = () => editable && textInput.current.focus()

  const onBlur = () => !value && _toggle(false)

  const onFocus = () => _toggle(true)

  const _toggle = isActive => {
    Animated.timing(focusedAnim, {
      toValue: isActive ? 1 : 0
    }).start()
  }

  return (
    <SafeAreaView style={[styles.container, style.container]}>
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
          ]}
        >
          <Animated.Text style={[styles.label, style.labelStyle]}>
            {label}
          </Animated.Text>
        </Animated.View>
      </TouchableWithoutFeedback>
      <TextInput
        ref={textInput}
        value={value}
        style={[
          styles.input,
          style.input,
          {
            width: style.container.width
          }
        ]}
        onBlur={onBlur.bind(this)}
        onChangeText={text => onChangeText(text)}
        onFocus={onFocus.bind(this)}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
      />
      {children}
      <Animated.View
        style={[
          styles.border,
          {
            width: focusedAnim.interpolate({
              inputRange: [0, 1],
              outputRange: [0, style.container.width]
            }),
            backgroundColor: "green"
          }
        ]}
      />
    </SafeAreaView>
  )
}

export default TextInputCustom
