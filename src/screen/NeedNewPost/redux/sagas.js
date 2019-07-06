import * as actions from "@src/redux/actions"
import {put, takeLatest, call} from "redux-saga/effects"
import needNewPostService from "./service"

function* postNeed(action) {
  const response = yield call(needNewPostService.postNeed, action.params)
  if (response.status === 201) {
    yield put(actions.postNeedSuccess(response.data || {}))
    yield put(actions.showToast("Đăng bài viết thành công"))
  } else if (response.status === 200) {
    yield put(actions.postNeedSuccess(response.data || {}))
    yield put(actions.showToast("Chỉnh sửa bài viết thành công"))
  } else {
    yield put(actions.postNeedFailure(response.response ? response.response.data : {}))
    yield put(actions.showToast("Đăng bài viết thất bại"))
  }
}

export function* watchPostNeed() {
  yield takeLatest(actions.ACTION_POST_NEED, postNeed)
}
