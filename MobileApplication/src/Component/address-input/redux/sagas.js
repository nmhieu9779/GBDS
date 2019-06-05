import {
  GET_CITY,
  GET_CITY_SUCCESS,
  GET_CITY_FAILURE,
  GET_DISTRICT,
  GET_DISTRICT_SUCCESS,
  GET_DISTRICT_FAILURE,
  GET_WARD,
  GET_WARD_SUCCESS,
  GET_WARD_FAILURE,
  GET_STREET,
  GET_STREET_SUCCESS,
  GET_STREET_FAILURE
} from "@src/redux/actions"
import {put, takeLatest, call} from "redux-saga/effects"
import {Api} from "./api"

const formatData = (data) =>
  data.map((item) => ({
    id: item.id,
    label: item.name,
    code: item.code
  }))

function* handleResponse(response, typeSuccess, typeFailure) {
  if (response.status === 200) {
    const data = formatData(response.data.content)
    yield put({type: typeSuccess, data})
  } else {
    yield put({type: typeFailure})
  }
}

function* getCity() {
  const response = yield call(Api.getCity)
  yield call(handleResponse, response, GET_CITY_SUCCESS, GET_CITY_FAILURE)
}

function* getDistrict(payload) {
  const response = yield call(Api.getDistrict, payload.cityId)
  yield call(handleResponse, response, GET_DISTRICT_SUCCESS, GET_DISTRICT_FAILURE)
}

function* getWard(payload) {
  const response = yield call(Api.getWard, payload.cityId, payload.districtId)
  yield call(handleResponse, response, GET_WARD_SUCCESS, GET_WARD_FAILURE)
}

function* getStreet(payload) {
  const response = yield call(Api.getStreet, payload.cityId, payload.districtId)
  yield call(handleResponse, response, GET_STREET_SUCCESS, GET_STREET_FAILURE)
}

export function* watchAddress() {
  yield takeLatest(GET_CITY, getCity)
  yield takeLatest(GET_DISTRICT, getDistrict)
  yield takeLatest(GET_WARD, getWard)
  yield takeLatest(GET_STREET, getStreet)
}
