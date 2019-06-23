import React, {memo} from "react"
import {Text, View, TextInput, ScrollView} from "react-native"
import {styles_step2 as styles} from "../styles"
import {string_step2 as string} from "../string"
import TextInputCustom from "@src/component/text-input-custom"
import Header from "@src/component/header-post"
import {scale} from "@src/utilities"

const Step2 = (props) => {
  onChangeText = (stateName, text) => {
    let params = {[stateName]: {value: text}}
    props.onChangeText(params)
  }

  return (
    <View style={styles.container}>
      <Header text={string.header} />
      <ScrollView contentContainerStyle={styles.contentContainerStyle}>
        <TextInputCustom
          onChangeText={onChangeText.bind(this, "productTitle")}
          value={props.productTitle}
          width={scale.WIDTH - scale.moderateScale(10)}
          color={"red"}
          label={string.productTitle}
        />
        <View style={styles.infoPostContainer}>
          <Text style={styles.infoPostLabel}>{string.infoPostLabel}</Text>
          <TextInput
            style={styles.infoPostTextInput}
            value={props.description}
            multiline={true}
            onChangeText={onChangeText.bind(this, "description")}
          />
        </View>
      </ScrollView>
    </View>
  )
}

export default Step2
// (prevProps, nextProps) =>
//   prevProps.productTitle.value === nextProps.productTitle.value &&
//   prevProps.description.value === nextProps.description.value
