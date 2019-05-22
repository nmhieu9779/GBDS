import React, { Component } from "react"
import { connect } from "react-redux"
import {
  getProductTypeAction,
  getProductCateAction,
  getPriceAction,
  getAreaAction,
  getPriceUnitAction
} from "./redux/actions"
import { SafeAreaView } from "react-navigation"
import ComboBox from "../combobox"
import styles from "./styles"
import strings from "./strings"

class TypeProduct extends Component {
  constructor(props) {
    super(props)
    this.state = {
      productTypeSelected: -1,
      productCateSelected: -1,
      priceUnitSelected: -1,
      areaSelected: -1,
      priceSelected: -1
    }
  }

  componentDidMount = () => {
    this.props.productType.length === 0 && this.props.getProductType()
  }

  render() {
    const {
      isProductType,
      isProductCate,
      isPriceUnit,
      isArea,
      isPrice,
      productType,
      productCate,
      priceUnit,
      area,
      price,
      getProductCate,
      getPriceUnit,
      getArea,
      getPrice,
      postTypeId
    } = this.props
    return (
      <SafeAreaView style={[styles.container, this.props.style]}>
        {isProductType && (
          <ComboBox
            style={{
              container: styles.containerCombobox,
              combobox: styles.combobox
            }}
            data={productType[postTypeId] || []}
            selected={this.state.productTypeSelected}
            title={strings.productType.title}
            label={strings.productType.label}
            onChangeSelected={selected => {
              this.onChangeSelected(selected, "productTypeSelected")
              postTypeId === 0 && (getArea(), getPrice(selected))
              postTypeId === 1 && getProductCate(postTypeId, selected),
                getPriceUnit(selected)
            }}
          />
        )}
        {isProductCate && (
          <ComboBox
            style={{
              container: styles.containerCombobox,
              combobox: styles.combobox
            }}
            data={productCate}
            selected={this.state.productCateSelected}
            title={strings.productCate.title}
            label={strings.productCate.label}
            onChangeSelected={selected => {
              this.onChangeSelected(selected, "productCateSelected")
            }}
          />
        )}
        {isPriceUnit && (
          <ComboBox
            data={priceUnit}
            selected={this.state.priceSelected}
            title={strings.priceUnit.title}
            onChangeSelected={selected => {
              this.onChangeSelected(selected, "priceUnitSelected")
            }}
          />
        )}
        {isArea && (
          <ComboBox
            style={{
              container: styles.containerCombobox,
              combobox: styles.combobox
            }}
            data={area}
            selected={this.state.areaSelected}
            title={strings.area.title}
            label={strings.area.label}
            onChangeSelected={selected => {
              this.onChangeSelected(selected, "areaSelected")
            }}
          />
        )}
        {isPrice && (
          <ComboBox
            style={{
              container: styles.containerCombobox,
              combobox: styles.combobox
            }}
            data={price}
            selected={this.state.priceSelected}
            title={strings.price.title}
            label={strings.price.label}
            onChangeSelected={selected => {
              this.onChangeSelected(selected, "priceSelected")
            }}
          />
        )}
      </SafeAreaView>
    )
  }
  onChangeSelected = (selected, name) => {
    this.setState({ [name]: selected })
  }
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
