import { fromJS } from "immutable"
import { OPEN_HUD, CLOSE_HUD } from "../../../redux/actions"

initStateHud = {
  isLoading: false
}

const hudReducers = (state = initStateHud, action) => {
  let newState = fromJS(state).toJS()
  switch (action.type) {
    case OPEN_HUD:
      newState.isLoading = true
      break
    case CLOSE_HUD:
      newState.isLoading = false
      break
    default:
      break
  }
  return newState
}

export default hudReducers
