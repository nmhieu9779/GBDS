import {fromJS} from "immutable"
import {
  UPLOAD_IMAGE,
  UPLOAD_IMAGE_SUCCESS,
  UPLOAD_IMAGE_FAILURE,
  UPLOAD_AVATAR,
  UPLOAD_AVATAR_SUCCESS,
  UPLOAD_AVATAR_FAILURE,
  EDIT_AVATAR,
  EDIT_AVATAR_SUCCESS,
  EDIT_AVATAR_FAILURE
} from "@src/redux/actions"

initStateEditProfile = {
  loading: false,
  avatarImageUrl: null
}

const editProfile = (state = initStateEditProfile, action) => {
  let newState = fromJS(state).toJS()
  switch (action.type) {
    case UPLOAD_IMAGE:
      newState.loading = true
      newState.avatarImageUrl = null
      break
    case UPLOAD_IMAGE_SUCCESS:
      newState.loading = false
      newState.avatarImageUrl = action.uri
      break
    case UPLOAD_IMAGE_FAILURE:
      newState.loading = false
      break
    case UPLOAD_AVATAR:
      newState.loading = true
      break
    case UPLOAD_AVATAR_SUCCESS:
      newState.loading = false
      break
    case UPLOAD_AVATAR_FAILURE:
      newState.loading = false
      break
    case EDIT_AVATAR:
      newState.loading = true
      break
    case EDIT_AVATAR_SUCCESS:
      newState.loading = false
      break
    case EDIT_AVATAR_FAILURE:
      newState.loading = false
      break
    default:
      break
  }
  return newState
}

export default editProfile
