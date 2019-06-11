import React, {useState, useEffect} from "react"
import {connect} from "react-redux"
import {bindActionCreators} from "redux"
import {getProductType, getProductCate, getPriceUnit, getArea, getPrice} from "@src/redux/actions"
import SafeAreaView from "react-native-safe-area-view"
import ComboBoxDetail from "@src/component/combobox-detail"
import styles from "./styles"
import strings from "./strings"

const TypeProduct = ({
  productType,
  isProductType,
  getProductType,
  productCate,
  isProductCate,
  getProductCate,
  priceUnit,
  isPriceUnit,
  getPriceUnit,
  area,
  isArea,
  getArea,
  price,
  isPrice,
  getPrice,
  style,
  postTypeId,
  onChange
}) => {
  const [productTypeSelected, setProductTypeSelected] = useState(-1)
  const [productCateSelected, setProductCateSelected] = useState(-1)
  const [priceUnitSelected, setPriceUnitSelected] = useState(-1)
  const [areaSelected, setAreaSelected] = useState(-1)
  const [priceSelected, setPriceSelected] = useState(-1)

  const [productTypeId, setProductTypeId] = useState(-1)
  const [priceUnitId, setPriceUnitId] = useState(-1)

  const [productCateType, setProductCateType] = useState("")

  const [productTypeName, setProductTypeName] = useState("")
  const [productCateName, setProductCateName] = useState("")
  const [priceUnitName, setPriceUnitName] = useState("")
  const [areaName, setAreaName] = useState("")
  const [priceName, setPriceName] = useState("")

  useEffect(() => {
    productType.length === 0 && getProductType()
  }, [])

  useEffect(() => {
    // onChange({
    //   productTypeId,
    //   unit: priceUnitId === 0 ? "Thoả thuận" : priceUnitName,
    //   type: productCateType
    // })
  }, [productTypeSelected, productCateSelected, priceUnitSelected, areaSelected, priceSelected])

  const getData = (selected, postTypeId) => {
    switch (postTypeId) {
      case 0:
        getProductCate({postTypeId, productTypeId: selected})
        getArea()
        getPrice({productTypeId: selected})
        break
      case 1:
        getProductCate({postTypeId, productTypeId: selected})
        getPriceUnit({productTypeId: selected})
      default:
        break
    }
  }

  return (
    <SafeAreaView style={[styles.container, style]}>
      <ComboBoxDetail
        is={isProductType}
        data={productType[postTypeId]}
        selected={productTypeSelected}
        title={strings.productType.title}
        label={strings.productType.label}
        name={productTypeName}
        onChangeSelected={({id, name, selected}) => {
          setProductTypeSelected(selected)
          setProductTypeId(id)
          setProductTypeName(name)
          getData(selected, postTypeId)
        }}
        enable={true}
      />
      <ComboBoxDetail
        is={isProductCate}
        data={productCate}
        selected={productCateSelected}
        title={strings.productCate.title}
        label={strings.productCate.label}
        name={productCateName}
        onChangeSelected={({name, type, selected}) => {
          setProductCateSelected(selected)
          setProductCateName(name)
          setProductCateType(type)
        }}
        enable={true}
      />
      <ComboBoxDetail
        is={isPriceUnit}
        style={{}}
        data={priceUnit}
        selected={priceUnitSelected}
        name={priceUnitName}
        title={strings.priceUnit.title}
        onChangeSelected={({id, name, selected}) => {
          setPriceUnitSelected(selected)
          setPriceUnitName(name)
          setPriceUnitId(id)
        }}
        enable={true}
      />
      <ComboBoxDetail
        is={isArea}
        data={area}
        selected={areaSelected}
        title={strings.area.title}
        label={strings.area.label}
        name={areaName}
        onChangeSelected={({name, selected}) => {
          setAreaSelected(selected)
          setAreaName(name)
        }}
        enable={true}
      />
      <ComboBoxDetail
        is={isPrice}
        data={price}
        selected={priceSelected}
        title={strings.price.title}
        label={strings.price.label}
        name={priceName}
        onChangeSelected={({name, selected}) => {
          setPriceSelected(selected)
          setPriceName(name)
        }}
        enable={true}
      />
    </SafeAreaView>
  )
}

const mapStateToProps = ({typeProduct}) => {
  return {
    productType: typeProduct.productType,
    productCate: typeProduct.productCate,
    priceUnit: typeProduct.priceUnit,
    area: typeProduct.area,
    price: typeProduct.price
  }
}

const mapDispatchToProps = (dispatch) => {
  let actionCreators = {
    getProductType,
    getProductCate,
    getPriceUnit,
    getArea,
    getPrice
  }
  let actions = bindActionCreators(actionCreators, dispatch)
  return {...actions, dispatch}
}

const TypeProductContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TypeProduct)

export default TypeProductContainer
