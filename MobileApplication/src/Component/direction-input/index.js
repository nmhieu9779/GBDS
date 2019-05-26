import React, { useState } from "react"
import { SafeAreaView } from "react-navigation"
import ComboBoxDetail from "../combobox-detail"
import styles from "./styles"
import string from "./string"

const DirectionInput = () => {
  const [homeDirectionSelected, setHomeDirectionSelected] = useState(-1)
  const [baconDirectionSelected, setBaconDirectionSelected] = useState(-1)

  return (
    <SafeAreaView style={styles.container}>
      <ComboBoxDetail
        is={true}
        data={string.homeDirection.data}
        selected={homeDirectionSelected}
        title={string.homeDirection.title}
        label={string.homeDirection.label}
        onChangeSelected={selected => setHomeDirectionSelected(selected)}
      />
      <ComboBoxDetail
        is={true}
        data={string.baconDirection.data}
        selected={baconDirectionSelected}
        title={string.baconDirection.title}
        label={string.baconDirection.label}
        onChangeSelected={selected => setBaconDirectionSelected(selected)}
      />
    </SafeAreaView>
  )
}

export default DirectionInput
