import {URL_GET_USER_PROFILE} from "@src/constant/url"
import {get} from "@src/redux/sever"

function* getUserProfile(email) {
  const url = URL_GET_USER_PROFILE
  const params = {email: email}
  return yield get({url, params})
}

export const Api = {getUserProfile}
