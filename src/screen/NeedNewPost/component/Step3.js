import React, {memo} from "react"
import {ScrollView, TouchableOpacity, Text, View} from "react-native"
import {styles_step3 as styles} from "../styles"
import {string_step3 as string} from "../string"
import Header from "@src/component/header-post"
import TextInputCustom from "@src/component/text-input-custom"
import {scale} from "@src/utilities"

const Step3 = (props) => {
  onChangeText = (stateName, text) => {
    let params = {[stateName]: {value: text}}
    props.onChangeText(params)
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
        <View style={styles.footer}>
          <TouchableOpacity onPress={props.onPress.bind()} style={styles.btnPost}>
            <Text style={{color: "white", fontWeight: "bold"}}>{props.isNew ? "Đăng bài" : "Chỉnh sửa"}</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  )
}

export default memo(
  Step3
  // (prevProps, nextProps) =>
  //   prevProps.name.value === nextProps.name.value &&
  //   prevProps.address.value === nextProps.address.value &&
  //   prevProps.phone.value === nextProps.phone.value &&
  //   prevProps.email.value === nextProps.email.value
)
