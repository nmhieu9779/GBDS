const axios = require("axios")
import {asyncStorage} from "@src/utilities"

const get = async ({url, params, auth}) => {
  return await axios
    .get(url, {auth: auth, params: params})
    .then((response) => response)
    .catch((error) => error)
}

const post = async ({url, auth, params, body}) => {
  return await axios
    .post(url, body, {
      auth: auth,
      params: params
    })
    .then((response) => response)
    .catch((error) => error)
}

const patch = async ({url}) => {
  return await axios
    .patch(url)
    .then((response) => response)
    .catch((error) => error)
}

const postToken = async ({url, params, body}) => {
  let userOauth = await asyncStorage.getItemAsyncStorage("USER_OAUTH")
  return await axios
    .post(url, body, {
      params: params,
      headers: {
        Authorization: `Bearer ${userOauth.accessToken}`,
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
    .then((response) => response)
    .catch((error) => error)
}

const patchToken = async ({url, params, body}) => {
  let userOauth = await asyncStorage.getItemAsyncStorage("USER_OAUTH")
  return await axios
    .patch(url, body, {
      params: params,
      headers: {
        Authorization: `Bearer ${userOauth.accessToken}`
      }
    })
    .then((response) => response)
    .catch((error) => error)
}

const upload = async ({url, body}) => {
  let userOauth = await asyncStorage.getItemAsyncStorage("USER_OAUTH")
  return await axios
    .post(url, body, {
      headers: {
        Authorization: `Bearer ${userOauth.accessToken}`,
        Accept: "application/json",
        "Content-Type": "multipart/form-data"
      }
    })
    .then((response) => response)
    .catch((error) => error)
}

const deleteToken = async ({url}) => {
  let userOauth = await asyncStorage.getItemAsyncStorage("USER_OAUTH")
  return await axios
    .delete(url, {
      headers: {
        Authorization: `Bearer ${userOauth.accessToken}`
      }
    })
    .then((response) => response)
    .catch((error) => error)
}

export {post, get, upload, patchToken, postToken, patch, deleteToken}
