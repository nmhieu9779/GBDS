import {
  FETCH_POST_NEED_RENT_HOME,
  FETCH_POST_NEED_RENT_HOME_SUCCESS,
  OPEN_HUD,
  CLOSE_HUD
} from "@src/redux/actions"
import {put, takeLatest, call} from "redux-saga/effects"
import {Api} from "./api"

function* fetchPostNeedRentHome() {
  yield put({type: OPEN_HUD})
  const response = yield call(Api.fetchPostNeedRentHome)
  if (response.status === 200) {
    yield put({type: FETCH_POST_NEED_RENT_HOME_SUCCESS, data: response.data})
    yield put({type: CLOSE_HUD})
  }
}

export function* watchNewFeedNeedRent() {
  yield takeLatest(FETCH_POST_NEED_RENT_HOME, fetchPostNeedRentHome)
}
