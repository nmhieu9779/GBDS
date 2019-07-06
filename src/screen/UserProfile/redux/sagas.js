import * as actions from "@src/redux/actions"
import {put, takeLatest, call} from "redux-saga/effects"
import userProfileService from "./service"
import {asyncStorage, image} from "@src/utilities"

function* getUserProfile(action) {
  const response = yield call(userProfileService.getUserProfile, action.params)
  if (response.status === 200) {
    yield put(actions.getUserProfileSuccess(response.data || {}))
  } else {
    yield put(actions.getUserProfileFailure(response.response ? response.response.data : {}))
  }
}

function* getUriAvatar(action) {
  const response = yield call(userProfileService.getUriAvatar, action.params)
  if (response.status === 200) {
    yield put(
      actions.getUriAvatarSuccess({...response.data, content: image.formatUriImage(response.data.content)})
    )
    yield asyncStorage.setItemAsyncStorage({keyName: "AVATAR", data: true})
  } else {
    yield put(actions.getUriAvatarFailure(response.response ? response.response.data : {}))
    yield asyncStorage.setItemAsyncStorage({keyName: "AVATAR", data: false})
  }
}

function* countNoti(action) {
  const response = yield call(userProfileService.countNoti, action.params)
  if (response.status === 200) {
    yield put(actions.countNotiSuccess(response.data || {}))
  } else {
    yield put(actions.countNotiFailure(response.response ? response.response.data : {}))
  }
}
function* getPostUserProfile(action) {
  const response = yield call(userProfileService.getPostUserProfile, action.params)
  if (response.status === 200) {
    yield put(
      actions.getPostUserProfileSuccess({
        response: response.data || {},
        loadmore: action.params.loadMore
      })
    )
  } else {
    yield put(actions.getPostUserProfileFailure(response.response ? response.response.data : {}))
  }
}

export function* watchUserProfile() {
  yield takeLatest(actions.ACTION_GET_USER_PROFILE, getUserProfile)
  yield takeLatest(actions.ACTION_GET_URI_AVATAR, getUriAvatar)
  yield takeLatest(actions.ACTION_COUNT_NOTI, countNoti)
  yield takeLatest(actions.ACTION_GET_POST_USER_PROFILE, getPostUserProfile)
}
