import React from "react"
import {connect} from "react-redux"
import {onUnShowMessage} from "./redux/actions"
import ErrorMessage from "./error-message"

const Message = (props) => {
  return (
    props.isShow && (
      <ErrorMessage
        color={"red"}
        message={props.message}
        onPressClose={() => {
          props.unShowMessage()
        }}
        isShow={props.isShow}
      />
    )
  )
}

const mapStateToProps = ({message}) => {
  return {type: message.typeMessage, message: message.message, isShow: message.isShow}
}

const mapDispatchToProps = (dispatch) => {
  return {
    unShowMessage: () => {
      dispatch(onUnShowMessage())
    }
  }
}

const MessageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Message)

export default MessageContainer
