import React, { useState, useEffect } from "react"
import { connect } from "react-redux"
import {
  getProductTypeAction,
  getProductCateAction,
  getPriceAction,
  getAreaAction,
  getPriceUnitAction
} from "./redux/actions"
import { SafeAreaView } from "react-navigation"
import ComboBoxDetail from "../combobox-detail"
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
  postTypeId
}) => {
  const [productTypeSelected, setProductTypeSelected] = useState(-1)
  const [productCateSelected, setProductCateSelected] = useState(-1)
  const [priceUnitSelected, setPriceUnitSelected] = useState(-1)
  const [areaSelected, setAreaSelected] = useState(-1)
  const [priceSelected, setPriceSelected] = useState(-1)

  useEffect(() => {
    productType.length === 0 && isProductType && getProductType()
  }, [productType.length])

  const getData = (selected, postTypeId) => {
    switch (postTypeId) {
      case 0:
        getProductCate(postTypeId, selected)
        getArea()
        getPrice(selected)
        break
      case 1:
        getProductCate(postTypeId, selected)
        getPriceUnit(selected)
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
        onChangeSelected={selected => {
          setProductTypeSelected(selected)
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
        onChangeSelected={selected => {
          setProductCateSelected(selected)
        }}
        enable={true}
      />
      <ComboBoxDetail
        is={isPriceUnit}
        style={{}}
        data={priceUnit}
        selected={priceUnitSelected}
        title={strings.priceUnit.title}
        onChangeSelected={selected => {
          setPriceUnitSelected(selected)
        }}
        enable={true}
      />
      <ComboBoxDetail
        is={isArea}
        data={area}
        selected={areaSelected}
        title={strings.area.title}
        label={strings.area.label}
        onChangeSelected={selected => {
          setAreaSelected(selected)
        }}
        enable={true}
      />
      <ComboBoxDetail
        is={isPrice}
        data={price}
        selected={priceSelected}
        title={strings.price.title}
        label={strings.price.label}
        onChangeSelected={selected => {
          setPriceSelected(selected)
        }}
        enable={true}
      />
    </SafeAreaView>
  )
}

const mapStateToProps = ({ typeProductReducers }) => {
  return {
    productType: typeProductReducers.productType,
    productCate: typeProductReducers.productCate,
    priceUnit: typeProductReducers.priceUnit,
    area: typeProductReducers.area,
    price: typeProductReducers.price
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getProductType: () => {
      dispatch(getProductTypeAction())
    },
    getProductCate: (postTypeId, productTypeId) => {
      dispatch(getProductCateAction(postTypeId, productTypeId))
    },
    getPriceUnit: productTypeId => {
      dispatch(getPriceUnitAction(productTypeId))
    },
    getArea: () => {
      dispatch(getAreaAction())
    },
    getPrice: productTypeId => {
      dispatch(getPriceAction(productTypeId))
    }
  }
}

const TypeProductContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TypeProduct)

export default TypeProductContainer
