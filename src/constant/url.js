const URL_SERVER = `http://35.247.139.137:21006`

const URL_ADMNU = `${URL_SERVER}/api-gateway/grre-admnu`

const URL_OAUTH = `${URL_SERVER}/api-gateway/grre-oauth`

const URL_PFMNG = `${URL_SERVER}/api-gateway/grre-pfmng`

const URL_FLUPL = `${URL_SERVER}/api-gateway/grre-flupl`

const URL_REMNG = `${URL_SERVER}/api-gateway/grre-remng`

const URL_NOTIF = `${URL_SERVER}/api-gateway/grre-notif`

export const URL_SIGN_IN = `${URL_OAUTH}/oauth/token`
export const URL_SIGN_UP = `${URL_OAUTH}/api/v1/users`

export const URL_GET_USER_PROFILE = `${URL_PFMNG}/api/v1/profiles`
export const URL_GET_URI_AVATAR = `${URL_PFMNG}/api/v1/profiles/avaurl`
export const URL_EDIT_PROFILE = `${URL_PFMNG}/api/v1/profiles`
export const URL_CHANGE_PASSWORD = `${URL_OAUTH}/api/v1/users`
export const URL_GET_ALL_POST_USER = `${URL_REMNG}/api/v1/posts/all/user`

export const URL_UPLOAD_IMAGE = `${URL_FLUPL}/api/v1/storages/upload`

export const URL_GET_CITY = `${URL_ADMNU}/api/v1/provinces`
export const URL_GET_DISTRICT = `${URL_ADMNU}/api/v1/districts`
export const URL_GET_WARD = `${URL_ADMNU}/api/v1/wards`
export const URL_GET_STREET = `${URL_ADMNU}/api/v1/streets`

export const URL_GET_NEW_FEED_POST_FOR_SALE = `${URL_REMNG}/api/v1/for-sale-posts/query`
export const URL_GET_NEW_FEED_POST_FOR_RENT = `${URL_REMNG}/api/v1/for-rent-posts/query`
export const URL_GET_NEW_FEED_POST_NEED_BUY = `${URL_REMNG}/api/v1/buy-demand-posts/query`
export const URL_GET_NEW_FEED_POST_NEED_RENT = `${URL_REMNG}/api/v1/rent-demand-posts/query`

export const URL_GET_DETAIL_POST_FOR_SALE = `${URL_REMNG}/api/v1/for-sale-posts`
export const URL_GET_DETAIL_POST_FOR_RENT = `${URL_REMNG}/api/v1/for-rent-posts`
export const URL_GET_DETAIL_POST_NEED_BUY = `${URL_REMNG}/api/v1/buy-demand-posts`
export const URL_GET_DETAIL_POST_NEED_RENT = `${URL_REMNG}/api/v1/rent-demand-posts`

export const URL_FOLLOW_POST = `${URL_REMNG}/api/v1/posts/subscribe`
export const URL_UN_FOLLOW_POST = `${URL_REMNG}/api/v1/posts/unsubscribe`
export const URL_CLOSE_POST = `${URL_REMNG}/api/v1/posts/close`
export const URL_OPEN_POST = `${URL_REMNG}/api/v1/posts/open`

export const URL_DELETE_POST_FOR_SALE = `${URL_REMNG}/api/v1/for-sale-posts`
export const URL_DELETE_POST_FOR_RENT = `${URL_REMNG}/api/v1/for-rent-posts`
export const URL_DELETE_POST_NEED_BUY = `${URL_REMNG}/api/v1/buy-demand-posts`
export const URL_DELETE_POST_NEED_RENT = `${URL_REMNG}/api/v1/rent-demand-posts`

export const URL_UPLOAD_POST_FOR = `${URL_REMNG}/api/v1/file-upload`
export const URL_POST_FOR_SALE = `${URL_REMNG}/api/v1/for-sale-posts`
export const URL_POST_FOR_RENT = `${URL_REMNG}/api/v1/for-rent-posts`
export const URL_DELETE_IMAGE_POST_SALE_EXISTED = `${URL_REMNG}/api/v1/file-upload/existed/sale`
export const URL_DELETE_IMAGE_POST_RENT_EXISTED = `${URL_REMNG}/api/v1/file-upload/existed/rent`
export const URL_DELETE_IMAGE_POST = `${URL_REMNG}/api/v1/file-upload`

export const URL_POST_NEED_BUY = `${URL_REMNG}/api/v1/buy-demand-posts`
export const URL_POST_NEED_RENT = `${URL_REMNG}/api/v1/rent-demand-posts`

export const URL_COUNT_NOTI = `${URL_NOTIF}/api/v1/notifications/count`
export const URL_GET_NOTI = `${URL_NOTIF}/api/v1/notifications/all/user`

export const URL_GET_GEOCODING = "https://maps.googleapis.com/maps/api/geocode/json"

export const URL_GET_INFO_FACEBOOK = `https://graph.facebook.com/v3.3/me`
export const URL_SIGN_IN_WITH_3RDPARTY = `${URL_OAUTH}/api/v1/users/3rdparty/token`
