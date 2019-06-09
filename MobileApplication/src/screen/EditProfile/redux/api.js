import {URL_UPLOAD_AVATAR} from "@src/constant/url"
import {uploadAvatar} from "@src/redux/sever"

function* editAvatarProfile(formData) {
  const url = URL_UPLOAD_AVATAR
  const body = formData
  return yield uploadAvatar({url, body})
}

export const Api = {editAvatarProfile}
