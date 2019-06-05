import React, {useState, useEffect} from "react"
import SafeAreaView from "react-native-safe-area-view"
import ComboBoxDetail from "@src/component/combobox-detail"
import styles from "./styles"
import string from "./string"

const DirectionInput = ({onChangeData}) => {
  const [homeDirectionSelected, setHomeDirectionSelected] = useState(-1)
  const [baconDirectionSelected, setBaconDirectionSelected] = useState(-1)

  const [homeDirectionName, setHomeDirectionName] = useState("")
  const [baconDirectionName, setBaconDirectionName] = useState("")

  useEffect(() => {
    onChangeData({direction: homeDirectionName, balconyDirection: baconDirectionName})
  }, [homeDirectionSelected, baconDirectionSelected])

  return (
    <SafeAreaView style={styles.container}>
      <ComboBoxDetail
        is={true}
        data={string.homeDirection.data}
        selected={homeDirectionSelected}
        title={string.homeDirection.title}
        label={string.homeDirection.label}
        name={homeDirectionName}
        onChangeSelected={({selected, name}) => {
          setHomeDirectionSelected(selected)
          setHomeDirectionName(name)
        }}
        enable={true}
      />
      <ComboBoxDetail
        is={true}
        data={string.baconDirection.data}
        selected={baconDirectionSelected}
        title={string.baconDirection.title}
        label={string.baconDirection.label}
        name={baconDirectionName}
        onChangeSelected={({selected, name}) => {
          setBaconDirectionSelected(selected)
          setBaconDirectionName(name)
        }}
        enable={true}
      />
    </SafeAreaView>
  )
}

export default DirectionInput
