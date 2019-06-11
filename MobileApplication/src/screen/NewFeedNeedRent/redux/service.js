import {URL_GET_NEW_FEED_POST_NEED_RENT} from "@src/constant/url"
import {post} from "@src/redux/server"

function* fetchPostNeedRent(param) {
  const url = URL_GET_NEW_FEED_POST_NEED_RENT
  const params = {page: param.page, size: param.size}
  const body = {}
  return yield post({url, params, body})
}

export {fetchPostNeedRent}
