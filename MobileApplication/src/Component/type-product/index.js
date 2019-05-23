import React, { PureComponent } from "react"
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

const ComboBoxDetail = ({
  is,
  style,
  data,
  selected,
  title,
  label,
  onChangeSelected
}) =>
  (is && (
    <ComboBox
      style={
        style || {
          container: styles.containerCombobox,
          combobox: styles.combobox
        }
      }
      data={data}
      selected={selected}
      title={title}
      label={label}
      onChangeSelected={onChangeSelected.bind(this)}
    />
  )) ||
  null

class TypeProduct extends PureComponent {
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
      postTypeId
    } = this.props
    return (
      <SafeAreaView style={[styles.container, this.props.style]}>
        <ComboBoxDetail
          is={isProductType}
          data={productType[postTypeId]}
          selected={this.state.productTypeSelected}
          title={strings.productType.title}
          label={strings.productType.label}
          onChangeSelected={selected => {
            this.onChangeSelected(selected, "productTypeSelected")
            this.getData(selected, postTypeId)
          }}
        />
        <ComboBoxDetail
          is={isProductCate}
          data={productCate}
          selected={this.state.productCateSelected}
          title={strings.productCate.title}
          label={strings.productCate.label}
          onChangeSelected={selected => {
            this.onChangeSelected(selected, "productCateSelected")
          }}
        />
        <ComboBoxDetail
          is={isPriceUnit}
          style={{}}
          data={priceUnit}
          selected={this.state.priceUnitSelected}
          title={strings.priceUnit.title}
          onChangeSelected={selected => {
            this.onChangeSelected(selected, "priceUnitSelected")
          }}
        />
        <ComboBoxDetail
          is={isArea}
          data={area}
          selected={this.state.areaSelected}
          title={strings.area.title}
          label={strings.area.label}
          onChangeSelected={selected => {
            this.onChangeSelected(selected, "areaSelected")
          }}
        />
        <ComboBoxDetail
          is={isPrice}
          data={price}
          selected={this.state.priceSelected}
          title={strings.price.title}
          label={strings.price.label}
          onChangeSelected={selected => {
            this.onChangeSelected(selected, "priceSelected")
          }}
        />
      </SafeAreaView>
    )
  }
  onChangeSelected = (selected, name) => {
    this.setState({ [name]: selected })
  }
  getData = (selected, postTypeId) => {
    switch (postTypeId) {
      case 0:
        this.props.getProductCate(postTypeId, selected)
        this.props.getArea()
        this.props.getPrice(selected)
        break
      case 1:
        this.props.getProductCate(postTypeId, selected)
        this.props.getPriceUnit(selected)
      default:
        break
    }
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
