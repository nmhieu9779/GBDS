import {fromJS} from "immutable"
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

initStateAddress = {
  loading: false,
  city: [],
  district: [],
  ward: [],
  street: []
}

const addressReducers = (state = initStateAddress, action) => {
  let newState = fromJS(state).toJS()
  switch (action.type) {
    case GET_CITY:
      newState.loading = true
      break
    case GET_DISTRICT:
      newState.loading = true
      break
    case GET_WARD:
      newState.loading = true
      break
    case GET_STREET:
      newState.loading = true
      break
    case GET_CITY_SUCCESS:
      newState.city = action.data
      newState.loading = false
      break
    case GET_DISTRICT_SUCCESS:
      newState.district = action.data
      newState.loading = false
      break
    case GET_WARD_SUCCESS:
      newState.ward = action.data
      newState.loading = false
      break
    case GET_STREET_SUCCESS:
      newState.street = action.data
      newState.loading = false
      break
    case GET_CITY_FAILURE:
      newState.loading = false
      break
    case GET_DISTRICT_FAILURE:
      newState.loading = false
      break
    case GET_WARD_FAILURE:
      newState.loading = false
      break
    case GET_STREET_FAILURE:
      newState.loading = false
      break
    default:
      break
  }
  return newState
}

export default addressReducers
