const axios = require("axios")

function* fetchPostForSaleHome() {
  return yield axios
    .get("http://www.mocky.io/v2/5ce989663300002132525d85")
    .then(response => response)
    .catch(error => error)
}

function* fetchPostForRentHome() {
  return yield axios
    .get("http://www.mocky.io/v2/5ce98b983300003332525d8c")
    .then(response => response)
    .catch(error => error)
}

export const Api = { fetchPostForSaleHome, fetchPostForRentHome }
