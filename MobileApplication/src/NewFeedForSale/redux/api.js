const axios = require("axios")

function* fetchPostForSaleHome() {
  return yield axios
    .get("http://www.mocky.io/v2/5cefca81300000ce953cd329")
    .then((response) => response)
    .catch((error) => error)
}

export const Api = {fetchPostForSaleHome}
