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
import {fetchPostNeedRent, getDetailPost, interactivePost} from "@src/redux/actions"
import {error} from "@src/utilities/message-error"

const NewFeedNeedRent = (props) => {
  const [refreshingSate, setRefreshingState] = useState(false)

  useEffect(() => {
    props.nowPage === 0 && !props.loading && props.fetchPostNeedRent({page: 1, size: 10})
  }, [])

  useEffect(() => {
    !props.refreshing && setRefreshingState(props.refreshing)
  }, [props.refreshing])

  return (
    <SafeAreaView style={styles.container}>
      <TopBarMenu
        titleIsLeft={true}
        icon={[{icon: faBell}, {icon: faFilter, name: "NEED_RENT"}]}
        title={string.title}
        onPress={(name) => {
          name === "FILTER" && props.isNewProfile
            ? error()
            : props.navigation.navigate("Filter", {screen: "NEED_RENT"})
        }}
      />
      <AddFloatingButton screen={"NewFeedNeedRent"} />
      <PostListNeed
        data={props.data}
        onRefresh={() => {
          props.fetchPostNeedRent({page: 1, size: 10})
        }}
        refreshing={refreshingSate}
        loadMore={() => {
          props.fetchPostNeedRent({page: props.nowPage + 1, size: 10, loadMore: true})
        }}
        totalPost={props.totalPost}
        loading={props.loading}
        onPress={(id) => {
          props.getDetailPost({id: id, type: "NEED_RENT"})
        }}
        onPressFollow={(params) => {
          props.interactivePost(params)
        }}
        email={props.email}
        isNewProfile={props.isNewProfile}
      />
    </SafeAreaView>
  )
}

const mapStateToProps = (state) => {
  const newFeedNeedRent = state.newFeedNeedRent
  return {
    refreshing: newFeedNeedRent.refreshing,
    data: newFeedNeedRent.response ? newFeedNeedRent.response.content.content : [],
    nowPage: newFeedNeedRent.success ? newFeedNeedRent.response.content.pageable.pageNumber + 1 : 0,
    totalPost: newFeedNeedRent.success && newFeedNeedRent.response.content.totalElements,
    loading: newFeedNeedRent.loading || newFeedNeedRent.loadMore,
    email: state.auth.signIn.success && state.auth.signIn.response.email,
    isNewProfile: !state.userProfile.userProfile.success && !state.userProfile.uriAvatar.success
  }
}

const mapDispatchToProps = (dispatch) => {
  let actionCreators = {fetchPostNeedRent, getDetailPost, interactivePost}
  let actions = bindActionCreators(actionCreators, dispatch)
  return {...actions, dispatch}
}

const NewFeedNeedRentContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(NewFeedNeedRent)

export default NewFeedNeedRentContainer
