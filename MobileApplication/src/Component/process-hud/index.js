import React from "react"
import {View, ActivityIndicator} from "react-native"
import {connect} from "react-redux"
import styles from "./styles"

const ProcessHUD = ({isLoading}) =>
  isLoading && (
    <View style={styles.hud_container}>
      <ActivityIndicator color={"black"} size={"large"} />
    </View>
  )

const mapStateToProps = (state) => {
  return {
    isLoading: state.processHudReducers.isLoading
  }
}

const ProcessHUDContainer = connect(mapStateToProps)(ProcessHUD)

export default ProcessHUDContainer
