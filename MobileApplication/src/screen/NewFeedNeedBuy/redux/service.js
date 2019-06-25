import {URL_GET_NEW_FEED_POST_NEED_BUY} from "@src/constant/url"
import {post} from "@src/redux/server"

function* fetchPostNeedBuy(param) {
  const url = URL_GET_NEW_FEED_POST_NEED_BUY
  const params = {page: param.page, size: param.size}
  const body = param.body || {}
  return yield post({url, params, body})
}

export {fetchPostNeedBuy}
