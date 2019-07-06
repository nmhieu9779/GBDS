import * as actions from "@src/redux/actions"
import {put, takeLatest, call} from "redux-saga/effects"
import editProfileService from "./service"

function* uploadImage(action) {
  const response = yield call(editProfileService.uploadImage, action.params)
  if (response.status === 200) {
    yield put(actions.uploadImageSuccess(response.data || {}))
  } else {
    yield put(actions.uploadImageFailure(response.response ? response.response.data : {}))
  }
}

function* editProfile(action) {
  const response = yield call(editProfileService.editProfile, action.params)
  if (action.params.isCreate ? response.status === 201 : response.status === 200) {
    yield put(actions.editProfileSuccess(response.data || {}))
    yield put(actions.getUserProfile({email: response.data.content.email}))
    yield put(actions.getUriAvatar({email: response.data.content.email}))
    yield put(actions.resetUploadImage())
    yield put(actions.showToast("Cập nhật thông tin thành công"))
  } else {
    yield put(actions.editProfileFailure(response.response ? response.response.data : {}))
    yield put(actions.resetUploadImage())
    yield put(actions.showToast("Cập nhật thông tin thất bại"))
  }
}

function* changePassword(action) {
  const response = yield call(editProfileService.changePassword, action.params)
  if (response.status === 200) {
    yield put(actions.changePasswordSuccess(response.data || {}))
    yield put(actions.showToast("Đổi mật khẩu thành công"))
  } else {
    yield put(actions.changePasswordFailure(response.response ? response.response.data : {}))
    yield put(actions.showToast("Đổi mật khẩu thất bại"))
  }
}

export function* watchEditProfile() {
  yield takeLatest(actions.ACTION_UPLOAD_IMAGE, uploadImage)
  yield takeLatest(actions.ACTION_EDIT_PROFILE, editProfile)
  yield takeLatest(actions.ACTION_CHANGE_PASSWORD, changePassword)
}
