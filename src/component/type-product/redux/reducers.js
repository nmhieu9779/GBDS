import * as actions from "@src/redux/actions"
import strings from "../strings"

initStateTypeProduct = {
  productType: [],
  productCate: [],
  priceUnit: [],
  area: [],
  price: []
}

const typeProduct = (state = initStateTypeProduct, action) => {
  switch (action.type) {
    case actions.ACTION_GET_PRODUCT_TYPE:
      return {
        ...state,
        productType: strings.productType.data
      }
    case actions.ACTION_GET_PRODUCT_CATE:
      return {
        ...state,
        productCate: strings.productCate.data[action.params.postTypeId][action.params.productTypeId]
      }
    case actions.ACTION_GET_PRICE_UNIT:
      return {
        ...state,
        priceUnit: strings.priceUnit.data[action.params.productTypeId]
      }
    case actions.ACTION_GET_AREA:
      return {
        ...state,
        area: strings.area.data
      }
    case actions.ACTION_GET_PRICE:
      return {
        ...state,
        price: strings.price.data[action.params.productTypeId]
      }
    default:
      return state
  }
}

export default typeProduct
