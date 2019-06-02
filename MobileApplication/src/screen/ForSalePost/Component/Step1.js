import React, {useState} from "react"
import {Text, View, TextInput, ScrollView} from "react-native"
import TextInputCustom from "@src/component/text-input-custom"
import Header from "@src/component/header-post"
import SafeAreaView from "react-native-safe-area-view"
import AddressInput from "@src/component/address-input"
import TypeProduct from "@src/component/type-product"
import {step1 as styles} from "../styles"
import {stringStep1 as string} from "../string"
import {width, moderateScale} from "@src/utilities/scale"

const Step1 = () => {
  const [productTitle, setProductTitle] = useState("")
  const [area, setArea] = useState("")
  const [price, setPrice] = useState("")
  const [address, setAddress] = useState("")
  const [homeNumber, setHomeNumber] = useState("")

  return (
    <SafeAreaView style={styles.container}>
      <Header text={string.header} />
      <ScrollView contentContainerStyle={styles.contentContainerStyle}>
        <TextInputCustom
          onChangeText={(text) => setProductTitle(text)}
          value={productTitle}
          width={width - moderateScale(10)}
          color={"red"}
          label={string.productTitle}
        />
        <TypeProduct isProductType={true} isProductCate={true} postTypeId={1} />
        <AddressInput isCity={true} isDistrict={true} isWard={true} isStreet={true} />
        <TextInputCustom
          onChangeText={(text) => setArea(text)}
          width={width - moderateScale(10)}
          value={area}
          label={string.area}
          keyboardType={"numeric"}>
          <Text style={styles.area}>{string.areaString}</Text>
        </TextInputCustom>
        <TextInputCustom
          onChangeText={(text) => setPrice(text)}
          width={width - moderateScale(10)}
          value={price}
          label={string.priceLabel}
          keyboardType={"numeric"}>
          <TypeProduct isPriceUnit={true} style={styles.price} />
        </TextInputCustom>
        <View style={styles.priceContainer}>
          <Text style={styles.priceTitle}>{string.priceTitle}</Text>
          <Text style={styles.priceContent}>100000</Text>
        </View>
        <View style={styles.addressContainer}>
          <Text style={styles.addressTitle}>{string.addressTitle}</Text>
          <TextInput
            style={styles.addressTextInput}
            multiline={true}
            value={address}
            onChangeText={(text) => setAddress(text)}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}
export default Step1
