const URL_ADMNU = `http://35.187.253.10:21006/api-gateway/grre-admnu`

const URL_OAUTH = `http://35.187.253.10:21006/api-gateway/grre-oauth`

const URL_PFMNG = `http://35.187.253.10:21006/api-gateway/grre-pfmng`

const URL_FLUPL = `http://35.187.253.10:21006/api-gateway/grre-flupl`

const URL_REMNG = `http://35.187.253.10:21006/api-gateway/grre-remng`

export const URL_SIGN_IN = `${URL_OAUTH}/oauth/token`
export const URL_SIGN_UP = `${URL_OAUTH}/api/v1/users`

export const URL_GET_USER_PROFILE = `${URL_PFMNG}/api/v1/profiles`
export const URL_GET_URI_AVATAR = `${URL_PFMNG}/api/v1/profiles/avaurl`
export const URL_EDIT_PROFILE = `${URL_PFMNG}/api/v1/profiles`

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
