import React, { useState } from "react"
import { Text, ScrollView, View, TextInput } from "react-native"
import { step3 as styles } from "../styles"
import { SafeAreaView } from "react-navigation"
import TextInputCustom from "../../Component/text-input-custom"
import Header from "../../Component/header-post"
import DirectionInput from "../../Component/direction-input"
import { width, moderateScale } from "@src/utilities/scale"
import { stringStep3 as string } from "../string"

const Step3 = () => {
  const [widthState, setWidthState] = useState("")
  const [landWidth, setLanWidth] = useState("")
  const [other, setOther] = useState("")

  return (
    <SafeAreaView style={styles.container}>
      <Header text={string.header} />
      <ScrollView contentContainerStyle={styles.contentContainerStyle}>
        <Text style={styles.suggest}>{string.suggest}</Text>
        <TextInputCustom
          onChangeText={text => setWidthState(text)}
          value={widthState}
          width={width - moderateScale(10)}
          label={string.widthLabel}
          keyboardType={"numeric"}
        />
        <TextInputCustom
          onChangeText={text => setLanWidth(text)}
          value={landWidth}
          width={width - moderateScale(10)}
          label={string.landWidthLabel}
          keyboardType={"numeric"}
        />
        <DirectionInput />
        <View style={styles.furnitureContainer}>
          <Text style={styles.furnitureTitle}>{string.furnitureTitle}</Text>
          <TextInput
            style={styles.furnitureInput}
            multiline={true}
            value={other}
            onChangeText={text => setOther(text)}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Step3
