import React, {useState} from "react"
import {Text, ScrollView, TextInput} from "react-native"
import {step2 as styles} from "../styles"
import {stringStep2 as string} from "../string"
import Header from "@src/component/header-post"
import SafeAreaView from "react-native-safe-area-view"

const Step2 = ({onChangeData}) => {
  const [value, setValue] = useState("")

  const pushData = () =>
    onChangeData({
      description: value
    })

  return (
    <SafeAreaView style={styles.container}>
      <Header text={string.header} />
      <ScrollView>
        <Text style={styles.noteContent}>
          <Text style={styles.note}>{string.note}</Text>
          {string.noteContent}
        </Text>
        <TextInput
          style={styles.textInput}
          multiline={true}
          value={value}
          onChangeText={(text) => setValue(text)}
          onBlur={() => pushData()}
        />
        <Text style={styles.suggest}>
          {string.suggest}
          <Text style={styles.suggestOther}>{string.suggestOther}</Text>
        </Text>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Step2
