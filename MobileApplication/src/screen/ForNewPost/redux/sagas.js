import * as actions from "@src/redux/actions"
import {put, takeLatest, call, takeEvery} from "redux-saga/effects"
import * as service from "./service"
import {showToast} from "@src/utilities/toast"

function* uploadPostFor(action) {
  const response = yield call(service.uploadPostFor, action.params)
  if (response.status === 200) {
    yield put(actions.uploadPostForSuccess({...response.data, type: action.params.type}))
    showToast("Upload hình ảnh thành công.", "#ffffff", "#0EA854")
  } else {
    yield put(actions.uploadPostForFailure(response.response.data))
    showToast("Upload hình ảnh thất bại.", "#ffffff", "#E0002C")
  }
}

function* postFor(action) {
  const response = yield call(service.postFor, action.params)
  if (response.status === 201) {
    yield put(actions.postForSuccess(response.data))
    showToast("Đăng bài viết thành công.", "#ffffff", "#0EA854")
  } else {
    yield put(actions.postForFailure(response.response.data))
  }
}

export function* watchPostFor() {
  yield takeLatest(actions.ACTION_UPLOAD_POST_FOR, uploadPostFor)
  yield takeEvery(actions.ACTION_POST_FOR, postFor)
}
