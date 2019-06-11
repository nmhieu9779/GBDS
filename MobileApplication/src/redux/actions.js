const ACTION_SIGN_IN = `[AUTH] SIGN_IN`
const signIn = (params) => ({type: ACTION_SIGN_IN, params})

const ACTION_SIGN_IN_SUCCESS = `[AUTH] SIGN_IN_SUCCESS`
const signInSuccess = (response) => ({type: ACTION_SIGN_IN_SUCCESS, response})

const ACTION_SIGN_IN_FAILURE = `[AUTH] SIGN_IN_FAILURE`
const signInFailure = (error) => ({type: ACTION_SIGN_IN_FAILURE, error})

const ACTION_SIGN_UP = `[AUTH] SIGN_UP`
const signUp = (params) => ({type: ACTION_SIGN_UP, params})

const ACTION_SIGN_UP_SUCCESS = `[AUTH] SIGN_UP_SUCCESS`
const signUpSuccess = (response) => ({type: ACTION_SIGN_UP_SUCCESS, response})

const ACTION_SIGN_UP_FAILURE = `[AUTH] SIGN_UP_FAILURE`
const signUpFailure = (error) => ({type: ACTION_SIGN_UP_FAILURE, error})

const ACTION_GET_CITY = `[ADDRESS] GET_CITY`
const getCity = (params) => ({type: ACTION_GET_CITY, params})

const ACTION_GET_CITY_SUCCESS = `[ADDRESS] GET_CITY_SUCCESS`
const getCitySuccess = (response) => ({type: ACTION_GET_CITY_SUCCESS, response})

const ACTION_GET_CITY_FAILURE = `[ADDRESS] GET_CITY_FAILURE`
const getCityFailure = (error) => ({type: ACTION_GET_CITY_FAILURE, error})

const ACTION_GET_DISTRICT = `[ADDRESS] GET_DISTRICT`
const getDistrict = (params) => ({type: ACTION_GET_DISTRICT, params})

const ACTION_GET_DISTRICT_SUCCESS = `[ADDRESS] GET_DISTRICT_SUCCESS`
const getDistrictSuccess = (response) => ({type: ACTION_GET_DISTRICT_SUCCESS, response})

const ACTION_GET_DISTRICT_FAILURE = `[ADDRESS] GET_DISTRICT_FAILURE`
const getDistrictFailure = (error) => ({type: ACTION_GET_DISTRICT_FAILURE, error})

const ACTION_GET_WARD = `[ADDRESS] GET_WARD`
const getWard = (params) => ({type: ACTION_GET_WARD, params})

const ACTION_GET_WARD_SUCCESS = `[ADDRESS] GET_WARD_SUCCESS`
const getWardSuccess = (response) => ({type: ACTION_GET_WARD_SUCCESS, response})

const ACTION_GET_WARD_FAILURE = `[ADDRESS] GET_WARD_FAILURE`
const getWardFailure = (error) => ({type: ACTION_GET_WARD_FAILURE, error})

const ACTION_GET_STREET = `[ADDRESS] GET_STREET`
const getStreet = (params) => ({type: ACTION_GET_STREET, params})

const ACTION_GET_STREET_SUCCESS = `[ADDRESS] GET_STREET_SUCCESS`
const getStreetSuccess = (response) => ({type: ACTION_GET_STREET_SUCCESS, response})

const ACTION_GET_STREET_FAILURE = `[ADDRESS] GET_STREET_FAILURE`
const getStreetFailure = (error) => ({type: ACTION_GET_STREET_FAILURE, error})

const ACTION_GET_PRODUCT_TYPE = `[TYPE_PRODUCT] GET_PRODUCT_TYPE`
const getProductType = () => ({type: ACTION_GET_PRODUCT_TYPE})

const ACTION_GET_PRODUCT_CATE = `[TYPE_PRODUCT] GET_PRODUCT_CATE`
const getProductCate = (params) => ({type: ACTION_GET_PRODUCT_CATE, params})

const ACTION_GET_PRICE_UNIT = `[TYPE_PRODUCT] GET_PRICE_UNIT`
const getPriceUnit = (params) => ({type: ACTION_GET_PRICE_UNIT, params})

const ACTION_GET_AREA = `[TYPE_PRODUCT] GET_AREA`
const getArea = () => ({type: ACTION_GET_AREA})

