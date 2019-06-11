import {URL_GET_USER_PROFILE, URL_GET_URI_AVATAR} from "@src/constant/url"
import {get} from "@src/redux/server"

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
