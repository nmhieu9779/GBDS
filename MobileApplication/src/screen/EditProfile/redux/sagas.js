import {UPLOAD_AVATAR, UPLOAD_AVATAR_SUCCESS, UPLOAD_AVATAR_FAILURE} from "@src/redux/actions"
import {put, takeLatest, call} from "redux-saga/effects"
import {Api} from "./api"
import {formatUriImage} from "@src/utilities/image"

function* uploadAvatar(payload) {
  const response = yield call(Api.editAvatarProfile, payload.data)
  if (response.status === 200) {
    yield put({type: UPLOAD_AVATAR_SUCCESS, uri: formatUriImage(response.data.content)})
  } else {
    yield put({type: UPLOAD_AVATAR_FAILURE})
  }
}

export function* watchEditProfile() {
  yield takeLatest(UPLOAD_AVATAR, uploadAvatar)
}
