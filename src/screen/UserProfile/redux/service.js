import {
  URL_GET_USER_PROFILE,
  URL_GET_URI_AVATAR,
  URL_COUNT_NOTI,
  URL_GET_ALL_POST_USER
} from "@src/constant/url"
import {GET, POST} from "@src/redux/server"

const userProfileService = {
  getUserProfile: async (param) => {
    const url = URL_GET_USER_PROFILE
    const params = {email: param.email}
    return await GET({url, params})
  },
  getUriAvatar: async (param) => {
    const url = URL_GET_URI_AVATAR
    const params = {email: param.email}
    return await GET({url, params})
  },
  countNoti: async (param) => {
    const url = URL_COUNT_NOTI
    const params = {user: param.email, read: false}
    return await GET({url, params, bearer: true})
  },
  getPostUserProfile: async (param) => {
    const url = URL_GET_ALL_POST_USER
    const params = {page: param.page, size: param.size}
    const body = param.body || {}
    return await POST({url, params, body})
  }
}

export default userProfileService
