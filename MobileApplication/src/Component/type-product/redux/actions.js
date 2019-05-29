import {GET_PRODUCT_TYPE, GET_PRODUCT_CATE, GET_PRICE_UNIT, GET_AREA, GET_PRICE} from "../../../redux/actions"

export const getProductTypeAction = () => ({type: GET_PRODUCT_TYPE})

export const getProductCateAction = (postTypeId, productTypeId) => ({
  type: GET_PRODUCT_CATE,
  postTypeId: postTypeId,
  productTypeId: productTypeId
})

export const getPriceUnitAction = (productTypeId) => ({
  type: GET_PRICE_UNIT,
  productTypeId: productTypeId
})

export const getAreaAction = () => ({type: GET_AREA})

export const getPriceAction = (productTypeId) => ({
  type: GET_PRICE,
  productTypeId: productTypeId
})
