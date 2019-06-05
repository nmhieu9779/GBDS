import {
  FETCH_POST_NEED_RENT_HOME,
  FETCH_POST_NEED_RENT_HOME_SUCCESS,
  FETCH_POST_NEED_RENT_HOME_FAILURE
} from "@src/redux/actions"
import {put, takeLatest, call} from "redux-saga/effects"
import {Api} from "./api"

function* fetchPostNeedRentHome() {
  const response = yield call(Api.fetchPostNeedRentHome)
  if (response.status === 200) {
    yield put({type: FETCH_POST_NEED_RENT_HOME_SUCCESS, data: response.data})
  } else {
    yield put({type: FETCH_POST_NEED_RENT_HOME_FAILURE})
  }
}

export function* watchNewFeedNeedRent() {
  yield takeLatest(FETCH_POST_NEED_RENT_HOME, fetchPostNeedRentHome)
}
