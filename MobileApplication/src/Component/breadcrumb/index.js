import React, { PureComponent } from "react"
import { Text, View, TouchableOpacity } from "react-native"
import { SafeAreaView } from "react-navigation"
import styles from "./styles"
import constants from "../../Constant"

function Line({ width, children }) {
  return <View style={[styles.line, { width: width }]}>{children}</View>
}

function LineItem({ selected, line, isFirst, isLast, isRight, isLeft }) {
  const { activeLineItem, unActiveLineItem, lengthItem } = styles
  return (
    <View
      style={[
        lengthItem,
        isLeft && !isFirst && (selected ? activeLineItem : unActiveLineItem),
        isRight && !isLast && (line ? activeLineItem : unActiveLineItem)
      ]}
    />
  )
}

function Crumb({ label, isFirst, isLast, length, selected, line, onPress }) {
  const {
    crumbContainer,
    crumbStyle,
    activeCrumbStyle,
    unActiveCrumbStyle,
    crumbTextStyle,
    activeCrumbTextStyle
  } = styles
  return (
    <View style={crumbContainer}>
      <Line width={constants.width / length}>
        <LineItem isFirst={isFirst} isLeft={true} selected={selected} />
        <LineItem isLast={isLast} isRight={true} line={line} />
      </Line>
      <TouchableOpacity
        style={[crumbStyle, selected ? activeCrumbStyle : unActiveCrumbStyle]}
        onPress={() => onPress()}
        activeOpacity={1}
      >
        <Text style={[crumbTextStyle, selected && activeCrumbTextStyle]}>
          {label}
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default class Breadcrumb extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <SafeAreaView style={[styles.breadcrums_container]}>
        {this.props.data.map(({ label, length, isFirst, isLast }, index) => (
          <Crumb
            key={index}
            index={index}
            label={label}
            isFirst={isFirst}
            isLast={isLast}
            selected={this.props.itemSelected >= index}
            line={this.props.itemSelected > index}
            onPress={() => this.props.onItemPress(index)}
            length={length}
          />
        ))}
      </SafeAreaView>
    )
  }
}
