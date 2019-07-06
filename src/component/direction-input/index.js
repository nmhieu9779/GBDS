import React, {memo} from "react"
import styles from "./styles"
import string from "./string"
import ComboBox from "@src/component/combobox"
import {cleanObject} from "@src/utilities"
import {View} from "react-native"
import strings from "./string"

const DirectionInput = (props) => {
  const styleCBB = {
    container: styles.containerCombobox,
    combobox: styles.combobox
  }

  const onChangeSelected = (stateName, data) => {
    let params = {[stateName]: data}
    props.onChangeSelected(cleanObject(params))
  }

  return (
    <View style={styles.container}>
      {props.isDirection && (
        <ComboBox
          style={styleCBB}
          data={string.homeDirection.data}
          selected={props.direction.selected}
          title={strings.homeDirection.title}
          label={strings.homeDirection.label}
          onChangeSelected={onChangeSelected.bind(this, "direction")}
          enable={true}
          name={props.direction.name}
        />
      )}
      {props.isBaconDirection && (
        <ComboBox
          style={styleCBB}
          data={string.balconyDirection.data}
          selected={props.balconyDirection.selected}
          title={strings.balconyDirection.title}
          label={strings.balconyDirection.label}
          onChangeSelected={onChangeSelected.bind(this, "balconyDirection")}
          enable={true}
          name={props.balconyDirection.name}
        />
      )}
    </View>
  )
}

export default DirectionInput
