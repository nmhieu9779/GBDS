import React from "react"
import {faPencilAlt} from "@fortawesome/free-solid-svg-icons"
import FloatingButton from "@src/component/floating-button"
import {connect} from "react-redux"
import {bindActionCreators} from "redux"
import {openSelectTypePost} from "@src/redux/actions"

const AddFloatingButton = (props) => (
  <FloatingButton icon={faPencilAlt} onPress={() => props.openSelectTypePost()} />
)

const mapDispatchToProps = (dispatch) => {
  let actionCreators = {
    openSelectTypePost
  }
  let actions = bindActionCreators(actionCreators, dispatch)
  return {...actions, dispatch}
}

const AddFloatingButtonContainer = connect(
  null,
  mapDispatchToProps
)(AddFloatingButton)

export default AddFloatingButtonContainer
