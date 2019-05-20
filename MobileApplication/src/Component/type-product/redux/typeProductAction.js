import { GET_PRODUCT_TYPE, GET_PRODUCT_CATE, GET_PRICE } from "../../../actions"

export const getProductTypeAction = () => ({ type: GET_PRODUCT_TYPE })

export const getProductCateAction = productTypeId => ({
  type: GET_PRODUCT_CATE,
  productTypeId: productTypeId
})

export const getPriceAction = productTypeId => ({
  type: GET_PRICE,
  productTypeId: productTypeId
})
