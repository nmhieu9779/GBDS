import {
  FETCH_POST_FOR_SALE_HOME,
  FETCH_POST_FOR_SALE_HOME_SUCCESS,
  FETCH_POST_FOR_SALE_HOME_FAILURE
} from "@src/redux/actions"
import {put, takeLatest, call} from "redux-saga/effects"
import {Api} from "./api"

function* fetchPostForSaleHome() {
  const response = yield call(Api.fetchPostForSaleHome)
  if (response.status === 200) {
    yield put({type: FETCH_POST_FOR_SALE_HOME_SUCCESS, data: response.data})
  } else {
    yield put({type: FETCH_POST_FOR_SALE_HOME_FAILURE})
  }
}

export function* watchNewFeedForSale() {
  yield takeLatest(FETCH_POST_FOR_SALE_HOME, fetchPostForSaleHome)
}
