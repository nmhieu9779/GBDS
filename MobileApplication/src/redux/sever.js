import AsyncStorage from "@react-native-community/async-storage"
const axios = require("axios")

const loadAccessToken = async () => {
  let res = await AsyncStorage.getItem("USER_OAUTH")
  return (res && JSON.parse(res)) || null
}

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

export {post, get}
