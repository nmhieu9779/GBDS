import {URL_GET_USER_PROFILE, URL_GET_URI_AVATAR} from "@src/constant/url"
import {get} from "@src/redux/sever"
import {formatUriImage} from "@src/utilities/image"

function* getUserProfile(email) {
  const url = URL_GET_USER_PROFILE
  const params = {email: email}
  return yield get({url, params})
}

function* getUriAvatar(email) {
  const url = URL_GET_URI_AVATAR
  const params = {email: email}
  return yield get({url, params})
}

export const Api = {getUserProfile, getUriAvatar}
