import React from "react"
import {View, ActivityIndicator, Text} from "react-native"
import {connect} from "react-redux"
import styles from "./styles"
import Card from "@src/component/card"

const ProcessHUD = ({loading}) =>
  loading && (
    <View style={styles.container}>
      <Card style={styles.indicator}>
        <ActivityIndicator color={"black"} size={"large"} />
        <Text style={styles.loadingText}>Loading...</Text>
      </Card>
    </View>
  )

const mapStateToProps = ({
  auth,
  address,
  newFeedForSale,
  newFeedForRent,
  newFeedNeedSale,
  newFeedNeedRent,
  userProfile,
  editProfile
}) => ({
  loading:
    auth.loading ||
    address.loading ||
    newFeedForSale.loading ||
    newFeedForRent.loading ||
    newFeedNeedSale.loading ||
    newFeedNeedRent.loading ||
    userProfile.loading ||
    editProfile.loading
})

const ProcessHUDContainer = connect(mapStateToProps)(ProcessHUD)

export default ProcessHUDContainer
