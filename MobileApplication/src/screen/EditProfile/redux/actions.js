import {
  UPLOAD_IMAGE,
  UPLOAD_IMAGE_SUCCESS,
  UPLOAD_IMAGE_FAILURE,
  UPLOAD_AVATAR,
  UPLOAD_AVATAR_SUCCESS,
  UPLOAD_AVATAR_FAILURE,
  EDIT_AVATAR,
  EDIT_AVATAR_SUCCESS,
  EDIT_AVATAR_FAILURE,
  EDIT_PROFILE,
  EDIT_PROFILE_SUCCESS,
  EDIT_PROFILE_FAILURE
} from "@src/redux/actions"

export const onUploadImage = (data) => ({type: UPLOAD_IMAGE, data: data})

export const onUploadImageSuccess = ({uri}) => ({type: UPLOAD_IMAGE_SUCCESS, uri: uri})

export const onUploadImageFailure = () => ({type: UPLOAD_IMAGE_FAILURE})

export const onUploadAvatar = (data) => ({type: UPLOAD_AVATAR, data: data})

export const onUploadAvatarSuccess = () => ({type: UPLOAD_AVATAR_SUCCESS})

export const onUploadAvatarFailure = () => ({type: UPLOAD_AVATAR_FAILURE})

export const onEditAvatar = (data) => ({type: EDIT_AVATAR, data: data})

export const onEditAvatarSuccess = () => ({type: EDIT_AVATAR_SUCCESS})

export const onEditAvatarFailure = () => ({type: EDIT_AVATAR_FAILURE})

export const onEditProfile = (data) => ({type: EDIT_PROFILE, data: data})

export const onEditProfileSuccess = () => ({type: EDIT_PROFILE_SUCCESS})

export const onEditProfileFailure = () => ({type: EDIT_PROFILE_FAILURE})
