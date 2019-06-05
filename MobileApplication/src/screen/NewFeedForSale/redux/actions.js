import {
  FETCH_POST_FOR_SALE_HOME,
  FETCH_POST_FOR_SALE_HOME_SUCCESS,
  FETCH_POST_FOR_SALE_HOME_FAILURE
} from "@src/redux/actions"

export const onFetchPostForSaleHome = () => ({type: FETCH_POST_FOR_SALE_HOME})

export const onFetchPostForSaleHomeSuccess = (payload) => ({
  type: FETCH_POST_FOR_SALE_HOME_SUCCESS,
  payload
})

export const onFetchPostForSaleHomeFailure = () => ({type: FETCH_POST_FOR_SALE_HOME_FAILURE})
