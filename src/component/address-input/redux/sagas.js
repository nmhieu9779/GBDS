import * as actions from "@src/redux/actions"
import {put, takeLatest, call} from "redux-saga/effects"
import addressServices from "./services"

function* getCity(action) {
  const response = yield call(addressServices.getCity)
  if (response.status === 200) {
    yield put(actions.getCitySuccess(response.data || {}))
  } else {
    yield put(actions.getCityFailure(response.response ? response.response.data : {}))
  }
}

function* getDistrict(action) {
  const response = yield call(addressServices.getDistrict, action.params)
  if (response.status === 200) {
    yield put(actions.getDistrictSuccess(response.data || {}))
  } else {
    yield put(actions.getDistrictFailure(response.response ? response.response.data : {}))
  }
}

function* getWard(action) {
  const response = yield call(addressServices.getWard, action.params)
  if (response.status === 200) {
    yield put(actions.getWardSuccess(response.data || {}))
  } else {
    yield put(actions.getWardFailure(response.response ? response.response.data : {}))
  }
}

function* getStreet(action) {
  const response = yield call(addressServices.getStreet, action.params)
  if (response.status === 200) {
    yield put(actions.getStreetSuccess(response.data || {}))
  } else {
    yield put(actions.getStreetFailure(response.response ? response.response.data : {}))
  }
}

export function* watchAddress() {
  yield takeLatest(actions.ACTION_GET_CITY, getCity)
  yield takeLatest(actions.ACTION_GET_DISTRICT, getDistrict)
  yield takeLatest(actions.ACTION_GET_WARD, getWard)
  yield takeLatest(actions.ACTION_GET_STREET, getStreet)
}
