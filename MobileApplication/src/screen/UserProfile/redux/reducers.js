import {fromJS} from "immutable"
import {
  GET_USER_PROFILE,
  GET_USER_PROFILE_SUCCESS,
  GET_USER_PROFILE_FAILURE,
  GET_URI_AVATAR,
  GET_URI_AVATAR_SUCCESS,
  GET_URI_AVATAR_FAILURE
} from "@src/redux/actions"

initStateUserProfile = {
  loading: false,
  content: {},
  uriAvatar: null
}

const userProfile = (state = initStateUserProfile, action) => {
  let newState = fromJS(state).toJS()
  switch (action.type) {
    case GET_USER_PROFILE:
      newState.loading = true
      break
    case GET_USER_PROFILE_SUCCESS:
      newState.content = action.content
      newState.loading = false
      break
    case GET_USER_PROFILE_FAILURE:
      newState.loading = false
      break
    case GET_URI_AVATAR:
      newState.loading = true
      break
    case GET_URI_AVATAR_SUCCESS:
      newState.uriAvatar = action.content
      newState.loading = false
      break
    case GET_URI_AVATAR_FAILURE:
      newState.loading = false
      break
    default:
      break
  }
  return newState
}

export default userProfile
