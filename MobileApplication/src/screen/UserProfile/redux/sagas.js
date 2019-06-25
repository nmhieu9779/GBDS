import * as actions from "@src/redux/actions"
import {put, takeLatest, call} from "redux-saga/effects"
import * as service from "./service"
import {asyncStorage, image} from "@src/utilities"

function* getUserProfile(action) {
  const response = yield call(service.getUserProfile, action.params)
  if (response.status === 200) {
    yield put(actions.getUserProfileSuccess(response.data))
  } else {
    yield put(actions.getUserProfileFailure(response.response.data))
  }
}

function* getUriAvatar(action) {
  const response = yield call(service.getUriAvatar, action.params)
  if (response.status === 200) {
    yield put(
      actions.getUriAvatarSuccess({...response.data, content: image.formatUriImage(response.data.content)})
    )
    yield asyncStorage.setItemAsyncStorage({keyName: "AVATAR", data: true})
  } else {
    yield put(actions.getUriAvatarFailure(response.response.data))
    yield asyncStorage.setItemAsyncStorage({keyName: "AVATAR", data: false})
  }
}

export function* watchUserProfile() {
  yield takeLatest(actions.ACTION_GET_USER_PROFILE, getUserProfile)
  yield takeLatest(actions.ACTION_GET_URI_AVATAR, getUriAvatar)
}
