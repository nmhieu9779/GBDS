import React, { PureComponent } from "react"
import {
  Platform,
  StyleSheet,
  View,
  ActivityIndicator,
  Modal
} from "react-native"
import { connect } from "react-redux"

class ProcessHUD extends PureComponent {
  constructor(props) {
    super(props)
  }

  render() {
    return this.props.isLoadingAuth ? (
      <Modal visible={true} transparent={true}>
        <View style={styles.hud_container}>
          <ActivityIndicator color={"black"} size={"large"} />
        </View>
      </Modal>
    ) : null
  }
}

const styles = StyleSheet.create({
  container: {},
  hud_container: {
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    height: "20%",
    width: "40%",
    position: "absolute",
    top: "40%",
    left: "30%",
    borderRadius: 10
  }
})

const mapStateToProps = state => {
  return {
    isLoadingAuth: state.authReducers.isLoading
  }
}

const ProcessHUDContainer = connect(mapStateToProps)(ProcessHUD)

export default ProcessHUDContainer
