import {SHOW_MESSAGE, UN_SHOW_MESSAGE} from "@src/redux/actions"

export const onShowMessage = ({type, message}) => ({type: SHOW_MESSAGE, typeMessage: type, message: message})

export const onUnShowMessage = () => ({
  type: UN_SHOW_MESSAGE
})
