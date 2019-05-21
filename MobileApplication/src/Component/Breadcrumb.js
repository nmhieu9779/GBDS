import React, { Component } from "react"
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Platform
} from "react-native"
import { SafeAreaView } from "react-navigation"
import constants from "../Constant"

const HEIGHT = 50
const COLOR = "#e52b50"

function Crumb(props) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <View
        style={{
          height: 10,
          width: constants.width / 7,
          position: "absolute",
          top: constants.width / 28 - 5,
          flexDirection: "row"
        }}
      >
        <View
          style={[
            { flex: 1 },
            !props.isFirst &&
              ((props.selected >= props.index && {
                backgroundColor: COLOR
              }) || {
                borderColor: "#d6d6d6",
                borderTopWidth: 1,
                borderBottomWidth: 1
              })
          ]}
        />
        <View
          style={[
            { flex: 1 },
            !props.isLast &&
              ((props.selected > props.index && { backgroundColor: COLOR }) || {
                borderColor: "#d6d6d6",
                borderTopWidth: 1,
                borderBottomWidth: 1
              })
          ]}
        />
      </View>
      <TouchableOpacity
        style={[
          styles.crumbStyle,
          (props.selected >= props.index && styles.activeCrumbStyle) || {
            borderColor: "#d6d6d6",
            borderWidth: 1
          }
        ]}
        onPress={() => props.onPress()}
        activeOpacity={1}
      >
        <Text
          style={[
            styles.crumbTextStyle,
            props.selected >= props.index && styles.activeCrumbTextStyle
          ]}
          numberOfLines={1}
        >
          {props.label}
        </Text>
      </TouchableOpacity>
    </View>
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
        removeClippedSubviews={false}
      >
        {this.props.data.map((item, index) => (
          <Crumb
            key={index}
            index={index}
            label={item.label}
            isFirst={item.isFirst}
            isLast={item.isLast}
            selected={this.props.itemSelected}
            onPress={() => this.props.onItemPress(index)}
          />
        ))}
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  breadcrums_container: {
    backgroundColor: "transparent",
    flexDirection: "row",
    borderTopWidth: 1,
    borderTopColor: "#d6d6d6",
    justifyContent: "space-around",
    alignItems: "center",
    width: constants.width,
    height: HEIGHT
  },

  crumbStyle: {
    width: constants.width / 14,
    height: constants.width / 14,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: constants.width / 7,
    backgroundColor: "white"
  },
  activeCrumbStyle: {
    backgroundColor: COLOR
  },
  crumbTextStyle: {
    color: COLOR,
    fontSize: 20
  },
  activeCrumbTextStyle: {
    color: "white",
    fontWeight: "bold"
  }
})
