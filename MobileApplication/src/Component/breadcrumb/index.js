import React from "react"
import {Text, View, TouchableOpacity} from "react-native"
import {SafeAreaView} from "react-navigation"
import styles from "./styles"
import constants from "../../Constant"

const {
  activeLineItem,
  unActiveLineItem,
  lengthItem,
  crumbContainer,
  crumbStyle,
  activeCrumbStyle,
  unActiveCrumbStyle,
  crumbTextStyle,
  activeCrumbTextStyle
} = styles

const Line = ({width, children}) => <View style={[styles.line, {width: width}]}>{children}</View>

const LineItem = ({selected, line, isFirst, isLast, isRight, isLeft}) => (
  <View
    style={[
      lengthItem,
      isLeft && !isFirst && (selected ? activeLineItem : unActiveLineItem),
      isRight && !isLast && (line ? activeLineItem : unActiveLineItem)
    ]}
  />
)

const Crumb = ({label, isFirst, isLast, length, selected, line, onPress}) => (
  <View style={crumbContainer}>
    <Line width={constants.width / length}>
      <LineItem isFirst={isFirst} isLeft={true} selected={selected} />
      <LineItem isLast={isLast} isRight={true} line={line} />
    </Line>
    <TouchableOpacity
      style={[crumbStyle, selected ? activeCrumbStyle : unActiveCrumbStyle]}
      onPress={() => onPress()}
      activeOpacity={1}>
      <Text style={[crumbTextStyle, selected && activeCrumbTextStyle]}>{label}</Text>
    </TouchableOpacity>
  </View>
)

const Breadcrumb = ({data, onItemPress, itemSelected}) => (
  <SafeAreaView style={[styles.breadcrums_container]}>
    {data.map(({label, length, isFirst, isLast}, index) => (
      <Crumb
        key={index}
        index={index}
        label={label}
        isFirst={isFirst}
        isLast={isLast}
        selected={itemSelected >= index}
        line={itemSelected > index}
        onPress={() => onItemPress(index)}
        length={length}
      />
    ))}
  </SafeAreaView>
)

export default Breadcrumb
