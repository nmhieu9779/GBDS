import React, { Component } from "react"
import {
  Platform,
  TextInput,
  Animated,
  TouchableWithoutFeedback
} from "react-native"
import { SafeAreaView } from "react-navigation"
import styles from "./styles"

class TextInputCustom extends Component {
  constructor(props) {
    super(props)
    this.state = {
      focusedAnim: new Animated.Value(0),
      value: ""
    }
  }

  componentDidUpdate = prevProps => {
    if (prevProps.value != this.props.value) {
      this.setState({
        value: this.props.value,
        focusedAnim: new Animated.Value(1)
      })
    }
  }

  render() {
    const { style, secureTextEntry, keyboardType, label } = this.props
    const { focusedAnim, value } = this.state
    const containerWidth = style.container.width
    return (
      <SafeAreaView style={[styles.container, style.container]}>
        <TouchableWithoutFeedback onPress={this.focus.bind(this)}>
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
          ref="input"
          value={value}
          style={[
            styles.input,
            style.input,
            {
              width: containerWidth
            }
          ]}
          onBlur={this.onBlur.bind(this)}
          onChangeText={text => this.props.onChangeText(text)}
          onFocus={this.onFocus.bind(this)}
          secureTextEntry={secureTextEntry}
          keyboardType={keyboardType}
        />
        {this.props.children}
        <Animated.View
          style={[
            styles.border,
            {
              width: focusedAnim.interpolate({
                inputRange: [0, 1],
                outputRange: [0, containerWidth]
              }),
              backgroundColor: "green"
            }
          ]}
        />
      </SafeAreaView>
    )
  }

  inputRef() {
    return this.refs.input
  }

  focus = () => {
    if (this.props.editable !== false) {
      this.inputRef().focus()
    }
  }

  onBlur = () => (this.state.value ? null : this._toggle(false))

  onFocus = () => this._toggle(true)

  _toggle(isActive) {
    Animated.timing(this.state.focusedAnim, {
      toValue: isActive ? 1 : 0
    }).start()
  }
}

export default TextInputCustom
