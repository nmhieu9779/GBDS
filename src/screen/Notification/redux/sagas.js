import * as actions from "@src/redux/actions"
import {put, takeLatest, call} from "redux-saga/effects"
import notificationService from "./service"

function* getNotification(action) {
  const response = yield call(notificationService.getNotification, action.params)
  if (response.status === 200) {
    yield put(actions.getNotificationSuccess(response.data || {}))
  } else {
    yield put(actions.getNotificationFailure(response.response ? response.response.data : {}))
  }
}

export function* watchNotification() {
  yield takeLatest(actions.ACTION_GET_NOTIFICATION, getNotification)
}
