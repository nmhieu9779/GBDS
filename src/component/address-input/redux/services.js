import {URL_GET_CITY, URL_GET_DISTRICT, URL_GET_WARD, URL_GET_STREET} from "@src/constant/url"
import {GET} from "@src/redux/server"

const addressServices = {
  getCity: async () => {
    const url = URL_GET_CITY
    return await GET({url})
  },
  getDistrict: async (params) => {
    const url = `${URL_GET_DISTRICT}/${params.cityId}`
    return await GET({url})
  },
  getWard: async (params) => {
    const url = `${URL_GET_WARD}/${params.cityId}/${params.districtId}`
    return await GET({url})
  },
  getStreet: async (params) => {
    const url = `${URL_GET_STREET}/${params.cityId}/${params.districtId}`
    return await GET({url})
  }
}

export default addressServices
