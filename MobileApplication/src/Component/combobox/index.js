import React from "react"
import {Text, View} from "react-native"
import SafeAreaView from "react-native-safe-area-view"
import ComboBoxBase from "./combobox-base"
import styles from "./styles"

const ComboBox = ({style, data, selected, title, label, onChangeSelected, enable, name}) => (
  <SafeAreaView style={[styles.container, style.container]}>
    <View style={styles.labelContainer}>
      <Text style={style.label}>{label}</Text>
    </View>
    <ComboBoxBase
      style={style.combobox}
      data={data || []}
      selected={selected}
      title={title}
      onChangeSelected={({id, name, type, selected}) => onChangeSelected({id, name, type, selected})}
      enable={enable}
      name={name}
    />
  </SafeAreaView>
)

export default ComboBox
