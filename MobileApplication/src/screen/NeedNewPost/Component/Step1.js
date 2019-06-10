import React, {useState} from "react"
import {ScrollView} from "react-native"
import {styles_step1 as styles} from "../styles"
import {string_step1 as string} from "../string"
import AddressInput from "@src/component/address-input"
import TypeProduct from "@src/component/type-product"
import Header from "@src/component/header-post"
import SafeAreaView from "react-native-safe-area-view"

const Step1 = (props) => {
  const [addressId, setAddressId] = useState({})
  const [addressName, setAddressName] = useState("")
  const [typeProductId, setTypeProductId] = useState({})

  console.log(typeProductId)

  return (
    <SafeAreaView style={styles.container}>
      <Header text={string.header} />
      <ScrollView contentContainerStyle={styles.contentContainerStyle}>
        <TypeProduct
          isProductType={true}
          isProductCate={true}
          postTypeId={0}
          onChange={({productTypeId, type}) => {
            setTypeProductId({...typeProductId, productTypeId, type})
          }}
        />
        <AddressInput
          isCity={true}
          isDistrict={true}
          isWard={true}
          isStreet={true}
          onChangeAddress={({address, name}) => {
            setAddressId(address)
            setAddressName(name)
          }}
        />
        <TypeProduct
          isArea={true}
          isPrice={true}
          postTypeId={0}
          onChange={({productTypeId, type}) => {
            setTypeProductId({...typeProductId, productTypeId, type})
          }}
        />
      </ScrollView>
    </SafeAreaView>
  )
}

export default Step1
