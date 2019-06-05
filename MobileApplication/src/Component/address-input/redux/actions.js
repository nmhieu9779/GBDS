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

export const getCity = (payload) => ({
  type: GET_CITY,
  payload
})

export const getCitySuccess = (payload) => ({
  type: GET_CITY_SUCCESS,
  payload
})

export const getCityFailure = () => ({
  type: GET_CITY_FAILURE
})

export const getDistrict = (cityId) => ({
  type: GET_DISTRICT,
  cityId
})

export const getDistrictSuccess = (payload) => ({
  type: GET_DISTRICT_SUCCESS,
  payload
})

export const getDistrictFailure = () => ({
  type: GET_DISTRICT_FAILURE
})

export const getWard = ({cityId, districtId}) => ({
  type: GET_WARD,
  cityId,
  districtId
})

export const getWardSuccess = (payload) => ({
  type: GET_WARD_SUCCESS,
  payload
})

export const getWardFailure = () => ({
  type: GET_WARD_FAILURE
})

export const getStreet = ({cityId, districtId}) => ({
  type: GET_STREET,
  cityId,
  districtId
})

export const getStreetSuccess = (payload) => ({
  type: GET_STREET_SUCCESS,
  payload
})

export const getStreetFailure = () => ({
  type: GET_STREET_FAILURE
})
