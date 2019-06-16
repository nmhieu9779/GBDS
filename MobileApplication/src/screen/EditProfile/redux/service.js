import {URL_EDIT_PROFILE, URL_UPLOAD_IMAGE, URL_CHANGE_PASSWORD} from "@src/constant/url"
import {upload, patchToken, postToken} from "@src/redux/server"

function* uploadImage(formData) {
  const url = URL_UPLOAD_IMAGE
  const body = formData
  return yield upload({url, body})
}

function* editProfile(params) {
  const url = URL_EDIT_PROFILE
  const body = params.body
  if (params.isCreate) {
    return yield postToken({url, body})
  } else {
    return yield patchToken({url, body})
  }
}

function* changePassword(params) {
  const url = URL_CHANGE_PASSWORD
  const body = params
  return yield patchToken({url, body})
}
export {uploadImage, editProfile, changePassword}
