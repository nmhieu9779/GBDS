import React, {useState, useEffect} from "react"
import styles from "./styles"
import string from "./string"
import {connect} from "react-redux"
import {bindActionCreators} from "redux"
import TopBarMenu from "@src/component/top-bar-menu"
import SafeAreaView from "react-native-safe-area-view"
import {faFilter} from "@fortawesome/free-solid-svg-icons"
import {faBell} from "@fortawesome/free-regular-svg-icons"
import AddFloatingButton from "@src/component/add-floating-button"
import PostListNeed from "@src/component/post-list-need"
import {fetchPostNeedBuy, getDetailPost, interactivePost} from "@src/redux/actions"
import {error} from "@src/utilities/message-error"
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
        icon={[{icon: faBell}, {icon: faFilter, name: "FILTER"}]}
        title={string.title}
        onPress={(name) => {
          name === "FILTER" && props.isNewProfile
            ? error()
            : props.navigation.navigate("Filter", {screen: "NEED_BUY"})
        }}
      />
      <AddFloatingButton screen={"NewFeedNeedBuy"} />
      <PostListNeed
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
      />
    </LinearGradient>
  )
}

const mapStateToProps = (state) => {
  const newFeedNeedBuy = state.newFeedNeedBuy
  return {
    refreshing: newFeedNeedBuy.refreshing,
    data: newFeedNeedBuy.response ? newFeedNeedBuy.response.content.content : [],
    nowPage: newFeedNeedBuy.success ? newFeedNeedBuy.response.content.pageable.pageNumber + 1 : 0,
    totalPost: newFeedNeedBuy.success && newFeedNeedBuy.response.content.totalElements,
    loading: newFeedNeedBuy.loading || newFeedNeedBuy.loadMore,
    email: state.auth.signIn.success && state.auth.signIn.response.email,
    isNewProfile: !state.userProfile.userProfile.success && !state.userProfile.uriAvatar.success
  }
}

const mapDispatchToProps = (dispatch) => {
  let actionCreators = {fetchPostNeedBuy, getDetailPost, interactivePost}
  let actions = bindActionCreators(actionCreators, dispatch)
  return {...actions, dispatch}
}

const NewFeedNeedBuyContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(NewFeedNeedBuy)

export default NewFeedNeedBuyContainer
