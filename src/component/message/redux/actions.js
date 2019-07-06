import {SHOW_MESSAGE, UN_SHOW_MESSAGE} from "@src/redux/actions"

export const onShowMessage = ({typeMessage, message}) => ({
  type: SHOW_MESSAGE,
  typeMessage: typeMessage,
  message: message
})

export const onUnShowMessage = () => ({
  type: UN_SHOW_MESSAGE
})
