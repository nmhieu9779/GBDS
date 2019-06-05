import React from "react"
import ComboBox from "@src/component/combobox"
import styles from "./styles"

const ComboBoxDetail = ({is, style, data, selected, title, label, onChangeSelected, enable, name}) =>
  (is && (
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
      onChangeSelected={onChangeSelected.bind(this)}
      enable={enable}
      name={name}
    />
  )) ||
  null

export default ComboBoxDetail
