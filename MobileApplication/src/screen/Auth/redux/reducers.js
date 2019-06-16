import * as actions from "@src/redux/actions"

initStateAuth = {
  signIn: {
    loading: false,
    response: null,
    success: false
  },
  signUp: {
    loading: false,
    response: null,
    success: false
  }
}

const authReducers = (state = initStateAuth, action) => {
  switch (action.type) {
    case actions.ACTION_SIGN_IN:
      return {
        ...state,
        signIn: {
          loading: true,
          response: null,
          success: false
        }
      }
    case actions.ACTION_SIGN_IN_SUCCESS:
      return {
        ...state,
        signIn: {
          loading: false,
          response: action.response,
          success: true
        }
      }
    case actions.ACTION_SIGN_IN_FAILURE:
      return {
        ...state,
        signIn: {
          loading: false,
          response: action.error,
          success: false
        }
      }
    case actions.ACTION_RESET_SIGN_IN:
      return {
        ...state,
        signIn: {
          loading: false,
          response: null,
          success: false
        }
      }
    case actions.ACTION_GET_INFO_SIGN_IN:
      return {
        ...state,
        signIn: {
          loading: false,
          response: action.params,
          success: true
        }
      }
    case actions.ACTION_SIGN_UP:
      return {
        ...state,
        signUp: {
          loading: true,
          response: null,
          success: false
        }
      }
    case actions.ACTION_SIGN_UP_SUCCESS:
      return {
        ...state,
        signUp: {
          loading: false,
          response: action.response,
          success: true
        }
      }
    case actions.ACTION_SIGN_UP_FAILURE:
      return {
        ...state,
        signUp: {
          loading: false,
          response: action.error,
          success: false
        }
      }
    default:
      return state
  }
}

export default authReducers
