const ACTION_SIGN_IN = `[AUTH] SIGN_IN`
const signIn = (params) => ({type: ACTION_SIGN_IN, params})

const ACTION_SIGN_IN_SUCCESS = `[AUTH] SIGN_IN_SUCCESS`
const signInSuccess = (response) => ({type: ACTION_SIGN_IN_SUCCESS, response})

const ACTION_SIGN_IN_FAILURE = `[AUTH] SIGN_IN_FAILURE`
const signInFailure = (error) => ({type: ACTION_SIGN_IN_FAILURE, error})

const ACTION_RESET_SIGN_IN = `[AUTH] RESET_SIGN_IN`
const resetSignIn = () => ({type: ACTION_RESET_SIGN_IN})

const ACTION_GET_INFO_SIGN_IN = `[AUTH] GET_INFO_SIGN_IN`
const getInfoSignIn = (params) => ({type: ACTION_GET_INFO_SIGN_IN, params})

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

const ACTION_FETCH_POST_NEED_BUY = `[NEW_FEED_NEED_BUY] FETCH_POST_NEED_BUY`
const fetchPostNeedBuy = (params) => ({type: ACTION_FETCH_POST_NEED_BUY, params})

const ACTION_FETCH_POST_NEED_BUY_SUCCESS = `[NEW_FEED_NEED_BUY] FETCH_POST_NEED_BUY_SUCCESS`
const fetchPostNeedBuySuccess = (response) => ({type: ACTION_FETCH_POST_NEED_BUY_SUCCESS, response})

const ACTION_FETCH_MORE_POST_NEED_BUY_SUCCESS = `[NEW_FEED_NEED_BUY] FETCH_MORE_POST_NEED_BUY_SUCCESS`
const fetchMorePostNeedBuySuccess = (response) => ({type: ACTION_FETCH_MORE_POST_NEED_BUY_SUCCESS, response})

const ACTION_FETCH_POST_NEED_BUY_FAILURE = `[NEW_FEED_NEED_BUY] FETCH_POST_NEED_BUY_FAILURE`
const fetchPostNeedBuyFailure = (error) => ({type: ACTION_FETCH_POST_NEED_BUY_FAILURE, error})

const ACTION_FETCH_POST_NEED_RENT = `[NEW_FEED_NEED_RENT] FETCH_POST_NEED_RENT`
const fetchPostNeedRent = (params) => ({type: ACTION_FETCH_POST_NEED_RENT, params})

const ACTION_FETCH_POST_NEED_RENT_SUCCESS = `[NEW_FEED_NEED_RENT] FETCH_POST_NEED_RENT_SUCCESS`
const fetchPostNeedRentSuccess = (response) => ({type: ACTION_FETCH_POST_NEED_RENT_SUCCESS, response})

const ACTION_FETCH_MORE_POST_NEED_RENT_SUCCESS = `[NEW_FEED_NEED_RENT] FETCH_MORE_POST_NEED_RENT_SUCCESS`
const fetchMorePostNeedRentSuccess = (response) => ({
  type: ACTION_FETCH_MORE_POST_NEED_RENT_SUCCESS,
  response
})

const ACTION_FETCH_POST_NEED_RENT_FAILURE = `[NEW_FEED_NEED_RENT] FETCH_POST_NEED_RENT_FAILURE`
const fetchPostNeedRentFailure = (error) => ({type: ACTION_FETCH_POST_NEED_RENT_FAILURE, error})

const ACTION_GET_USER_PROFILE = `[USER_PROFILE] ACTION_GET_USER_PROFILE`
const getUserProfile = (params) => ({type: ACTION_GET_USER_PROFILE, params})

const ACTION_GET_USER_PROFILE_SUCCESS = `[USER_PROFILE] ACTION_GET_USER_PROFILE_SUCCESS`
const getUserProfileSuccess = (response) => ({type: ACTION_GET_USER_PROFILE_SUCCESS, response})

const ACTION_GET_USER_PROFILE_FAILURE = `[USER_PROFILE] ACTION_GET_USER_PROFILE_FAILURE`
const getUserProfileFailure = (error) => ({type: ACTION_GET_USER_PROFILE_FAILURE, error})

