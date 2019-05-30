const axios = require("axios")

function* fetchPostForRentHome() {
  return yield axios
    .get("http://www.mocky.io/v2/5ce98b983300003332525d8c")
    .then((response) => response)
    .catch((error) => error)
}

export const Api = {fetchPostForRentHome}
