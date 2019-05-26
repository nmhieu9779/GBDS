import React from "react"
import ComboBox from "../combobox"
import styles from "./styles"

const ComboBoxDetail = ({
  is,
  style,
  data,
  selected,
  title,
  label,
  onChangeSelected
}) =>
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
    />
  )) ||
  null

export default ComboBoxDetail
