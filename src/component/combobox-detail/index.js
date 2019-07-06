import React from "react"
import ComboBox from "@src/component/combobox"
import styles from "./styles"

const ComboBoxDetail = ({style, data, selected, title, label, onChangeSelected, enable, name}) => (
  <ComboBox
    style={
      style || {
        container: styles.containerCombobox,
        combobox: styles.combobox
      }
    }
    data={data}
    selected={selected}
    title={title}
    label={label}
    onChangeSelected={onChangeSelected.bind()}
    enable={enable}
    name={name}
  />
)

export default ComboBoxDetail
