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
} from "../../../actions"

export const getCityAction = payload => ({
  type: GET_CITY,
  payload
})

export const getCitySuccessAction = payload => ({
  type: GET_CITY_SUCCESS,
  payload
})

export const getCityFailureAction = payload => ({
  type: GET_CITY_FAILURE,
  payload
})

export const getDistrictAction = cityId => ({
  type: GET_DISTRICT,
  cityId
})

export const getDistrictSuccessAction = payload => ({
  type: GET_DISTRICT_SUCCESS,
  payload
})

export const getDistrictFailureAction = payload => ({
  type: GET_DISTRICT_FAILURE,
  payload
})

export const getWardAction = ({ cityId, districtId }) => ({
  type: GET_WARD,
  cityId,
  districtId
})

export const getWardSuccessAction = payload => ({
  type: GET_WARD_SUCCESS,
  payload
})

export const getWardFailureAction = payload => ({
  type: GET_WARD_FAILURE,
  payload
})

export const getstreetAction = ({ cityId, districtId }) => ({
  type: GET_STREET,
  cityId,
  districtId
})

export const getstreetSuccessAction = payload => ({
  type: GET_STREET_SUCCESS,
  payload
})

export const getstreetFailureAction = payload => ({
  type: GET_STREET_FAILURE,
  payload
})
