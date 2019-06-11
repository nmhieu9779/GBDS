import {URL_GET_CITY, URL_GET_DISTRICT, URL_GET_WARD, URL_GET_STREET} from "@src/constant/url"
import {get} from "@src/redux/server"

function* getCity() {
  const url = URL_GET_CITY
  return yield get({url})
}

function* getDistrict(params) {
  const url = `${URL_GET_DISTRICT}/${params.cityId}`
  return yield get({url})
}

function* getWard(params) {
  const url = `${URL_GET_WARD}/${params.cityId}/${params.districtId}`
  return yield get({url})
}

function* getStreet(params) {
  const url = `${URL_GET_STREET}/${params.cityId}/${params.districtId}`
  return yield get({url})
}

export {getCity, getDistrict, getWard, getStreet}
