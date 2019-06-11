import {URL_GET_NEW_FEED_POST_FOR_RENT} from "@src/constant/url"
import {post} from "@src/redux/server"

function* fetchPostForRent(param) {
  const url = URL_GET_NEW_FEED_POST_FOR_RENT
  const params = {page: param.page, size: param.size}
  const body = {}
  return yield post({url, params, body})
}

export {fetchPostForRent}
