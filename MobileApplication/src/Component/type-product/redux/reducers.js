import { fromJS } from "immutable"
import {
  GET_PRODUCT_TYPE,
  GET_PRODUCT_CATE,
  GET_PRICE_UNIT,
  GET_AREA,
  GET_PRICE
} from "../../../actions"
import strings from "../strings"

initStateTypeProduct = {
  productType: [],
  productCate: [],
  priceUnit: [],
  area: [],
  price: []
}

const typeProductReducers = (state = initStateTypeProduct, action) => {
  let newState = fromJS(state).toJS()
  switch (action.type) {
    case GET_PRODUCT_TYPE:
      newState.productType = strings.productType.data
      break
    case GET_PRODUCT_CATE:
      newState.productCate =
        strings.productCate.data[action.postTypeId][action.productTypeId]
      break
    case GET_PRICE_UNIT:
      newState.priceUnit = strings.priceUnit.data[action.productTypeId]
      break
    case GET_AREA:
      newState.area = strings.area.data
      break
    case GET_PRICE:
      newState.price = strings.price.data[action.productTypeId]
      break
    default:
      break
  }
  return newState
}

export default typeProductReducers
