import { GET_PRODUCT_TYPE, GET_PRODUCT_CATE, GET_PRICE } from "../../../actions"

export const getProductTypeAction = () => ({ type: GET_PRODUCT_TYPE })

export const getProductCateAction = (postTypeId, productTypeId) => ({
  type: GET_PRODUCT_CATE,
  postTypeId: postTypeId,
  productTypeId: productTypeId
})

export const getPriceAction = productTypeId => ({
  type: GET_PRICE,
  productTypeId: productTypeId
})
