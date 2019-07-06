import {URL_GET_NEW_FEED_POST_FOR_RENT} from "@src/constant/url"
import {POST} from "@src/redux/server"

const newFeedForRentService = {
  fetchPostForRent: async (param) => {
    const url = URL_GET_NEW_FEED_POST_FOR_RENT
    const params = {page: param.page, size: param.size}
    const body = param.body || {}
    return await POST({url, params, body})
  }
}

export default newFeedForRentService
