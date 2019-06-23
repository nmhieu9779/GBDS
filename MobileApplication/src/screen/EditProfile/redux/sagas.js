import * as actions from "@src/redux/actions"
import {put, takeLatest, call} from "redux-saga/effects"
import * as service from "./service"
import {toast} from "@src/utilities"

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
    yield put(actions.resetUploadImage())
    toast.showToast("Cập nhật thông tin thành công", "#ffffff", "#0EA854")
  } else {
    yield put(actions.editProfileFailure(response.response.data))
    yield put(actions.resetUploadImage())
    toast.showToast("Cập nhật thông tin thất bại", "#ffffff", "#E0002C")
  }
}

function* changePassword(action) {
  const response = yield call(service.changePassword, action.params)
  if (response.status === 200) {
    yield put(actions.changePasswordSuccess(response.data))
    toast.showToast("Đổi mật khẩu thành công", "#ffffff", "#0EA854")
  } else {
    yield put(actions.changePasswordFailure(response.response.data))
    toast.showToast("Đổi mật khẩu thất bại", "#ffffff", "#E0002C")
  }
}

export function* watchEditProfile() {
  yield takeLatest(actions.ACTION_UPLOAD_IMAGE, uploadImage)
  yield takeLatest(actions.ACTION_EDIT_PROFILE, editProfile)
  yield takeLatest(actions.ACTION_CHANGE_PASSWORD, changePassword)
}