const ACTION_RESET_USER_PROFILE = `[USER_PROFILE] ACTION_RESET_USER_PROFILE`
const resetUserProfile = () => ({type: ACTION_RESET_USER_PROFILE})

const ACTION_GET_URI_AVATAR = `[USER_PROFILE] ACTION_GET_URI_AVATAR`
const getUriAvatar = (params) => ({type: ACTION_GET_URI_AVATAR, params})

const ACTION_GET_URI_AVATAR_SUCCESS = `[USER_PROFILE] ACTION_GET_URI_AVATAR_SUCCESS`
const getUriAvatarSuccess = (response) => ({type: ACTION_GET_URI_AVATAR_SUCCESS, response})

const ACTION_GET_URI_AVATAR_FAILURE = `[USER_PROFILE] ACTION_GET_URI_AVATAR_FAILURE`
const getUriAvatarFailure = (error) => ({type: ACTION_GET_URI_AVATAR_FAILURE, error})

const ACTION_RESET_URI_AVATAR = `[USER_PROFILE] ACTION_RESET_URI_AVATAR`
const resetUriAvatar = () => ({type: ACTION_RESET_URI_AVATAR})

const ACTION_UPLOAD_IMAGE = `[EDIT_PROFILE] UPLOAD_IMAGE`
const uploadImage = (params) => ({type: ACTION_UPLOAD_IMAGE, params})

const ACTION_UPLOAD_IMAGE_SUCCESS = `[EDIT_PROFILE] UPLOAD_IMAGE_SUCCESS`
const uploadImageSuccess = (response) => ({type: ACTION_UPLOAD_IMAGE_SUCCESS, response})

const ACTION_UPLOAD_IMAGE_FAILURE = `[EDIT_PROFILE] UPLOAD_IMAGE_FAILURE`
const uploadImageFailure = (error) => ({type: ACTION_UPLOAD_IMAGE_FAILURE, error})

const ACTION_RESET_UPLOAD_IMAGE = `[EDIT_PROFILE] RESET_UPLOAD_IMAGE`
const resetUploadImage = () => ({type: ACTION_RESET_UPLOAD_IMAGE})

const ACTION_EDIT_PROFILE = `[EDIT_PROFILE] EDIT_PROFILE`
const editProfile = (params) => ({type: ACTION_EDIT_PROFILE, params})

const ACTION_EDIT_PROFILE_SUCCESS = `[EDIT_PROFILE] EDIT_PROFILE_SUCCESS`
const editProfileSuccess = (response) => ({type: ACTION_EDIT_PROFILE_SUCCESS, response})

const ACTION_EDIT_PROFILE_FAILURE = `[EDIT_PROFILE] EDIT_PROFILE_FAILURE`
const editProfileFailure = (error) => ({type: ACTION_EDIT_PROFILE_FAILURE, error})

const ACTION_CHANGE_PASSWORD = `[EDIT_PROFILE] ACTION_CHANGE_PASSWORD`
const changePassword = (params) => ({type: ACTION_CHANGE_PASSWORD, params})

const ACTION_CHANGE_PASSWORD_SUCCESS = `[EDIT_PROFILE] ACTION_CHANGE_PASSWORD_SUCCESS`
const changePasswordSuccess = (response) => ({type: ACTION_CHANGE_PASSWORD_SUCCESS, response})

const ACTION_CHANGE_PASSWORD_FAILURE = `[EDIT_PROFILE] ACTION_CHANGE_PASSWORD_FAILURE`
const changePasswordFailure = (error) => ({type: ACTION_CHANGE_PASSWORD_FAILURE, error})

const ACTION_GET_DETAIL_POST = `[DETAIL POST] GET_DETAIL_POST`
const getDetailPost = (params) => ({type: ACTION_GET_DETAIL_POST, params})

const ACTION_GET_DETAIL_POST_SUCCESS = `[DETAIL POST] GET_DETAIL_POST_SUCCESS`
const getDetailPostSuccess = (response) => ({type: ACTION_GET_DETAIL_POST_SUCCESS, response})

const ACTION_GET_DETAIL_POST_FAILURE = `[DETAIL POST] GET_DETAIL_POST_FAILURE`
const getDetailPostFailure = (error) => ({type: ACTION_GET_DETAIL_POST_FAILURE, error})

