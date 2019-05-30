import {
  FETCH_POST_FOR_SALE_HOME,
  FETCH_POST_FOR_SALE_HOME_SUCCESS,
  OPEN_HUD,
  CLOSE_HUD
} from "@src/redux/actions"
import {put, takeLatest, call} from "redux-saga/effects"
import {Api} from "./api"

function* fetchPostForSaleHome() {
  yield put({type: OPEN_HUD})
  const response = yield call(Api.fetchPostForSaleHome)
  if (response.status === 200) {
    yield put({type: FETCH_POST_FOR_SALE_HOME_SUCCESS, data: response.data})
    yield put({type: CLOSE_HUD})
  }
}

export function* watchNewFeedForSale() {
  yield takeLatest(FETCH_POST_FOR_SALE_HOME, fetchPostForSaleHome)
}
