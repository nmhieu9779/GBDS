import {URL_POST_NEED_BUY, URL_POST_NEED_RENT} from "@src/constant/url"
import {POST, PATCH} from "@src/redux/server"

const needNewPostService = {
  postNeed: async (params) => {
    let url = params.type === "BUY" ? URL_POST_NEED_BUY : URL_POST_NEED_RENT
    const body = params.body
    return params.isNew ? await POST({url, body, bearer: true}) : await PATCH({url, body, bearer: true})
  }
}

export default needNewPostService
