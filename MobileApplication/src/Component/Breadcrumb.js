import React, { Component } from "react"
import { Text, Platform, StyleSheet, TouchableOpacity } from "react-native"
import { SafeAreaView } from "react-navigation"

function Item(props) {
  isChoose = () => (props.selected === props.index ? true : false)
  return (
    <TouchableOpacity
      style={[
        styles.step_item,
        {
          justifyContent: this.isChoose() ? "flex-start" : "center"
        }
      ]}
      onPress={() => props.onPress()}
    >
      <Text
        style={{
          fontSize: this.isChoose() ? 14 : 11,
          color: this.isChoose() ? "red" : "black",
          opacity: 0.9
        }}
      >
        {props.label}
      </Text>
    </TouchableOpacity>
  )
}

export default class Breadcrumb extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <SafeAreaView
        style={[styles.breadcrums_container, this.props.styleContainer]}
      >
        {this.props.data.map((item, index) => (
          <Item
            key={index}
            index={index}
            label={item.label}
            selected={this.props.itemSelected}
            onPress={() => this.props.onItemPress(index)}
          />
        ))}
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  breadcrums_container: {},
  step_item: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "white",
    paddingTop: 5
  }
})
