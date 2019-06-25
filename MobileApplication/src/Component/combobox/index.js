import React from "react"
import {Text, View} from "react-native"
import ComboBoxBase from "./combobox-base"
import styles from "./styles"

const ComboBox = ({style, data, selected, title, label, onChangeSelected, enable, name}) => (
  <View style={[styles.container, style.container]}>
    {label && (
      <View style={styles.labelContainer}>
        <Text style={style.label}>{label}</Text>
      </View>
    )}
    <ComboBoxBase
      style={style.combobox}
      data={data || []}
      selected={selected}
      title={title}
      onChangeSelected={onChangeSelected.bind()}
      enable={enable}
      name={name}
    />
  </View>
)

export default ComboBox
