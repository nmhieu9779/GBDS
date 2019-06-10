import {
  GET_USER_PROFILE,
  GET_USER_PROFILE_SUCCESS,
  GET_USER_PROFILE_FAILURE,
  GET_URI_AVATAR,
  GET_URI_AVATAR_SUCCESS,
  GET_URI_AVATAR_FAILURE
} from "@src/redux/actions"
import {put, takeLatest, call} from "redux-saga/effects"
import {Api} from "./api"
import {setItemAsyncStorage} from "@src/utilities/asyncStorage"
import {formatUriImage} from "@src/utilities/image"

function* getUserProfile({email}) {
  const response = yield call(Api.getUserProfile, email)
  if (response.status === 200) {
    yield put({type: GET_USER_PROFILE_SUCCESS, content: response.data.content})
    yield setItemAsyncStorage({keyName: "USER_PROFILE", data: {}})
  } else {
    yield put({type: GET_USER_PROFILE_FAILURE})
    yield setItemAsyncStorage({keyName: "USER_PROFILE", data: false})
  }
}

function* getUriAvatar({email}) {
  const response = yield call(Api.getUriAvatar, email)
  if (response.status === 200) {
    yield put({type: GET_URI_AVATAR_SUCCESS, content: formatUriImage(response.data.content)})
    yield setItemAsyncStorage({keyName: "AVATAR", data: true})
  } else {
    yield put({type: GET_URI_AVATAR_FAILURE})
    yield setItemAsyncStorage({keyName: "AVATAR", data: false})
  }
}

export function* watchUserProfile() {
  yield takeLatest(GET_USER_PROFILE, getUserProfile)
  yield takeLatest(GET_URI_AVATAR, getUriAvatar)
}
