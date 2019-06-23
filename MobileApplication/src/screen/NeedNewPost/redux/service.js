import {URL_POST_NEED_BUY, URL_POST_NEED_RENT} from "@src/constant/url"
import {postToken, patchToken} from "@src/redux/server"

function* postNeed(params) {
  let url = params.type === "BUY" ? URL_POST_NEED_BUY : URL_POST_NEED_RENT
  const body = params.body
  return params.isNew ? yield postToken({url, body}) : yield patchToken({url, body})
}

export {postNeed}
