import {FETCH_POST_NEED_RENT_HOME, FETCH_POST_NEED_RENT_HOME_SUCCESS} from "@src/redux/actions"

export const onFetchPostNeedRentHome = () => ({type: FETCH_POST_NEED_RENT_HOME})

export const onFetchPostNeedRentHomeSuccess = (payload) => ({
  type: FETCH_POST_NEED_RENT_HOME_SUCCESS,
  payload
})
