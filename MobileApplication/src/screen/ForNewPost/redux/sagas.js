import * as actions from "@src/redux/actions"
import {put, takeLatest, call} from "redux-saga/effects"
import * as service from "./service"
import {toast} from "@src/utilities"
import NavigationService from "@src/navigation/NavigationService"

function* uploadPostFor(action) {
  const response = yield call(service.uploadPostFor, action.params)
  if (response.status === 200) {
    yield put(actions.uploadPostForSuccess({...response.data, type: action.params.type}))
    toast.showToast("Upload hình ảnh thành công.", "#ffffff", "#0EA854")
  } else {
    yield put(actions.uploadPostForFailure(response.response.data))
    toast.showToast("Upload hình ảnh thất bại.", "#ffffff", "#E0002C")
  }
}

function* deleteImagePost(action) {
  const response = yield call(service.deleteImagePost, action.params)
  if (response.status === 200) {
    yield put(actions.deleteImagePostSuccess({...response.data, index: action.params.index}))
    toast.showToast("Xoá hình ảnh thành công.", "#ffffff", "#0EA854")
  } else {
    yield put(actions.deleteImagePostFailure(response.response.data))
    toast.showToast("Xoá hình ảnh thất bại.", "#ffffff", "#E0002C")
  }
}

function* postFor(action) {
  const response = yield call(service.postFor, action.params)
  if (response.status === 201) {
    yield put(actions.postForSuccess(response.data))
    toast.showToast("Đăng bài viết thành công.", "#ffffff", "#0EA854")
  } else if (response.status === 200) {
    yield put(actions.postForSuccess(response.data))
    toast.showToast("Chỉnh sửa bài viết thành công.", "#ffffff", "#0EA854")
  } else {
    yield put(actions.postForFailure(response.response.data))
  }
}

export function* watchPostFor() {
  yield takeLatest(actions.ACTION_UPLOAD_POST_FOR, uploadPostFor)
  yield takeLatest(actions.ACTION_POST_FOR, postFor)
  yield takeLatest(actions.ACTION_DELETE_IMAGE_POST, deleteImagePost)
}
