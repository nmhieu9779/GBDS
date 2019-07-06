import * as actions from "@src/redux/actions"
import {put, takeLatest, call, takeEvery} from "redux-saga/effects"
import postDetailService from "./service"
import NavigationService from "@src/navigation/NavigationService"

function* getDetailPost(action) {
  const response = yield call(postDetailService.getDetailPost, action.params)
  if (response.status === 200) {
    yield put(actions.getDetailPostSuccess({...response.data, type: action.params.type}))
    yield NavigationService.navigate("PostDetail")
  } else {
    yield put(actions.getDetailPostFailure(response.response ? response.response.data : {}))
  }
}

function* interactivePost(action) {
  const response = yield call(postDetailService.interactivePost, action.params)
  if (response.status === 200) {
    yield put(actions.interactivePostSuccess(response.data || {}))
  } else {
    yield put(actions.interactivePostFailure(response.response ? response.response.data : {}))
  }
}

function* closePost(action) {
  const response = yield call(postDetailService.closePost, action.params)
  if (response.status === 200) {
    yield put(actions.closePostSuccess(response.data || {}))
    yield put(actions.showToast("Đóng bài viết thành công"))
  } else {
    yield put(actions.closePostFailure(response.response ? response.response.data : {}))
    yield put(actions.showToast("Mở bài viết thất bại"))
  }
}

function* openPost(action) {
  const response = yield call(postDetailService.openPost, action.params)
  if (response.status === 200) {
    yield put(actions.openPostSuccess(response.data || {}))
    yield put(actions.showToast("Mở bài viết thành công"))
  } else {
    yield put(actions.openPostFailure(response.response ? response.response.data : {}))
    yield put(actions.showToast("Mở bài viết thất bại"))
  }
}

function* deletePost(action) {
  const response = yield call(postDetailService.deletePost, action.params)
  if (response.status === 200) {
    yield put(actions.deletePostSuccess(response.data || {}))
    yield put(actions.showToast(" Xoá bài viết thành công"))
  } else {
    yield put(actions.deletePostFailure(response.response ? response.response.data : {}))
    yield put(actions.showToast("Xoá bài viết thất bại"))
  }
}

export function* watchPostDetail() {
  yield takeLatest(actions.ACTION_GET_DETAIL_POST, getDetailPost)
  yield takeEvery(actions.ACTION_INTERACTIVE_POST, interactivePost)
  yield takeLatest(actions.ACTION_CLOSE_POST, closePost)
  yield takeLatest(actions.ACTION_OPEN_POST, openPost)
  yield takeLatest(actions.ACTION_DELETE_POST, deletePost)
}
