import React from "react"
import {connect} from "react-redux"
import {bindActionCreators} from "redux"
import {getProductType, getProductCate, getPriceUnit, getArea, getPrice} from "@src/redux/actions"
import styles from "./styles"
import strings from "./strings"
import ComboBox from "@src/component/combobox"
import {cleanObject} from "@src/utilities"
import {View} from "react-native"

const TypeProduct = (props) => {
  const styleCBB = {
    container: styles.containerCombobox,
    combobox: styles.combobox
  }

  const defaultParams = {selected: -1, name: "", type: ""}

  const onChangeSelected = (stateName, data) => {
    let params = {}
    switch (stateName) {
      case "productType":
        getData(data.selected, props.postTypeId)
        params = {
          productType: data,
          productCate: (props.isProductCate || props.otherKey.productCate) && defaultParams,
          priceUnit: (props.isPriceUnit || props.otherKey.priceUnit) && defaultParams,
          area: (props.isArea || props.otherKey.area) && defaultParams,
          price: (props.isPrice || props.otherKey.price) && defaultParams
        }
        break
      default:
        params = {[stateName]: data}
        break
    }
    props.onChangeSelected(cleanObject(params))
  }

  const getData = (selected, postTypeId) => {
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

  return (
    <View style={[styles.container, props.style]}>
      {props.isProductType && (
        <ComboBox
          style={styleCBB}
          data={props.dataProductType[props.postTypeId]}
          selected={props.productType.selected}
          title={strings.productType.title}
          label={strings.productType.label}
          onChangeSelected={onChangeSelected.bind(this, "productType")}
          enable={true}
          name={props.productType.name}
        />
      )}
      {props.isProductCate && (
        <ComboBox
          style={styleCBB}
          data={props.dataProductCate}
          selected={props.productCate.selected}
          title={strings.productCate.title}
          label={strings.productCate.label}
          onChangeSelected={onChangeSelected.bind(this, "productCate")}
          enable={true}
          name={props.productCate.name}
        />
      )}
      {props.isPriceUnit && (
        <ComboBox
          style={{}}
          data={props.dataPriceUnit}
          selected={props.priceUnit.selected}
          title={strings.priceUnit.title}
          label={strings.priceUnit.label}
          onChangeSelected={onChangeSelected.bind(this, "priceUnit")}
          enable={true}
          name={props.priceUnit.name}
        />
      )}
      {props.isArea && (
        <ComboBox
          style={styleCBB}
          data={props.dataArea}
          selected={props.area.selected}
          title={strings.area.title}
          label={strings.area.label}
          onChangeSelected={onChangeSelected.bind(this, "area")}
          enable={true}
          name={props.area.name}
        />
      )}
      {props.isPrice && (
        <ComboBox
          style={styleCBB}
          data={props.dataPrice}
          selected={props.price.selected}
          title={strings.price.title}
          label={strings.price.label}
          onChangeSelected={onChangeSelected.bind(this, "price")}
          enable={true}
          name={props.price.name}
        />
      )}
    </View>
  )
}

const mapStateToProps = ({typeProduct}) => {
  return {
    dataProductType: typeProduct.productType,
    dataProductCate: typeProduct.productCate,
    dataPriceUnit: typeProduct.priceUnit,
    dataArea: typeProduct.area,
    dataPrice: typeProduct.price
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
