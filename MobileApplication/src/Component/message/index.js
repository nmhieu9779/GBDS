import React from "react"
import {connect} from "react-redux"
import {onUnShowMessage} from "./redux/actions"
import ErrorMessage from "./error-message"
import WarningMessageDialog from "./warning-message-dialog"
import NavigationService from "@src/navigation/NavigationService"

const Message = (props) => {
  return (
    (props.isShow &&
      (props.type === "ERROR" && (
        <ErrorMessage
          color={"red"}
          message={props.message}
          onPressClose={() => {
            props.unShowMessage()
          }}
          isShow={props.isShow}
        />
      ))) ||
    (props.type === "WARNING_DIALONG" && (
      <WarningMessageDialog
        message={props.message}
        onPressClose={() => {
          props.unShowMessage()
        }}
        isShow={props.isShow}
        btnLabel={"Chỉnh sửa thông tin"}
        warning={"Chú ý"}
        onPressBtn={() => {
          NavigationService.navigate("EditProfile")
          props.unShowMessage()
        }}
      />
    ))
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
