import {
  GET_USER_PROFILE,
  GET_USER_PROFILE_SUCCESS,
  GET_USER_PROFILE_FAILURE,
  GET_URI_AVATAR,
  GET_URI_AVATAR_SUCCESS,
  GET_URI_AVATAR_FAILURE
} from "@src/redux/actions"

export const onGetUserProfile = ({email}) => ({type: GET_USER_PROFILE, email})

export const onGetUserProfileSuccess = (payload) => ({
  type: GET_USER_PROFILE_SUCCESS,
  payload
})

export const onGetUserProfileFailure = () => ({type: GET_USER_PROFILE_FAILURE})

export const onGetUriAvatar = ({email}) => ({type: GET_URI_AVATAR, email})

export const onGetUriAvatarSuccess = ({uri}) => ({
  type: GET_URI_AVATAR_SUCCESS,
  uri: uri
})

export const onGetUriAvatarFailure = () => ({type: GET_URI_AVATAR_FAILURE})
