import {
  FETCH_POST_FOR_SALE_HOME,
  FETCH_POST_FOR_SALE_HOME_SUCCESS,
  FETCH_POST_FOR_RENT_HOME,
  FETCH_POST_FOR_RENT_HOME_SUCCESS
} from "../../redux/actions"

export const onFetchPostForSaleHome = () => ({ type: FETCH_POST_FOR_SALE_HOME })

export const onFetchPostForSaleHomeSuccess = payload => ({
  type: FETCH_POST_FOR_SALE_HOME_SUCCESS,
  payload
})

export const onFetchPostForRentHome = () => ({ type: FETCH_POST_FOR_RENT_HOME })

export const onFetchPostForRentHomeSuccess = payload => ({
  type: FETCH_POST_FOR_RENT_HOME_SUCCESS,
  payload
})
