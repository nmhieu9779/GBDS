import React, {useState, useEffect} from "react"
import styles from "./styles"
import string from "./string"
import {connect} from "react-redux"
import {bindActionCreators} from "redux"
import TopBarMenu from "@src/component/top-bar-menu"
import {faFilter} from "@fortawesome/free-solid-svg-icons"
import {faBell} from "@fortawesome/free-regular-svg-icons"
import PostList from "@src/component/post-list"
import {fetchPostNeedBuy, getDetailPost, interactivePost, showToast} from "@src/redux/actions"
import AddFloatingButton from "@src/component/add-floating-button"

import LinearGradient from "react-native-linear-gradient"

const NewFeedNeedBuy = (props) => {
  const [refreshingSate, setRefreshingState] = useState(false)

  useEffect(() => {
    props.nowPage === 0 && !props.loading && props.fetchPostNeedBuy({page: 1, size: 10})
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
          if (name === "FILTER") {
            props.isNewProfile
              ? props.showToast(props.signIn ? "Bạn chưa cập nhập thông tin" : "Bạn chưa đăng nhập")
              : props.navigation.navigate("Filter", {screen: "NEED_BUY"})
          }
        }}
      />
      <PostList
        data={props.data}
        onRefresh={() => {
          props.fetchPostNeedBuy({page: 1, size: 10})
        }}
        refreshing={refreshingSate}
        loadMore={() => {
          props.fetchPostNeedBuy({page: props.nowPage + 1, size: 10, loadMore: true})
        }}
        totalPost={props.totalPost}
        loading={props.loading}
        onPress={(id) => {
          props.getDetailPost({id: id, type: "NEED_BUY"})
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
  const newFeedNeedBuy = state.newFeedNeedBuy
  const fieldx =
    state.userProfile.userProfile.success &&
    state.userProfile.userProfile.response.content.fieldx &&
    JSON.parse(state.userProfile.userProfile.response.content.fieldx)
  return {
    signIn: state.auth.signIn.success,
    refreshing: newFeedNeedBuy.refreshing,
    data: newFeedNeedBuy.response ? newFeedNeedBuy.response.content.content : [],
    nowPage: newFeedNeedBuy.success ? newFeedNeedBuy.response.content.pageable.pageNumber + 1 : 0,
    totalPost: newFeedNeedBuy.success && newFeedNeedBuy.response.content.totalElements,
    loading: newFeedNeedBuy.loading || newFeedNeedBuy.loadMore,
    email: state.auth.signIn.success && state.auth.signIn.response.email,
    isNewProfile: !state.userProfile.userProfile.success,
    isFilter: fieldx && Object.keys(fieldx.forSale.data).length !== 0,
    totalNoti: state.userProfile.countNoti.success ? state.userProfile.countNoti.response.content : 0
  }
}

const mapDispatchToProps = (dispatch) => {
  let actionCreators = {fetchPostNeedBuy, getDetailPost, interactivePost, showToast}
  let actions = bindActionCreators(actionCreators, dispatch)
  return {...actions, dispatch}
}

const NewFeedNeedBuyContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(NewFeedNeedBuy)

export default NewFeedNeedBuyContainer
