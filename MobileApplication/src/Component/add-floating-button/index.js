import React from "react"
import {faPencilAlt} from "@fortawesome/free-solid-svg-icons"
import FloatingButton from "../floating-button"
import {connect} from "react-redux"
import {openSelectTypePostAction} from "./redux/actions"

const AddFloatingButton = ({open}) => <FloatingButton icon={faPencilAlt} onPress={() => open()} />

const mapDispatchToProps = (dispatch) => {
  return {
    open: () => {
      dispatch(openSelectTypePostAction())
    }
  }
}

const AddFloatingButtonContainer = connect(
  null,
  mapDispatchToProps
)(AddFloatingButton)

export default AddFloatingButtonContainer
