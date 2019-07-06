import React, {useEffect} from "react"
import Toast from "react-native-root-toast"
import {connect} from "react-redux"
import {bindActionCreators} from "redux"
import {resetToast} from "@src/redux/actions"

const ToastMessage = (props) => {
  useEffect(() => {
    props.visible && setTimeout(() => props.resetToast(), 3000)
  }, [props.visible])
  return (
    <Toast visible={props.visible} position={50} shadow={false} animation={false}>
      {props.message}
    </Toast>
  )
}

const mapStateToProps = (state) => {
  return {
    message: state.toastMessage.message,
    visible: state.toastMessage.visible
  }
}
const mapDispatchToProps = (dispatch) => {
  let actionCreators = {
    resetToast
  }
  let actions = bindActionCreators(actionCreators, dispatch)
  return {...actions, dispatch}
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ToastMessage)
