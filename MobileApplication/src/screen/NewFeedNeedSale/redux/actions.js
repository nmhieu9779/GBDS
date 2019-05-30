import {FETCH_POST_NEED_SALE_HOME, FETCH_POST_NEED_SALE_HOME_SUCCESS} from "@src/redux/actions"

export const onFetchPostNeedSaleHome = () => ({type: FETCH_POST_NEED_SALE_HOME})

export const onFetchPostNeedSaleHomeSuccess = (payload) => ({
  type: FETCH_POST_NEED_SALE_HOME_SUCCESS,
  payload
})
