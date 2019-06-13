import * as actions from "@src/redux/actions"
import {put, takeLatest, call} from "redux-saga/effects"
import * as service from "./service"

function* getDetailPost(action) {
  const response = yield call(service.getDetailPost, action.params)
  if (response.status === 200) {
    yield put(actions.getDetailPostSuccess(response.data))
  } else {
    yield put(actions.getDetailPostFailure(response.response.data))
  }
}

export function* watchPostDetail() {
  yield takeLatest(actions.ACTION_GET_DETAIL_POST, getDetailPost)
}
