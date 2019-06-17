import React, {useState, useEffect} from "react"
import {connect} from "react-redux"
import {bindActionCreators} from "redux"
import {getProductType, getProductCate, getPriceUnit, getArea, getPrice} from "@src/redux/actions"
import SafeAreaView from "react-native-safe-area-view"
import ComboBoxDetail from "@src/component/combobox-detail"
import styles from "./styles"
import strings from "./strings"
import {cleanObject} from "@src/utilities/clean-object"

const TypeProduct = (props) => {
  const defaultState = {
    id: null,
    name: "",
    type: null,
    selected: -1
  }
  const [productType, setProductType] = useState(defaultState)
  const [productCate, setProductCate] = useState(defaultState)
  const [priceUnit, setPriceUnit] = useState(defaultState)
  const [area, setArea] = useState(defaultState)
  const [price, setPrice] = useState(defaultState)

  useEffect(() => {
    props.productType.length === 0 && props.getProductType()
  }, [])

  useEffect(() => {
    const data = cleanObject({
      productType: props.isProductType && productType,
      productCate: props.isProductCate && productCate,
      priceUnit: props.isPriceUnit && priceUnit,
      area: props.isArea && area,
      price: props.isPrice && price
    })
    props.onChange(data)
  }, [productType, productCate, priceUnit, area, price])

  getData = (selected, postTypeId) => {
    switch (postTypeId) {
      case 0:
        props.getProductCate({postTypeId, productTypeId: selected})
        props.getArea()
        props.getPrice({productTypeId: selected})
        break
      case 1:
        props.getProductCate({postTypeId, productTypeId: selected})
        props.getPriceUnit({productTypeId: selected})
      default:
        break
    }
  }

  const onChangeSelected = ({id, name, type, selected, stateName}) => {
    switch (stateName) {
      case "TYPE":
        setProductType({
          ...productType,
          id: id,
          name: name,
          type: type,
          selected: selected
        })
        getData(selected, props.postTypeId)
        break
      case "CATE":
        setProductCate({
          ...productCate,
          id: id,
          name: name,
          type: type,
          selected: selected
        })
        break
      case "UNIT":
        setPriceUnit({
          ...priceUnit,
          id: id,
          name: name,
          type: type,
          selected: selected
        })
        break
      case "AREA":
        setArea({
          ...area,
          id: id,
          name: name,
          type: type,
          selected: selected
        })
        break
      case "PRICE":
        setPrice({
          ...price,
          id: id,
          name: name,
          type: type,
          selected: selected
        })
        break
      default:
        break
    }
  }

  return (
    <SafeAreaView style={[styles.container, props.style]}>
      <ComboBoxDetail
        is={props.isProductType}
        data={props.productType[props.postTypeId]}
        selected={productType.selected}
        title={strings.productType.title}
        label={strings.productType.label}
        name={productType.name}
        onChangeSelected={(e) => onChangeSelected({...e, stateName: "TYPE"})}
        enable={true}
      />
      <ComboBoxDetail
        is={props.isProductCate}
        data={props.productCate}
        selected={productCate.selected}
        title={strings.productCate.title}
        label={strings.productCate.label}
        name={productCate.name}
        onChangeSelected={(e) => onChangeSelected({...e, stateName: "CATE"})}
        enable={true}
      />
      <ComboBoxDetail
        is={props.isPriceUnit}
        style={{}}
        data={props.priceUnit}
        selected={priceUnit.selected}
        name={priceUnit.name}
        title={strings.priceUnit.title}
        onChangeSelected={(e) => onChangeSelected({...e, stateName: "UNIT"})}
        enable={true}
      />
      <ComboBoxDetail
        is={props.isArea}
        data={props.area}
        selected={area.selected}
        title={strings.area.title}
        label={strings.area.label}
        name={area.name}
        onChangeSelected={(e) => onChangeSelected({...e, stateName: "AREA"})}
        enable={true}
      />
      <ComboBoxDetail
        is={props.isPrice}
        data={props.price}
        selected={price.selected}
        title={strings.price.title}
        label={strings.price.label}
        name={price.name}
        onChangeSelected={(e) => onChangeSelected({...e, stateName: "PRICE"})}
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
