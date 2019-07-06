const axios = require("axios")
import {asyncStorage} from "@src/utilities"
const base64 = require("base-64")
const TIME_OUT = 30000

const API = axios.create({
  timeout: TIME_OUT,
  headers: {"Content-Type": "application/json"}
})

const GET = async ({url, basic, bearer, params}) => {
  let userOauth = await asyncStorage.getItemAsyncStorage("USER_OAUTH")
  let config = {}
  if (basic || bearer) {
    config = {
      ...config,
      headers: {
        Authorization: basic
          ? `Basic ${base64.encode("T-GRRE-CLIENT-MM-01:tgrreclientmm01")}`
          : `Bearer ${userOauth.accessToken}`
      }
    }
  }
  if (params) {
    config = {...config, params: params}
  }

  return await API.get(url, config)
    .then((response) => response)
    .catch((error) => error)
}

const POST = async ({url, basic, bearer, params, body}) => {
  let userOauth = await asyncStorage.getItemAsyncStorage("USER_OAUTH")
  let config = {}
  if (basic || bearer) {
    config = {
      ...config,
      headers: {
        Authorization: basic
          ? `Basic ${base64.encode("T-GRRE-CLIENT-MM-01:tgrreclientmm01")}`
          : `Bearer ${userOauth.accessToken}`
      }
    }
  }
  if (params) {
    config = {...config, params: params}
  }

  return await API.post(url, body, config)
    .then((response) => response)
    .catch((error) => error)
}

const PATCH = async ({url, basic, bearer, params, body}) => {
  let userOauth = await asyncStorage.getItemAsyncStorage("USER_OAUTH")
  let config = {}
  if (basic || bearer) {
    config = {
      ...config,
      headers: {
        Authorization: basic
          ? `Basic ${base64.encode("T-GRRE-CLIENT-MM-01:tgrreclientmm01")}`
          : `Bearer ${userOauth.accessToken}`
      }
    }
  }
  if (params) {
    config = {...config, params: params}
  }

  return await API.patch(url, body, config)
    .then((response) => response)
    .catch((error) => error)
}

const DELETE = async ({url, basic, bearer, params}) => {
  let userOauth = await asyncStorage.getItemAsyncStorage("USER_OAUTH")
  let config = {}
  if (basic || bearer) {
    config = {
      ...config,
      headers: {
        Authorization: basic
          ? `Basic ${base64.encode("T-GRRE-CLIENT-MM-01:tgrreclientmm01")}`
          : `Bearer ${userOauth.accessToken}`
      }
    }
  }
  if (params) {
    config = {...config, params: params}
  }

  return await API.delete(url, config)
    .then((response) => response)
    .catch((error) => error)
}

const UPLOAD = async ({url, basic, bearer, params, body}) => {
  let userOauth = await asyncStorage.getItemAsyncStorage("USER_OAUTH")
  let config = {}
  if (basic || bearer) {
    config = {
      ...config,
      headers: {
        Authorization: basic
          ? `Basic ${base64.encode("T-GRRE-CLIENT-MM-01:tgrreclientmm01")}`
          : `Bearer ${userOauth.accessToken}`,
        "Content-Type": "multipart/form-data"
      }
    }
  }
  if (params) {
    config = {...config, params: params}
  }
  return await axios
    .post(url, body, config)
    .then((response) => response)
    .catch((error) => error)
}

export {UPLOAD, GET, POST, PATCH, DELETE}
