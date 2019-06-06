import {GET_USER_PROFILE, GET_USER_PROFILE_SUCCESS, GET_USER_PROFILE_FAILURE} from "@src/redux/actions"
import {put, takeLatest, call} from "redux-saga/effects"
import {Api} from "./api"

function* getUserProfile({email}) {
  const response = yield call(Api.getUserProfile, email)
  if (response.status === 200) {
    yield put({type: GET_USER_PROFILE_SUCCESS, content: response.data.content})
  } else {
    yield put({type: GET_USER_PROFILE_FAILURE})
  }
}

export function* watchUserProfile() {
  yield takeLatest(GET_USER_PROFILE, getUserProfile)
}
