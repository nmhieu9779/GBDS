import * as actions from "@src/redux/actions"
import {put, takeLatest, call} from "redux-saga/effects"
import * as service from "./service"
import {setItemAsyncStorage} from "@src/utilities/asyncStorage"
import {formatUriImage} from "@src/utilities/image"

function* getUserProfile(action) {
  const response = yield call(service.getUserProfile, action.params)
  if (response.status === 200) {
    yield put(actions.getUserProfileSuccess(response.data))
    yield setItemAsyncStorage({
      keyName: "USER_PROFILE",
      // data: {
      //   address: response.data.content.address,
      //   name: response.data.content.name,
      //   phone: response.data.content.phone,
      //   email: response.data.content.email
      // }
      data: true
    })
  } else {
    yield put(actions.getUserProfileFailure(response.response.data))
    yield setItemAsyncStorage({keyName: "USER_PROFILE", data: false})
  }
}

function* getUriAvatar(action) {
  const response = yield call(service.getUriAvatar, action.params)
  if (response.status === 200) {
    yield put(actions.getUriAvatarSuccess({...response.data, content: formatUriImage(response.data.content)}))
    yield setItemAsyncStorage({keyName: "AVATAR", data: true})
  } else {
    yield put(actions.getUriAvatarFailure(response.response.data))
    yield setItemAsyncStorage({keyName: "AVATAR", data: false})
  }
}

export function* watchUserProfile() {
  yield takeLatest(actions.ACTION_GET_USER_PROFILE, getUserProfile)
  yield takeLatest(actions.ACTION_GET_URI_AVATAR, getUriAvatar)
}
