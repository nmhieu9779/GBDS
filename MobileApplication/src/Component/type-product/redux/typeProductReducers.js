import { fromJS } from "immutable"
import { GET_PRODUCT_TYPE, GET_PRODUCT_CATE, GET_PRICE } from "../../../actions"
import strings from "../strings"

initStateTypeProduct = {
  productType: [],
  productCate: [],
  price: []
}

const typeProductReducers = (state = initStateTypeProduct, action) => {
  let newState = fromJS(state).toJS()
  switch (action.type) {
    case GET_PRODUCT_TYPE:
      newState.productType = strings.productType.data
      break
    case GET_PRODUCT_CATE:
      newState.productCate = strings.productCate.data[action.productTypeId]
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
