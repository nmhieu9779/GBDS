import {URL_GET_NEW_FEED_POST_NEED_BUY} from "@src/constant/url"
import {POST} from "@src/redux/server"

const newFeedNeedBuyService = {
  fetchPostNeedBuy: async (param) => {
    const url = URL_GET_NEW_FEED_POST_NEED_BUY
    const params = {page: param.page, size: param.size}
    const body = param.body || {}
    return await POST({url, params, body})
  }
}

export default newFeedNeedBuyService
