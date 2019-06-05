import {
  FETCH_POST_NEED_RENT_HOME,
  FETCH_POST_NEED_RENT_HOME_SUCCESS,
  FETCH_POST_NEED_RENT_HOME_FAILURE
} from "@src/redux/actions"

export const onFetchPostNeedRentHome = () => ({type: FETCH_POST_NEED_RENT_HOME})

export const onFetchPostNeedRentHomeSuccess = (payload) => ({
  type: FETCH_POST_NEED_RENT_HOME_SUCCESS,
  payload
})

export const onFetchPostNeedRentHomeFailure = () => ({type: FETCH_POST_NEED_RENT_HOME_FAILURE})