const ACTION_INTERACTIVE_POST = `[DETAIL POST] INTERACTIVE`
const interactivePost = (params) => ({type: ACTION_INTERACTIVE_POST, params})

const ACTION_INTERACTIVE_POST_SUCCESS = `[DETAIL POST] INTERACTIVE_SUCCESS`
const interactivePostSuccess = (response) => ({type: ACTION_INTERACTIVE_POST_SUCCESS, response})

const ACTION_INTERACTIVE_POST_FAILURE = `[DETAIL POST] INTERACTIVE_FAILURE`
const interactivePostFailure = (error) => ({type: ACTION_INTERACTIVE_POST_FAILURE, error})

export const SHOW_MESSAGE = `SHOW_MESSAGE`
export const UN_SHOW_MESSAGE = `UN_SHOW_MESSAGE`

export {
  //SignIn
  ACTION_SIGN_IN,
  ACTION_SIGN_IN_SUCCESS,
  ACTION_SIGN_IN_FAILURE,
  ACTION_RESET_SIGN_IN,
  ACTION_GET_INFO_SIGN_IN,
  signIn,
  signInSuccess,
  signInFailure,
  resetSignIn,
  getInfoSignIn,
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
  fetchMorePostForRentSuccess,
  //Fetch Post Need Buy
  ACTION_FETCH_POST_NEED_BUY,
  ACTION_FETCH_POST_NEED_BUY_SUCCESS,
  ACTION_FETCH_POST_NEED_BUY_FAILURE,
  ACTION_FETCH_MORE_POST_NEED_BUY_SUCCESS,
  fetchPostNeedBuy,
  fetchPostNeedBuySuccess,
  fetchPostNeedBuyFailure,
  fetchMorePostNeedBuySuccess,
  //Fetch Post Need Rent
  ACTION_FETCH_POST_NEED_RENT,
  ACTION_FETCH_POST_NEED_RENT_SUCCESS,
  ACTION_FETCH_POST_NEED_RENT_FAILURE,
  ACTION_FETCH_MORE_POST_NEED_RENT_SUCCESS,
  fetchPostNeedRent,
  fetchPostNeedRentSuccess,
  fetchPostNeedRentFailure,
  fetchMorePostNeedRentSuccess,
  //User Profile
  ACTION_GET_USER_PROFILE,
  ACTION_GET_USER_PROFILE_SUCCESS,
  ACTION_GET_USER_PROFILE_FAILURE,
  ACTION_RESET_USER_PROFILE,
  getUserProfile,
  getUserProfileSuccess,
  getUserProfileFailure,
  resetUserProfile,
  ACTION_GET_URI_AVATAR,
  ACTION_GET_URI_AVATAR_SUCCESS,
  ACTION_GET_URI_AVATAR_FAILURE,
  ACTION_RESET_URI_AVATAR,
  getUriAvatar,
  getUriAvatarSuccess,
  getUriAvatarFailure,
  resetUriAvatar,
  //Edit Profile
  ACTION_UPLOAD_IMAGE,
  ACTION_UPLOAD_IMAGE_SUCCESS,
  ACTION_UPLOAD_IMAGE_FAILURE,
  ACTION_RESET_UPLOAD_IMAGE,
  uploadImage,
  uploadImageSuccess,
  uploadImageFailure,
  resetUploadImage,
  ACTION_EDIT_PROFILE,
  ACTION_EDIT_PROFILE_SUCCESS,
  ACTION_EDIT_PROFILE_FAILURE,
  editProfile,
  editProfileSuccess,
  editProfileFailure,
  ACTION_CHANGE_PASSWORD,
  ACTION_CHANGE_PASSWORD_SUCCESS,
  ACTION_CHANGE_PASSWORD_FAILURE,
  changePassword,
  changePasswordSuccess,
  changePasswordFailure,
  //Detail post
  ACTION_GET_DETAIL_POST,
  ACTION_GET_DETAIL_POST_SUCCESS,
  ACTION_GET_DETAIL_POST_FAILURE,
  getDetailPost,
  getDetailPostSuccess,
  getDetailPostFailure,
  ACTION_INTERACTIVE_POST,
  ACTION_INTERACTIVE_POST_SUCCESS,
  ACTION_INTERACTIVE_POST_FAILURE,
  interactivePost,
  interactivePostSuccess,
  interactivePostFailure
}
