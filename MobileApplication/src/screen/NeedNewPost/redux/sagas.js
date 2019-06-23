import * as actions from "@src/redux/actions"
import {put, takeLatest, call} from "redux-saga/effects"
import * as service from "./service"
import {toast} from "@src/utilities"
import NavigationService from "@src/navigation/NavigationService"

function* postNeed(action) {
  const response = yield call(service.postNeed, action.params)
  if (response.status === 201) {
    yield put(actions.postNeedSuccess(response.data))
    toast.showToast("Đăng bài viết thành công.", "#ffffff", "#0EA854")
  } else if (response.status === 200) {
    yield put(actions.postNeedSuccess(response.data))
    toast.showToast("Chỉnh sửa bài viết thành công.", "#ffffff", "#0EA854")
  } else {
    yield put(actions.postNeedFailure(response.response.data))
  }
}

export function* watchPostNeed() {
  yield takeLatest(actions.ACTION_POST_NEED, postNeed)
}
