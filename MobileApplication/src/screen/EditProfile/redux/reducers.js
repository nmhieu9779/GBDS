import {fromJS} from "immutable"
import {UPLOAD_AVATAR, UPLOAD_AVATAR_SUCCESS, UPLOAD_AVATAR_FAILURE} from "@src/redux/actions"

initStateEditProfile = {
  loading: false,
  avatarImageUrl: ""
}

const editProfile = (state = initStateEditProfile, action) => {
  let newState = fromJS(state).toJS()
  switch (action.type) {
    case UPLOAD_AVATAR:
      newState.loading = true
      newState.avatarImageUrl = ""
      break
    case UPLOAD_AVATAR_SUCCESS:
      newState.avatarImageUrl = action.uri
      newState.loading = false
      break
    case UPLOAD_AVATAR_FAILURE:
      newState.loading = false
      break
    default:
      break
  }
  return newState
}

export default editProfile
