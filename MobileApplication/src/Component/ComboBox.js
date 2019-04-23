import React, { Component } from "react"
import { Platform, StyleSheet, Text, View } from "react-native"
import propTypes from "prop-types"
import { SafeAreaView } from "react-navigation"
import ComboBoxBase from "./ComboBoxBase"

class ComboBox extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { style, data, selected, title, label } = this.props
    return (
      <SafeAreaView style={[styles.container, style.container]}>
        <View style={styles.labelContainer}>
          <Text style={style.label}>{label}</Text>
        </View>
        <ComboBoxBase
          style={{ container: style.combobox }}
          data={data}
          selected={selected}
          title={title}
          onChangeSelected={item => this.props.onChangeSelected(item)}
        />
      </SafeAreaView>
    )
  }
}

ComboBox.propTypes = {
  style: propTypes.object
}

ComboBox.defaultProps = {
  style: { container: {} }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 5
  },
  labelContainer: {
    flex: 1,
    paddingRight: 5
  }
})

export default ComboBox
