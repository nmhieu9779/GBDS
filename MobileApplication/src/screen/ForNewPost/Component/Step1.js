import React, {useState, useEffect, useRef} from "react"
import {Text, View, TextInput, ScrollView, TouchableWithoutFeedback} from "react-native"
import TextInputCustom from "@src/component/text-input-custom"
import Header from "@src/component/header-post"
import SafeAreaView from "react-native-safe-area-view"
import AddressInput from "@src/component/address-input"
import TypeProduct from "@src/component/type-product"
import {step1 as styles} from "../styles"
import {stringStep1 as string} from "../string"
import {WIDTH, moderateScale} from "@src/utilities/scale"

const Step1 = ({onChangeData}) => {
  const [productTitle, setProductTitle] = useState("")
  const [area, setArea] = useState("")
  const [price, setPrice] = useState("")
  const [address, setAddress] = useState(null)
  const [typeProduct, setTypeProduct] = useState(null)
  const [addressName, setAddressName] = useState("")
  const [homeNumber, setHomeNumber] = useState("")
  let textInputAddress = useRef(null)

  useEffect(() => {
    pushData()
  }, [productTitle, area, price, address, homeNumber, typeProduct])

  const pushData = () =>
    onChangeData({
      step1: {
        productTitle: productTitle,
        homeNumber: homeNumber,
        address,
        area: parseInt(area),
        typeProduct,
        price: parseInt(price)
      }
    })

  return (
    <View style={styles.container}>
      <Header text={string.header} />
      <ScrollView contentContainerStyle={styles.contentContainerStyle}>
        <TextInputCustom
          onChangeText={(text) => setProductTitle(text)}
          value={productTitle}
          width={WIDTH - moderateScale(10)}
          color={"red"}
          label={string.productTitle}
        />
        <TypeProduct
          isProductType={true}
          isProductCate={true}
          postTypeId={1}
          onChange={(data) => {
            setTypeProduct({...typeProduct, ...data})
          }}
        />
        <AddressInput
          isCity={true}
          isDistrict={true}
          isWard={true}
          isStreet={true}
          onChangeAddress={(e) => {
            setAddress({...address, ...e.data})
            setAddressName(e.name)
          }}
        />
        <TextInputCustom
          onChangeText={(text) => setArea(text)}
          width={WIDTH - moderateScale(10)}
          value={area}
          label={string.area}
          keyboardType={"numeric"}>
          <Text style={styles.area}>{string.areaString}</Text>
        </TextInputCustom>
        <TextInputCustom
          onChangeText={(text) => setPrice(text)}
          width={WIDTH - moderateScale(10)}
          value={price}
          label={string.priceLabel}
          keyboardType={"numeric"}>
          <TypeProduct
            isPriceUnit={true}
            style={styles.price}
            onChange={(data) => {
              setTypeProduct({...typeProduct, ...data})
            }}
          />
        </TextInputCustom>
        {/* <View style={styles.priceContainer}>
          <Text style={styles.priceTitle}>{string.priceTitle}</Text>
          <Text style={styles.priceContent}>100000</Text>
        </View> */}
        <View style={styles.addressContainer}>
          <Text style={styles.addressTitle}>{string.addressTitle}</Text>
          <TouchableWithoutFeedback onPress={() => textInputAddress.current.focus()}>
            <View style={styles.addressTextInputContainer}>
              <TextInput
                ref={textInputAddress}
                multiline={true}
                value={homeNumber}
                onChangeText={(text) => setHomeNumber(text)}
              />
              <Text style={styles.addressName}>
                {homeNumber && ", "}
                {addressName}
              </Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </ScrollView>
    </View>
  )
}
export default Step1
