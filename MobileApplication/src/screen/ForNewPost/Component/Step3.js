import React, {useState, useEffect} from "react"
import {Text, ScrollView, View, TextInput} from "react-native"
import {step3 as styles} from "../styles"
import SafeAreaView from "react-native-safe-area-view"
import TextInputCustom from "@src/component/text-input-custom"
import Header from "@src/component/header-post"
import DirectionInput from "@src/component/direction-input"
import {WIDTH, moderateScale} from "@src/utilities/scale"
import {stringStep3 as string} from "../string"
import FloorsInfo from "@src/component/floors-info"

const Step3 = ({onChangeData}) => {
  const [widthState, setWidthState] = useState("")
  const [landWidth, setLanWidth] = useState("")
  const [other, setOther] = useState("")
  const [floorsInfo, setFloorsInfo] = useState({})
  const [direction, setDriection] = useState({})

  useEffect(() => {
    onChangeData({
      step3: {
        ...floorsInfo,
        landWidth: parseInt(landWidth),
        widthState: parseInt(widthState),
        other: other,
        direction
      }
    })
  }, [widthState, landWidth, other, floorsInfo, direction])

  return (
    <SafeAreaView style={styles.container}>
      <Header text={string.header} />
      <ScrollView contentContainerStyle={styles.contentContainerStyle}>
        <Text style={styles.suggest}>{string.suggest}</Text>
        <TextInputCustom
          onChangeText={(text) => setWidthState(text)}
          value={widthState}
          width={WIDTH - moderateScale(10)}
          label={string.widthLabel}
          keyboardType={"numeric"}
        />
        <TextInputCustom
          onChangeText={(text) => setLanWidth(text)}
          value={landWidth}
          width={WIDTH - moderateScale(10)}
          label={string.landWidthLabel}
          keyboardType={"numeric"}
        />
        <DirectionInput onChangeData={(data) => setDriection(data)} />
        <FloorsInfo onChange={(data) => setFloorsInfo(data)} />
        <View style={styles.furnitureContainer}>
          <Text style={styles.furnitureTitle}>{string.furnitureTitle}</Text>
          <TextInput
            style={styles.furnitureInput}
            multiline={true}
            value={other}
            onChangeText={(text) => setOther(text)}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Step3
