import * as actions from "@src/redux/actions"

initStateUserProfile = {
  userProfile: {
    loading: false,
    response: null,
    success: false
  },
  uriAvatar: {
    loading: false,
    response: null,
    success: false
  }
}

const userProfile = (state = initStateUserProfile, action) => {
  switch (action.type) {
    case actions.ACTION_GET_USER_PROFILE:
      return {
        ...state,
        userProfile: {
          ...state.userProfile,
          loading: true,
          success: false
        }
      }
    case actions.ACTION_GET_USER_PROFILE_SUCCESS:
      return {
        ...state,
        userProfile: {
          loading: false,
          response: action.response,
          success: true
        }
      }
    case actions.ACTION_GET_USER_PROFILE_FAILURE:
      return {
        ...state,
        userProfile: {
          loading: false,
          response: action.error,
          success: false
        }
      }
    case actions.ACTION_RESET_USER_PROFILE:
      return {
        ...state,
        userProfile: {
          loading: false,
          response: null,
          success: false
        }
      }
    case actions.ACTION_GET_URI_AVATAR:
      return {
        ...state,
        uriAvatar: {
          ...state.uriAvatar,
          loading: true,
          success: false
        }
      }
    case actions.ACTION_GET_URI_AVATAR_SUCCESS:
      return {
        ...state,
        uriAvatar: {
          loading: false,
          response: action.response,
          success: true
        }
      }
    case actions.ACTION_GET_URI_AVATAR_FAILURE:
      return {
        ...state,
        uriAvatar: {
          loading: false,
          response: action.error,
          success: false
        }
      }
    case actions.ACTION_RESET_URI_AVATAR:
      return {
        ...state,
        uriAvatar: {
          loading: false,
          response: null,
          success: false
        }
      }
    default:
      return state
  }
}

export default userProfile
