import React, {memo} from "react"
import {ScrollView, View} from "react-native"
import {stringStep6 as string} from "../string"
import {step6 as styles} from "../styles"
import Header from "@src/component/header-post"
import TextInputCustom from "@src/component/text-input-custom"
import {scale} from "@src/utilities"

const Step6 = (props) => {
  onChangeText = (stateName, text) => {
    let params = {[stateName]: {value: text}}
    props.onChangeData(params)
  }

  return (
    <View style={styles.container}>
      <Header text={string.header} />
      <ScrollView contentContainerStyle={styles.contentContainerStyle}>
        <TextInputCustom
          onChangeText={onChangeText.bind(this, "name")}
          value={props.name}
          width={scale.WIDTH - scale.moderateScale(10)}
          label={string.nameLabel}
        />
        <TextInputCustom
          onChangeText={onChangeText.bind(this, "address")}
          value={props.address}
          width={scale.WIDTH - scale.moderateScale(10)}
          label={string.addressLable}
        />
        <TextInputCustom
          onChangeText={onChangeText.bind(this, "phone")}
          value={props.phone}
          width={scale.WIDTH - scale.moderateScale(10)}
          label={string.phoneNumberLabel}
          keyboardType={"numeric"}
        />
        <TextInputCustom
          onChangeText={onChangeText.bind(this, "email")}
          value={props.email}
          width={scale.WIDTH - scale.moderateScale(10)}
          label={string.emailLabel}
          keyboardType={"email-address"}
        />
      </ScrollView>
    </View>
  )
}

export default Step6
