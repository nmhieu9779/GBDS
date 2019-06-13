import {combineReducers} from "redux"
import auth from "@src/screen/Auth/redux/reducers"
import address from "@src/component/address-input/redux/reducers"
import typeProduct from "@src/component/type-product/redux/reducers"
import selectTypePost from "@src/component/add-floating-button/redux/reducers"
import newFeedForSale from "@src/screen/NewFeedForSale/redux/reducers"
import newFeedForRent from "@src/screen/NewFeedForRent/redux/reducers"
import newFeedNeedBuy from "@src/screen/NewFeedNeedBuy/redux/reducers"
import newFeedNeedRent from "@src/screen/NewFeedNeedRent/redux/reducers"
import userProfile from "@src/screen/UserProfile/redux/reducers"
import message from "@src/component/message/redux/reducers"
import editProfile from "@src/screen/EditProfile/redux/reducers"
import postDetail from "@src/screen/PostDetail/redux/reducers"

const allReducers = combineReducers({
  auth,
  address,
  typeProduct,
  selectTypePost,
  newFeedForSale,
  newFeedForRent,
  newFeedNeedBuy,
  newFeedNeedRent,
  userProfile,
  message,
  editProfile,
  postDetail
})

export default allReducers
