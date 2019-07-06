import * as actions from "@src/redux/actions"
import {put, takeLatest, call} from "redux-saga/effects"
import forNewPostService from "./service"

function* uploadPostFor(action) {
  const response = yield call(forNewPostService.uploadPostFor, action.params)
  if (response.status === 200) {
    yield put(actions.uploadPostForSuccess({...response.data, type: action.params.type}))
    yield put(actions.showToast("Upload hình ảnh thành công"))
  } else {
    yield put(actions.uploadPostForFailure(response.response ? response.response.data : {}))
    yield put(actions.showToast("Upload hình ảnh thất bại"))
  }
}

function* deleteImagePost(action) {
  const response = yield call(forNewPostService.deleteImagePost, action.params)
  if (response.status === 200) {
    yield put(actions.deleteImagePostSuccess({...response.data, index: action.params.index}))
  } else {
    yield put(actions.deleteImagePostFailure(response.response ? response.response.data : {}))
  }
}

function* postFor(action) {
  const response = yield call(forNewPostService.postFor, action.params)
  if (response.status === 201) {
    yield put(actions.postForSuccess(response.data || {}))
    yield put(actions.showToast("Đăng bài viết thành công"))
  } else if (response.status === 200) {
    yield put(actions.postForSuccess(response.data || {}))
    yield put(actions.showToast("Chỉnh sửa bài viết thành công"))
  } else {
    yield put(actions.postForFailure(response.response ? response.response.data : {}))
  }
}

function* getGeocoding(action) {
  const response = yield call(forNewPostService.getGeocoding, action.params)
  debugger
  if (response.status === 200) {
    yield put(actions.getGeocodingSuccess(response.data || {}))
  } else {
    yield put(actions.getGeocodingFailure(response.response ? response.response.data : {}))
  }
}

export function* watchPostFor() {
  yield takeLatest(actions.ACTION_UPLOAD_POST_FOR, uploadPostFor)
  yield takeLatest(actions.ACTION_POST_FOR, postFor)
  yield takeLatest(actions.ACTION_DELETE_IMAGE_POST, deleteImagePost)
  yield takeLatest(actions.ACTION_GET_GEOCODING, getGeocoding)
}
