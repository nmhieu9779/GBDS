import {FETCH_POST_FOR_RENT_HOME, FETCH_POST_FOR_RENT_HOME_SUCCESS} from "@src/redux/actions"

export const onFetchPostForRentHome = () => ({type: FETCH_POST_FOR_RENT_HOME})

export const onFetchPostForRentHomeSuccess = (payload) => ({
  type: FETCH_POST_FOR_RENT_HOME_SUCCESS,
  payload
})
