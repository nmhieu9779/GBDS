import {UPLOAD_AVATAR, UPLOAD_AVATAR_SUCCESS, UPLOAD_AVATAR_FAILURE} from "@src/redux/actions"

export const onUploadAvatar = (data) => ({type: UPLOAD_AVATAR, data: data})

export const onUploadAvatarSuccess = (uri) => ({type: UPLOAD_AVATAR_SUCCESS, uri: uri})

export const onUploadAvatarFailure = () => ({type: UPLOAD_AVATAR_FAILURE})
