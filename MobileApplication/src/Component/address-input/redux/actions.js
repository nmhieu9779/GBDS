import {
  GET_CITY,
  GET_CITY_SUCCESS,
  GET_DISTRICT,
  GET_DISTRICT_SUCCESS,
  GET_WARD,
  GET_WARD_SUCCESS,
  GET_STREET,
  GET_STREET_SUCCESS
} from "@src/redux/actions"

export const getCityAction = (payload) => ({
  type: GET_CITY,
  payload
})

export const getCitySuccessAction = (payload) => ({
  type: GET_CITY_SUCCESS,
  payload
})

export const getDistrictAction = (cityId) => ({
  type: GET_DISTRICT,
  cityId
})

export const getDistrictSuccessAction = (payload) => ({
  type: GET_DISTRICT_SUCCESS,
  payload
})

export const getWardAction = ({cityId, districtId}) => ({
  type: GET_WARD,
  cityId,
  districtId
})

export const getWardSuccessAction = (payload) => ({
  type: GET_WARD_SUCCESS,
  payload
})
export const getstreetAction = ({cityId, districtId}) => ({
  type: GET_STREET,
  cityId,
  districtId
})

export const getstreetSuccessAction = (payload) => ({
  type: GET_STREET_SUCCESS,
  payload
})
