import {
  UPLOAD_IMAGE,
  UPLOAD_IMAGE_SUCCESS,
  UPLOAD_IMAGE_FAILURE,
  UPLOAD_AVATAR,
  UPLOAD_AVATAR_SUCCESS,
  UPLOAD_AVATAR_FAILURE,
  EDIT_AVATAR,
  EDIT_AVATAR_SUCCESS,
  EDIT_AVATAR_FAILURE
} from "@src/redux/actions"
import {put, takeLatest, call} from "redux-saga/effects"
import {Api} from "./api"
import {getItemAsyncStorage} from "@src/utilities/asyncStorage"

function* uploadImage(payload) {
  const response = yield call(Api.uploadImage, payload.data)
  if (response.status === 200) {
    yield put({type: UPLOAD_IMAGE_SUCCESS, uri: response.data.content})
  } else {
    yield put({type: UPLOAD_IMAGE_FAILURE})
  }
}

function* uploadAvatar(payload) {
  const response = yield call(Api.uploadAvatar, payload.data)
  debugger
  if (response.status === 200) {
    let userOauth = yield getItemAsyncStorage("USER_OAUTH")
    yield put({type: UPLOAD_AVATAR_SUCCESS})
    yield put({type: GET_URI_AVATAR, email: userOauth.email})
  } else {
    yield put({type: UPLOAD_AVATAR_FAILURE})
  }
}

function* editAvatar(payload) {
  const response = yield call(Api.editAvatar, {email: payload.email, avatarImageUrl: payload.avatarImageUrl})
  debugger
  if (response.status === 200) {
    let userOauth = yield getItemAsyncStorage("USER_OAUTH")
    yield put({type: EDIT_AVATAR_SUCCESS})
    yield put({type: GET_URI_AVATAR, email: userOauth.email})
  } else {
    yield put({type: EDIT_AVATAR_FAILURE})
  }
}

export function* watchEditProfile() {
  yield takeLatest(UPLOAD_IMAGE, uploadImage)
  yield takeLatest(UPLOAD_AVATAR, uploadAvatar)
  yield takeLatest(EDIT_AVATAR, editAvatar)
}
