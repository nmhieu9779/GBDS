import * as actions from "@src/redux/actions"
import {put, takeLatest, call, takeEvery} from "redux-saga/effects"
import * as service from "./service"
import NavigationService from "@src/navigation/NavigationService"
import {toast} from "@src/utilities"

function* getDetailPost(action) {
  const response = yield call(service.getDetailPost, action.params)
  if (response.status === 200) {
    yield put(actions.getDetailPostSuccess({...response.data, type: action.params.type}))
    yield NavigationService.navigate("PostDetail")
  } else {
    yield put(actions.getDetailPostFailure(response.response.data))
  }
}

function* interactivePost(action) {
  const response = yield call(service.interactivePost, action.params)
  if (response.status === 200) {
    yield put(actions.interactivePostSuccess(response.data))
  } else {
    yield put(actions.interactivePostFailure(response.response.data))
  }
}

function* closePost(action) {
  const response = yield call(service.closePost, action.params)
  if (response.status === 200) {
    yield put(actions.closePostSuccess(response.data))
    toast.showToast("Đóng bài viết thành công", "#ffffff", "#0EA854")
  } else {
    yield put(actions.closePostFailure(response.response.data))
    toast.showToast("Mở bài viết thất bại", "#ffffff", "#E0002C")
  }
}

function* openPost(action) {
  const response = yield call(service.openPost, action.params)
  if (response.status === 200) {
    yield put(actions.openPostSuccess(response.data))
    toast.showToast("Mở bài viết thành công", "#ffffff", "#0EA854")
  } else {
    yield put(actions.openPostFailure(response.response.data))
    toast.showToast("Mở bài viết thất bại", "#ffffff", "#E0002C")
  }
}

function* deletePost(action) {
  const response = yield call(service.deletePost, action.params)
  if (response.status === 200) {
    yield put(actions.deletePostSuccess(response.data))
    toast.showToast(" Xoá bài viết thành công", "#ffffff", "#0EA854")
  } else {
    yield put(actions.deletePostFailure(response.response.data))
    toast.showToast("Xoá bài viết thất bại", "#ffffff", "#E0002C")
  }
}

export function* watchPostDetail() {
  yield takeLatest(actions.ACTION_GET_DETAIL_POST, getDetailPost)
  yield takeEvery(actions.ACTION_INTERACTIVE_POST, interactivePost)
  yield takeLatest(actions.ACTION_CLOSE_POST, closePost)
  yield takeLatest(actions.ACTION_OPEN_POST, openPost)
  yield takeLatest(actions.ACTION_DELETE_POST, deletePost)
}
