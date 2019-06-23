import React, {useRef} from "react"
import {Text, View, TextInput, ScrollView, TouchableWithoutFeedback, Platform} from "react-native"
import TextInputCustom from "@src/component/text-input-custom"
import Header from "@src/component/header-post"
import AddressInput from "@src/component/address-input"
import TypeProduct from "@src/component/type-product"
import {step1 as styles} from "../styles"
import {stringStep1 as string} from "../string"
import {scale} from "@src/utilities"

const Step1 = (props) => {
  const onChangeText = (stateName, data) => {
    props.onChangeData({[stateName]: {value: data}})
  }

  const onChangeSelected = (stateName, data) => {
    props.onChangeData({[stateName]: data})
  }

  return (
    <View style={styles.container}>
      <Header text={string.header} />
      <ScrollView contentContainerStyle={styles.contentContainerStyle}>
        <TextInputCustom
          onChangeText={onChangeText.bind(this, "name")}
          value={props.name}
          width={scale.WIDTH - scale.moderateScale(10)}
          color={"red"}
          label={string.productTitle}
        />
        <TypeProduct
          isProductType={true}
          isProductCate={true}
          postTypeId={props.postTypeId}
          onChangeSelected={onChangeSelected.bind(this, "typeProduct")}
          otherKey={{priceUnit: true}}
          productType={props.typeProduct.productType}
          productCate={props.typeProduct.productCate}
        />
        <AddressInput
          isCity={true}
          isDistrict={true}
          isWard={true}
          isStreet={true}
          onChangeSelected={onChangeSelected.bind(this, "address")}
          city={props.address.city}
          district={props.address.district}
          ward={props.address.ward}
          street={props.address.street}
        />
        <TextInputCustom
          onChangeText={onChangeText.bind(this, "area")}
          width={scale.WIDTH - scale.moderateScale(10)}
          value={props.area}
          label={string.area}
          keyboardType={"numeric"}>
          <Text style={styles.area}>{string.areaString}</Text>
        </TextInputCustom>
        <TextInputCustom
          onChangeText={onChangeText.bind(this, "price")}
          width={scale.WIDTH - scale.moderateScale(10)}
          value={props.price}
          label={string.priceLabel}
          keyboardType={"numeric"}>
          <TypeProduct
            isPriceUnit={true}
            style={styles.price}
            onChangeSelected={onChangeSelected.bind(this, "typeProduct")}
            priceUnit={props.typeProduct.priceUnit}
          />
        </TextInputCustom>
        <TextInputCustom
          onChangeText={onChangeText.bind(this, "number")}
          width={scale.WIDTH - scale.moderateScale(10)}
          value={props.number}
          label={string.number}
        />
      </ScrollView>
    </View>
  )
}
export default Step1
