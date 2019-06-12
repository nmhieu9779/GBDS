import * as actions from "@src/redux/actions"
import {put, takeLatest, call} from "redux-saga/effects"
import * as service from "./service"
import {getItemAsyncStorage} from "@src/utilities/asyncStorage"

function* uploadImage(action) {
  const response = yield call(service.uploadImage, action.params)
  if (response.status === 200) {
    yield put(actions.uploadImageSuccess(response.data))
  } else {
    yield put(actions.uploadImageFailure(response.response.data))
  }
}

function* editProfile(action) {
  const response = yield call(service.editProfile, action.params)
  if (action.params.isCreate ? response.status === 201 : response.status === 200) {
    yield put(actions.editProfileSuccess(response.data))
    yield put(actions.getUserProfile({email: response.data.content.email}))
    yield put(actions.getUriAvatar({email: response.data.content.email}))
  } else {
    yield put(actions.editProfileFailure(response.response.data))
  }
}

export function* watchEditProfile() {
  yield takeLatest(actions.ACTION_UPLOAD_IMAGE, uploadImage)
  yield takeLatest(actions.ACTION_EDIT_PROFILE, editProfile)
}
