import {combineReducers} from "redux"
import authReducers from "../AuthScreen/redux/reducers"
import addressReducers from "../Component/address-input/redux/reducers"
import processHudReducers from "../Component/process-hud/redux/reducers"
import typeProductReducers from "../Component/type-product/redux/reducers"
import selectTypePostReducers from "../Component/add-floating-button/redux/reducers"
import newFeedForSale from "../NewFeedForSale/redux/reducers"
import newFeedForRent from "../NewFeedForRent/redux/reducers"
import newFeedNeedSale from "../NewFeedNeedSale/redux/reducers"
import newFeedNeedRent from "../NewFeedNeedRent/redux/reducers"

const allReducers = combineReducers({
  authReducers,
  addressReducers,
  processHudReducers,
  typeProductReducers,
  selectTypePostReducers,
  newFeedForSale,
  newFeedForRent,
  newFeedNeedSale,
  newFeedNeedRent
})

export default allReducers
