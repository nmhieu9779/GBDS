import React, { useState } from "react"
import { ScrollView } from "react-native"
import { stringStep6 as string } from "../string"
import { step6 as styles } from "../styles"
import Header from "../../Component/header-post"
import { SafeAreaView } from "react-navigation"
import TextInputCustom from "../../Component/text-input-custom"
import { width, moderateScale } from "@src/utilities/scale"

const Step6 = () => {
  const [name, setName] = useState("")
  const [address, setAddress] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [email, setEmail] = useState("")

  return (
    <SafeAreaView style={styles.container}>
      <Header text={string.header} />
      <ScrollView contentContainerStyle={styles.contentContainerStyle}>
        <TextInputCustom
          onChangeText={text => setName(text)}
          value={name}
          width={width - moderateScale(10)}
          label={string.nameLabel}
        />
        <TextInputCustom
          onChangeText={text => setAddress(text)}
          value={address}
          width={width - moderateScale(10)}
          label={string.addressLable}
        />
        <TextInputCustom
          onChangeText={text => setPhoneNumber(text)}
          value={phoneNumber}
          width={width - moderateScale(10)}
          label={string.phoneNumberLabel}
          keyboardType={"numeric"}
        />
        <TextInputCustom
          onChangeText={text => setEmail(email)}
          value={email}
          width={width - moderateScale(10)}
          label={string.emailLabel}
          keyboardType={"email-address"}
        />
      </ScrollView>
    </SafeAreaView>
  )
}

export default Step6
