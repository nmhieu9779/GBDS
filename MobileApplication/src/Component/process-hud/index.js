import React from "react"
import {View, ActivityIndicator, Text} from "react-native"
import {connect} from "react-redux"
import styles from "./styles"

const ProcessHUD = ({loading}) =>
  loading && (
    <View style={styles.container}>
      <View style={styles.indicator}>
        <ActivityIndicator color={"black"} size={"large"} />
        <Text style={styles.loadingText}>Loading...</Text>
      </View>
    </View>
  )

const mapStateToProps = ({
  auth,
  address,
  newFeedForSale,
  newFeedForRent,
  newFeedNeedSale,
  newFeedNeedRent
}) => ({
  loading:
    auth.loading ||
    address.loading ||
    newFeedForSale.loading ||
    newFeedForRent.loading ||
    newFeedNeedSale.loading ||
    newFeedNeedRent.loading
})

const ProcessHUDContainer = connect(mapStateToProps)(ProcessHUD)

export default ProcessHUDContainer
