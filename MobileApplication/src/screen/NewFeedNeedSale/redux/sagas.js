import {
  FETCH_POST_NEED_SALE_HOME,
  FETCH_POST_NEED_SALE_HOME_SUCCESS,
  FFETCH_POST_NEED_SALE_HOME_FAILURE
} from "@src/redux/actions"
import {put, takeLatest, call} from "redux-saga/effects"
import {Api} from "./api"

function* fetchPostNeedSaleHome() {
  const response = yield call(Api.fetchPostNeedSaleHome)
  if (response.status === 200) {
    yield put({type: FETCH_POST_NEED_SALE_HOME_SUCCESS, data: response.data})
  } else {
    yield put({type: FFETCH_POST_NEED_SALE_HOME_FAILURE})
  }
}

export function* watchNewFeedNeedSale() {
  yield takeLatest(FETCH_POST_NEED_SALE_HOME, fetchPostNeedSaleHome)
}