const ACTION_GET_PRICE = `[TYPE_PRODUCT] GET_PRICE`
const getPrice = (params) => ({type: ACTION_GET_PRICE, params})

const ACTION_OPEN_SELECT_TYPE_POST = `[TYPE_POST] OPEN_SELECT_TYPE_POST`
const openSelectTypePost = () => ({type: ACTION_OPEN_SELECT_TYPE_POST})

const ACTION_CLOSE_SELECT_TYPE_POST = `[TYPE_POST] CLOSE_SELECT_TYPE_POST`
const closeSelectTypePost = () => ({type: ACTION_CLOSE_SELECT_TYPE_POST})

const ACTION_FETCH_POST_FOR_SALE = `[NEW_FEED_FOR_SALE] FETCH_POST_FOR_SALE`
const fetchPostForSale = (params) => ({type: ACTION_FETCH_POST_FOR_SALE, params})

const ACTION_FETCH_POST_FOR_SALE_SUCCESS = `[NEW_FEED_FOR_SALE] FETCH_POST_FOR_SALE_SUCCESS`
const fetchPostForSaleSuccess = (response) => ({type: ACTION_FETCH_POST_FOR_SALE_SUCCESS, response})

const ACTION_FETCH_MORE_POST_FOR_SALE_SUCCESS = `[NEW_FEED_FOR_SALE] FETCH_MORE_POST_FOR_SALE_SUCCESS`
const fetchMorePostForSaleSuccess = (response) => ({type: ACTION_FETCH_MORE_POST_FOR_SALE_SUCCESS, response})

const ACTION_FETCH_POST_FOR_SALE_FAILURE = `[NEW_FEED_FOR_SALE] FETCH_POST_FOR_SALE_FAILURE`
const fetchPostForSaleFailure = (error) => ({type: ACTION_FETCH_POST_FOR_SALE_FAILURE, error})

const ACTION_FETCH_POST_FOR_RENT = `[NEW_FEED_FOR_RENT] FETCH_POST_FOR_RENT`
const fetchPostForRent = (params) => ({type: ACTION_FETCH_POST_FOR_RENT, params})

const ACTION_FETCH_POST_FOR_RENT_SUCCESS = `[NEW_FEED_FOR_RENT] FETCH_POST_FOR_RENT_SUCCESS`
const fetchPostForRentSuccess = (response) => ({type: ACTION_FETCH_POST_FOR_RENT_SUCCESS, response})

const ACTION_FETCH_MORE_POST_FOR_RENT_SUCCESS = `[NEW_FEED_FOR_RENT] FETCH_MORE_POST_FOR_RENT_SUCCESS`
const fetchMorePostForRentSuccess = (response) => ({type: ACTION_FETCH_MORE_POST_FOR_RENT_SUCCESS, response})

const ACTION_FETCH_POST_FOR_RENT_FAILURE = `[NEW_FEED_FOR_RENT] FETCH_POST_FOR_RENT_FAILURE`
const fetchPostForRentFailure = (error) => ({type: ACTION_FETCH_POST_FOR_RENT_FAILURE, error})

export const FETCH_POST_NEED_SALE_HOME = `FETCH_POST_NEED_SALE_HOME`
export const FETCH_POST_NEED_SALE_HOME_SUCCESS = `FETCH_POST_NEED_SALE_HOME_SUCCESS`
export const FETCH_POST_NEED_SALE_HOME_FAILURE = `FETCH_POST_NEED_SALE_HOME_FAILURE`

export const FETCH_POST_NEED_RENT_HOME = `FETCH_POST_NEED_RENT_HOME`
export const FETCH_POST_NEED_RENT_HOME_SUCCESS = `FETCH_POST_NEED_RENT_HOME_SUCCESS`
export const FETCH_POST_NEED_RENT_HOME_FAILURE = `FETCH_POST_NEED_RENT_HOME_FAILURE`

export const GET_USER_PROFILE = `GET_USER_PROFILE`
export const GET_USER_PROFILE_SUCCESS = `GET_USER_PROFILE_SUCCESS`
export const GET_USER_PROFILE_FAILURE = `GET_USER_PROFILE_FAILURE`

export const SHOW_MESSAGE = `SHOW_MESSAGE`
export const UN_SHOW_MESSAGE = `UN_SHOW_MESSAGE`

