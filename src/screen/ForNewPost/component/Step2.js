import React, {useState} from "react"
import {Text, ScrollView, TextInput, View} from "react-native"
import {step2 as styles} from "../styles"
import {stringStep2 as string} from "../string"
import Header from "@src/component/header-post"

const Step2 = (props) => {
  const onChangeText = (stateName, data) => {
    props.onChangeData({[stateName]: {value: data}})
  }

  return (
    <View style={styles.container}>
      <Header text={string.header} />
      <ScrollView>
        <Text style={styles.noteContent}>
          <Text style={styles.note}>{string.note}</Text>
          {string.noteContent}
        </Text>
        <TextInput
          style={styles.textInput}
          multiline={true}
          value={props.description}
          onChangeText={onChangeText.bind(this, "description")}
        />
        <Text style={styles.suggest}>
          {string.suggest}
          <Text style={styles.suggestOther}>{string.suggestOther}</Text>
        </Text>
      </ScrollView>
    </View>
  )
}

export default Step2
