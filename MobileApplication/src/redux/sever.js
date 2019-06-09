const axios = require("axios")
import {getItemAsyncStorage} from "@src/utilities/asyncStorage"

const get = async ({url, params}) => {
  return await axios
    .get(url, {params})
    .then((response) => response)
    .catch((error) => error)
}

const post = async ({url, auth, params, body}) => {
  return await axios
    .post(
      url,
      {...body},
      {
        auth: {...auth},
        params: {...params}
      }
    )
    .then((response) => response)
    .catch((error) => error)
}

const uploadAvatar = async ({url, body}) => {
  let userOauth = await getItemAsyncStorage("USER_OAUTH")
  return await axios
    .post(url, body, {
      headers: {
        Authorization: `bearer ${userOauth.accessToken}`,
        Accept: "application/json",
        "Content-Type": "multipart/form-data"
      }
    })
    .then((response) => response)
    .catch((error) => error)
}

export {post, get, uploadAvatar}
