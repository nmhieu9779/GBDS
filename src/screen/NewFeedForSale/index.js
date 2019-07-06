import React, {useState, useEffect} from "react"
import styles from "./styles"
import string from "./string"
import {connect} from "react-redux"
import {bindActionCreators} from "redux"
import TopBarMenu from "@src/component/top-bar-menu"
import {faFilter} from "@fortawesome/free-solid-svg-icons"
import {faBell} from "@fortawesome/free-regular-svg-icons"
import PostList from "@src/component/post-list"
import {fetchPostForSale, getDetailPost, interactivePost, showToast} from "@src/redux/actions"
import AddFloatingButton from "@src/component/add-floating-button"

import LinearGradient from "react-native-linear-gradient"

const NewFeedForSale = (props) => {
  const [refreshingSate, setRefreshingState] = useState(false)

  useEffect(() => {
    props.nowPage === 0 &&
      !props.loading &&
      props.fetchPostForSale({page: 1, size: 10, body: props.fieldx.body})
  }, [])

  useEffect(() => {
    !props.refreshing && setRefreshingState(props.refreshing)
  }, [props.refreshing])

  return (
    <LinearGradient style={styles.container} colors={["#5c6099", "#089a9a"]}>
      <TopBarMenu
        titleIsLeft={true}
        icon={[
          {icon: faBell, name: "NOTI", data: props.totalNoti},
          {icon: faFilter, name: "FILTER", color: props.isFilter ? "#F35022" : "white"}
        ]}
        title={string.title}
        onPress={(name) => {
          if (props.isNewProfile) {
            return props.showToast(props.signIn ? "Bạn chưa cập nhập thông tin" : "Bạn chưa đăng nhập")
          }
          switch (name) {
            case "FILTER":
              props.navigation.navigate("Filter", {screen: "FOR_SALE"})
              break
            case "NOTI":
              props.navigation.navigate("Notification")
              break
          }
        }}
      />
      <PostList
        data={props.data}
        onRefresh={() => {
          props.fetchPostForSale({page: 1, size: 10, body: props.fieldx.body})
        }}
        refreshing={refreshingSate}
        loadMore={() => {
          props.fetchPostForSale({
            page: props.nowPage + 1,
            size: 10,
            loadMore: true,
            body: props.fieldx.body
          })
        }}
        totalPost={props.totalPost}
        loading={props.loading}
        onPress={(id) => {
          props.getDetailPost({id: id, type: "FOR_SALE"})
        }}
        onPressFollow={(params) => {
          props.interactivePost(params)
        }}
        email={props.email}
        isNewProfile={props.isNewProfile}
        signIn={props.signIn}
        showToast={(e) => props.showToast(e)}
      />
      <AddFloatingButton />
    </LinearGradient>
  )
}

const mapStateToProps = (state) => {
  const newFeedForSale = state.newFeedForSale
  let fieldx =
    state.userProfile.userProfile.success &&
    state.userProfile.userProfile.response.content.fieldx &&
    JSON.parse(state.userProfile.userProfile.response.content.fieldx)
  return {
    signIn: state.auth.signIn.success,
    refreshing: newFeedForSale.refreshing,
    data: newFeedForSale.response ? newFeedForSale.response.content.content : [],
    nowPage: newFeedForSale.success ? newFeedForSale.response.content.pageable.pageNumber + 1 : 0,
    totalPost: newFeedForSale.success && newFeedForSale.response.content.totalElements,
    loading: newFeedForSale.loading || newFeedForSale.loadMore,
    email: state.auth.signIn.success && state.auth.signIn.response.email,
    isNewProfile: !state.userProfile.userProfile.success,
    fieldx: (fieldx && Object.keys(fieldx.forSale.data).length !== 0 && fieldx.forSale) || {body: {}},
    signIn: state.auth.signIn.success,
    isFilter: fieldx && Object.keys(fieldx.forSale.data).length !== 0,
    totalNoti: state.userProfile.countNoti.success ? state.userProfile.countNoti.response.content : 0
  }
}

const mapDispatchToProps = (dispatch) => {
  let actionCreators = {fetchPostForSale, getDetailPost, interactivePost, showToast}
  let actions = bindActionCreators(actionCreators, dispatch)
  return {...actions, dispatch}
}

const NewFeedForSaleContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(NewFeedForSale)

export default NewFeedForSaleContainer
