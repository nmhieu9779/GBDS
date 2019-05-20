import React, { Component } from "react"
import { StyleSheet, View, ActivityIndicator } from "react-native"
import { connect } from "react-redux"
import constants from "../../Constant"

class ProcessHUD extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return this.props.isLoading ? (
      <View style={styles.hud_container}>
        <ActivityIndicator color={"black"} size={"large"} />
      </View>
    ) : null
  }
}

const styles = StyleSheet.create({
  hud_container: {
    position: "absolute",
    top: 0,
    left: 0,
    width: constants.width,
    height: constants.height,
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 999
  }
})

const mapStateToProps = state => {
  return {
    isLoading: state.processHudReducers.isLoading
  }
}

const ProcessHUDContainer = connect(mapStateToProps)(ProcessHUD)

export default ProcessHUDContainer
