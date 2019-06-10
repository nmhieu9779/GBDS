import React, {useState} from "react"
import {ScrollView} from "react-native"
import {stringStep6 as string} from "../string"
import {step6 as styles} from "../styles"
import Header from "@src/component/header-post"
import SafeAreaView from "react-native-safe-area-view"
import TextInputCustom from "@src/component/text-input-custom"
import {WIDTH, moderateScale} from "@src/utilities/scale"

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
          onChangeText={(text) => setName(text)}
          value={name}
          width={WIDTH - moderateScale(10)}
          label={string.nameLabel}
        />
        <TextInputCustom
          onChangeText={(text) => setAddress(text)}
          value={address}
          width={WIDTH - moderateScale(10)}
          label={string.addressLable}
        />
        <TextInputCustom
          onChangeText={(text) => setPhoneNumber(text)}
          value={phoneNumber}
          width={WIDTH - moderateScale(10)}
          label={string.phoneNumberLabel}
          keyboardType={"numeric"}
        />
        <TextInputCustom
          onChangeText={(text) => setEmail(text)}
          value={email}
          width={WIDTH - moderateScale(10)}
          label={string.emailLabel}
          keyboardType={"email-address"}
        />
      </ScrollView>
    </SafeAreaView>
  )
}

export default Step6
