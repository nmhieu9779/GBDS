import React from "react"
import { Text, View } from "react-native"
import { SafeAreaView } from "react-navigation"
import ComboBoxBase from "./ComboBoxBase"
import styles from "./styles"

const ComboBox = ({
  style,
  data,
  selected,
  title,
  label,
  onChangeSelected
}) => (
  <SafeAreaView style={[styles.container, style.container]}>
    <View style={styles.labelContainer}>
      <Text style={style.label}>{label}</Text>
    </View>
    <ComboBoxBase
      style={style.combobox}
      data={data}
      selected={selected}
      title={title}
      onChangeSelected={item => onChangeSelected(item)}
    />
  </SafeAreaView>
)

export default ComboBox
