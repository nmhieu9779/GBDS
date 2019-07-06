import React, {memo} from "react"
import {ScrollView, View} from "react-native"
import {styles_step1 as styles} from "../styles"
import {string_step1 as string} from "../string"
import AddressInput from "@src/component/address-input"
import TypeProduct from "@src/component/type-product"
import Header from "@src/component/header-post"

const Step1 = (props) => {
  const onChangeSelected = (stateName, data) => {
    props.onChangeSelected({[stateName]: data})
  }

  return (
    <View style={styles.container}>
      <Header text={string.header} />
      <ScrollView contentContainerStyle={styles.contentContainerStyle}>
        <TypeProduct
          isProductType={true}
          isProductCate={true}
          postTypeId={props.postTypeId}
          onChangeSelected={onChangeSelected.bind(this, "typeProduct")}
          productType={props.typeProduct.productType}
          productCate={props.typeProduct.productCate}
          otherKey={{area: true, price: true}}
        />
        <AddressInput
          isCity={true}
          isDistrict={true}
          onChangeSelected={onChangeSelected.bind(this, "address")}
          city={props.address.city}
          district={props.address.district}
        />
        <TypeProduct
          isArea={true}
          isPrice={true}
          postTypeId={props.postTypeId}
          onChangeSelected={onChangeSelected.bind(this, "typeProduct")}
          area={props.typeProduct.area}
          price={props.typeProduct.price}
        />
      </ScrollView>
    </View>
  )
}

export default Step1
// (prevProps, nextProps) =>
//   prevProps.typeProduct.productType.selected === nextProps.typeProduct.productType.selected &&
//   prevProps.typeProduct.productCate.selected === nextProps.typeProduct.productCate.selected &&
//   prevProps.typeProduct.area.selected === nextProps.typeProduct.area.selected &&
//   prevProps.typeProduct.price.selected === nextProps.typeProduct.price.selected &&
//   prevProps.address.city.selected === nextProps.address.city.selected &&
//   prevProps.address.district.selected === nextProps.address.district.selected
