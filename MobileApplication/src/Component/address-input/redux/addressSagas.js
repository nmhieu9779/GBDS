import {
  GET_CITY,
  GET_CITY_SUCCESS,
  GET_DISTRICT,
  GET_DISTRICT_SUCCESS,
  GET_WARD,
  GET_WARD_SUCCESS,
  GET_STREET,
  GET_STREET_SUCCESS,
  OPEN_HUD,
  CLOSE_HUD
} from "../../../actions"
import { put, takeLatest, call } from "redux-saga/effects"
import { Api } from "./addressApi"

formatData = data =>
  data.map(item => ({
    id: item.id,
    label: item.name,
    code: item.code
  }))

function* handleResponse(response, typeSuccess) {
  if (response.status === 200) {
    console.log("a")
    const data = this.formatData(response.data.content)
    yield put({ type: typeSuccess, data })
    yield put({ type: CLOSE_HUD })
  } else {
    yield put({ type: CLOSE_HUD })
  }
}

function* getCity() {
  yield put({ type: OPEN_HUD })
  const response = yield call(Api.getCity)
  yield call(handleResponse, response, GET_CITY_SUCCESS)
}

function* getDistrict(payload) {
  yield put({ type: OPEN_HUD })
  const response = yield call(Api.getDistrict, payload.cityId)
  yield call(handleResponse, response, GET_DISTRICT_SUCCESS)
}

function* getWard(payload) {
  yield put({ type: OPEN_HUD })
  const response = yield call(Api.getWard, payload.cityId, payload.districtId)
  yield call(handleResponse, response, GET_WARD_SUCCESS)
}

function* getStreet(payload) {
  yield put({ type: OPEN_HUD })
  const response = yield call(Api.getStreet, payload.cityId, payload.districtId)
  yield call(handleResponse, response, GET_STREET_SUCCESS)
}

export function* watchAddress() {
  yield takeLatest(GET_CITY, getCity)
  yield takeLatest(GET_DISTRICT, getDistrict)
  yield takeLatest(GET_WARD, getWard)
  yield takeLatest(GET_STREET, getStreet)
}
