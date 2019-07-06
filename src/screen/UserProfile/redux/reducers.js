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
  },
  countNoti: {
    loading: false,
    response: null,
    success: false,
    erorr: null
  },
  postUserProfile: {
    loading: false,
    refreshing: false,
    response: null,
    success: false,
    loadMore: false,
    error: null
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
    case actions.ACTION_COUNT_NOTI:
      return state
    case actions.ACTION_COUNT_NOTI_SUCCESS:
      return {
        ...state,
        countNoti: {
          ...state.countNoti,
          loading: false,
          response: action.response,
          success: true
        }
      }
    case actions.ACTION_COUNT_NOTI_FAILURE:
      return {
        ...state,
        countNoti: {
          ...state.countNoti,
          loading: false,
          error: action.error,
          success: false
        }
      }
    case actions.ACTION_RESET_COUNT_NOTI:
      return {
        ...state,
        countNoti: {
          loading: false,
          response: null,
          success: false,
          error: null
        }
      }
    case actions.ACTION_GET_POST_USER_PROFILE:
      return {
        ...state,
        postUserProfile: {
          ...state.postUserProfile,
          loading: !action.params.loadMore,
          loadMore: action.params.loadMore,
          success: false
        }
      }
    case actions.ACTION_GET_POST_USER_PROFILE_SUCCESS:
      let data = []
      if (action.response.loadmore) {
        data = state.postUserProfile.response.content.content.concat(action.response.response.content.content)
      } else {
        data = action.response.response.content.content
      }
      return {
        ...state,
        postUserProfile: {
          ...state.postUserProfile,
          loading: false,
          response: {
            ...action.response.response,
            content: {...action.response.response.content, content: data}
          },
          success: true
        }
      }
    case actions.ACTION_GET_POST_USER_PROFILE_FAILURE:
      return {
        ...state,
        postUserProfile: {
          ...state.postUserProfile,
          loading: false,
          error: action.error,
          success: false
        }
      }
    default:
      return state
  }
}

export default userProfile
