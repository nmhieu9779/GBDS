import React, { Component } from "react"
import { connect } from "react-redux"
import {
  getProductTypeAction,
  getProductCateAction,
  getPriceAction
} from "./redux/typeProductAction"
import { SafeAreaView } from "react-navigation"
import ComboBox from "../combobox"
import styles from "./styles"
import strings from "./strings"

class TypeProduct extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dataProductCate: [],
      dataPrice: [],
      productTypeSelected: -1,
      productCateSelected: -1,
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
      isPrice,
      productType,
      productCate,
      price,
      getProductCate,
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
            data={productType[postTypeId]}
            selected={this.state.productTypeSelected}
            title={strings.productType.title}
            label={strings.productType.label}
            onChangeSelected={selected => {
              this.onChangeSelected(selected, "productTypeSelected")
              getProductCate(postTypeId, selected)
              postTypeId === 1 && getPrice(selected)
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
        {isPrice && (
          <ComboBox
            data={price}
            selected={this.state.priceSelected}
            title={strings.price.title}
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
