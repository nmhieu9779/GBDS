import {combineReducers} from "redux"
import authReducers from "@src/screen/Auth/redux/reducers"
import addressReducers from "@src/component/address-input/redux/reducers"
import processHudReducers from "@src/component/process-hud/redux/reducers"
import typeProductReducers from "@src/component/type-product/redux/reducers"
import selectTypePostReducers from "@src/component/add-floating-button/redux/reducers"
import newFeedForSale from "@src/screen/NewFeedForSale/redux/reducers"
import newFeedForRent from "@src/screen/NewFeedForRent/redux/reducers"
import newFeedNeedSale from "@src/screen/NewFeedNeedSale/redux/reducers"
import newFeedNeedRent from "@src/screen/NewFeedNeedRent/redux/reducers"

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
