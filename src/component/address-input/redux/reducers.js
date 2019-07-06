import * as actions from "@src/redux/actions"

initStateAddress = {
  city: {
    loading: false,
    response: null,
    success: false
  },
  district: {
    loading: false,
    response: null,
    success: false
  },
  ward: {
    loading: false,
    response: null,
    success: false
  },
  street: {
    loading: false,
    response: null,
    success: false
  }
}

const addressReducers = (state = initStateAddress, action) => {
  switch (action.type) {
    case actions.ACTION_GET_CITY:
      return {
        ...state,
        city: {
          loading: true,
          response: null,
          success: false
        }
      }
    case actions.ACTION_GET_CITY_SUCCESS:
      return {
        ...state,
        city: {
          loading: false,
          response: action.response,
          success: true
        }
      }
    case actions.ACTION_GET_CITY_FAILURE:
      return {
        ...state,
        city: {
          loading: false,
          response: action.error,
          success: false
        }
      }
    case actions.ACTION_GET_DISTRICT:
      return {
        ...state,
        district: {
          loading: true,
          response: null,
          success: false
        }
      }
    case actions.ACTION_GET_DISTRICT_SUCCESS:
      return {
        ...state,
        district: {
          loading: false,
          response: action.response,
          success: true
        }
      }
    case actions.ACTION_GET_DISTRICT_FAILURE:
      return {
        ...state,
        district: {
          loading: false,
          response: action.error,
          success: false
        }
      }
    case actions.ACTION_GET_WARD:
      return {
        ...state,
        ward: {
          loading: true,
          response: null,
          success: false
        }
      }
    case actions.ACTION_GET_WARD_SUCCESS:
      return {
        ...state,
        ward: {
          loading: false,
          response: action.response,
          success: true
        }
      }
    case actions.ACTION_GET_WARD_FAILURE:
      return {
        ...state,
        ward: {
          loading: false,
          response: action.error,
          success: false
        }
      }
    case actions.ACTION_GET_STREET:
      return {
        ...state,
        street: {
          loading: true,
          response: null,
          success: false
        }
      }
    case actions.ACTION_GET_STREET_SUCCESS:
      return {
        ...state,
        street: {
          loading: false,
          response: action.response,
          success: true
        }
      }
    case actions.ACTION_GET_STREET_FAILURE:
      return {
        ...state,
        street: {
          loading: false,
          response: action.error,
          success: false
        }
      }
    default:
      return state
  }
}

export default addressReducers
