import React from "react"
import {Text, View} from "react-native"
import {SafeAreaView} from "react-navigation"
import ComboBoxBase from "./combobox-base"
import styles from "./styles"

const ComboBox = ({style, data, selected, title, label, onChangeSelected, enable}) => (
  <SafeAreaView style={[styles.container, style.container]}>
    <View style={styles.labelContainer}>
      <Text style={style.label}>{label}</Text>
    </View>
    <ComboBoxBase
      style={style.combobox}
      data={data || []}
      selected={selected}
      title={title}
      onChangeSelected={(item) => onChangeSelected(item)}
      enable={enable}
    />
  </SafeAreaView>
)

export default ComboBox