export const UPLOAD_IMAGE = `UPLOAD_IMAGE`
export const UPLOAD_IMAGE_SUCCESS = `UPLOAD_IMAGE_SUCCESS`
export const UPLOAD_IMAGE_FAILURE = `UPLOAD_IMAGE_FAILURE`

export const UPLOAD_AVATAR = `UPLOAD_AVATAR`
export const UPLOAD_AVATAR_SUCCESS = `UPLOAD_AVATAR_SUCCESS`
export const UPLOAD_AVATAR_FAILURE = `UPLOAD_AVATAR_FAILURE`

export const EDIT_AVATAR = `EDIT_AVATAR`
export const EDIT_AVATAR_SUCCESS = `EDIT_AVATAR_SUCCESS`
export const EDIT_AVATAR_FAILURE = `EDIT_AVATAR_FAILURE`

export const GET_URI_AVATAR = `GET_URI_AVATAR`
export const GET_URI_AVATAR_SUCCESS = `GET_URI_AVATAR_SUCCESS`
export const GET_URI_AVATAR_FAILURE = `GET_URI_AVATAR_FAILURE`

export const EDIT_PROFILE = `EDIT_PROFILE`
export const EDIT_PROFILE_SUCCESS = `EDIT_PROFILE_SUCCESS`
export const EDIT_PROFILE_FAILURE = `EDIT_PROFILE_FAILURE`

export {
  //SignIn
  ACTION_SIGN_IN,
  ACTION_SIGN_IN_SUCCESS,
  ACTION_SIGN_IN_FAILURE,
  signIn,
  signInSuccess,
  signInFailure,
  //SignUp
  ACTION_SIGN_UP,
  ACTION_SIGN_UP_SUCCESS,
  ACTION_SIGN_UP_FAILURE,
  signUp,
  signUpSuccess,
  signUpFailure,
  //Address
  ACTION_GET_CITY,
  ACTION_GET_CITY_SUCCESS,
  ACTION_GET_CITY_FAILURE,
  getCity,
  getCitySuccess,
  getCityFailure,
  ACTION_GET_DISTRICT,
  ACTION_GET_DISTRICT_SUCCESS,
  ACTION_GET_DISTRICT_FAILURE,
  getDistrict,
  getDistrictSuccess,
  getDistrictFailure,
  ACTION_GET_WARD,
  ACTION_GET_WARD_SUCCESS,
  ACTION_GET_WARD_FAILURE,
  getWard,
  getWardSuccess,
  getWardFailure,
  ACTION_GET_STREET,
  ACTION_GET_STREET_SUCCESS,
  ACTION_GET_STREET_FAILURE,
  getStreet,
  getStreetSuccess,
  getStreetFailure,
  //Type Product
  ACTION_GET_PRODUCT_TYPE,
  getProductType,
  ACTION_GET_PRODUCT_CATE,
  getProductCate,
  ACTION_GET_PRICE_UNIT,
  getPriceUnit,
  ACTION_GET_AREA,
  getArea,
  ACTION_GET_PRICE,
  getPrice,
  //Select Type Post
  ACTION_OPEN_SELECT_TYPE_POST,
  openSelectTypePost,
  ACTION_CLOSE_SELECT_TYPE_POST,
  closeSelectTypePost,
  //Fetch Post For Sale
  ACTION_FETCH_POST_FOR_SALE,
  ACTION_FETCH_POST_FOR_SALE_SUCCESS,
  ACTION_FETCH_POST_FOR_SALE_FAILURE,
  ACTION_FETCH_MORE_POST_FOR_SALE_SUCCESS,
  fetchPostForSale,
  fetchPostForSaleSuccess,
  fetchPostForSaleFailure,
  fetchMorePostForSaleSuccess,
  //Fetch Post For Rent
  ACTION_FETCH_POST_FOR_RENT,
  ACTION_FETCH_POST_FOR_RENT_SUCCESS,
  ACTION_FETCH_POST_FOR_RENT_FAILURE,
  ACTION_FETCH_MORE_POST_FOR_RENT_SUCCESS,
  fetchPostForRent,
  fetchPostForRentSuccess,
  fetchPostForRentFailure,
  fetchMorePostForRentSuccess
}
