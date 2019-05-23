import {
  OPEN_SELECT_TYPE_POST,
  CLOSE_SELECT_TYPE_POST
} from "../../../redux/actions"

export const openSelectTypePostAction = () => ({ type: OPEN_SELECT_TYPE_POST })

export const closeSelectTypePostAction = () => ({
  type: CLOSE_SELECT_TYPE_POST
})
