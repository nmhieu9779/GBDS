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
  newFeedNeedBuy,
  newFeedNeedRent,
  userProfile,
  editProfile,
  postDetail,
  postFor,
  notification
}) => ({
  loading:
    auth.signIn.loading ||
    auth.signUp.loading ||
    address.city.loading ||
    address.district.loading ||
    address.ward.loading ||
    address.street.loading ||
    newFeedForSale.loading ||
    newFeedForRent.loading ||
    newFeedNeedBuy.loading ||
    newFeedNeedRent.loading ||
    userProfile.userProfile.loading ||
    userProfile.uriAvatar.loading ||
    editProfile.uploadImage.loading ||
    editProfile.editProfile.loading ||
    editProfile.changePassword.loading ||
    postDetail.postDetail.loading ||
    postDetail.interactivePost.loading ||
    postFor.postFor.loading ||
    postFor.uploadPostFor.loading ||
    postFor.deleteImagePost.loading ||
    notification.notification.loading ||
    userProfile.postUserProfile.loading ||
    auth.infoFacebook.loading
})

const ProcessHUDContainer = connect(mapStateToProps)(ProcessHUD)

export default ProcessHUDContainer
