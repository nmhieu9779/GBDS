import {URL_EDIT_AVATAR, URL_UPLOAD_IMAGE} from "@src/constant/url"
import {upload, patchToken, postToken} from "@src/redux/sever"

function* uploadImage(formData) {
  const url = URL_UPLOAD_IMAGE
  const body = formData
  return yield upload({url, body})
}

function* uploadAvatar({avatarImageUrl, email}) {
  const url = URL_EDIT_AVATAR
  const body = {avatarImageUrl: avatarImageUrl, email: email}
  return yield postToken({url, body})
}

function* editAvatar({avatarImageUrl, email}) {
  const url = URL_EDIT_AVATAR
  const body = {avatarImageUrl: avatarImageUrl, email: email}
  return yield patchToken({url, body})
}

export const Api = {uploadImage, uploadAvatar, editAvatar}
