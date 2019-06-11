import {URL_GET_NEW_FEED_POST_FOR_SALE} from "@src/constant/url"
import {post} from "@src/redux/sever"

function* fetchPostForSale(param) {
  const url = URL_GET_NEW_FEED_POST_FOR_SALE
  const params = {page: param.page, size: param.size}
  const body = {}
  return yield post({url, params, body})
}

export {fetchPostForSale}
