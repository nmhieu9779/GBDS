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
import PostListFor from "@src/component/post-list-for"
import {fetchPostForRent, getDetailPost, interactivePost} from "@src/redux/actions"
import {error} from "@src/utilities/message-error"
import LinearGradient from "react-native-linear-gradient"

const NewFeedForRent = (props) => {
  const [refreshingSate, setRefreshingState] = useState(false)

  useEffect(() => {
    props.nowPage === 0 && !props.loading && props.fetchPostForRent({page: 1, size: 10})
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
            : props.navigation.navigate("Filter", {screen: "FOR_RENT"})
        }}
      />
      <AddFloatingButton screen={"NewFeedForRent"} />
      <PostListFor
        data={props.data}
        onRefresh={() => {
          props.fetchPostForRent({page: 1, size: 10})
        }}
        refreshing={refreshingSate}
        loadMore={() => {
          props.fetchPostForRent({page: props.nowPage + 1, size: 10, loadMore: true})
        }}
        totalPost={props.totalPost}
        loading={props.loading}
        onPress={(id) => {
          props.getDetailPost({id: id, type: "FOR_RENT"})
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
  const newFeedForRent = state.newFeedForRent
  return {
    refreshing: newFeedForRent.refreshing,
    data: newFeedForRent.response ? newFeedForRent.response.content.content : [],
    nowPage: newFeedForRent.success ? newFeedForRent.response.content.pageable.pageNumber + 1 : 0,
    totalPost: newFeedForRent.success && newFeedForRent.response.content.totalElements,
    loading: newFeedForRent.loading || newFeedForRent.loadMore,
    email: state.auth.signIn.success && state.auth.signIn.response.email,
    isNewProfile: !state.userProfile.userProfile.success && !state.userProfile.uriAvatar.success
  }
}

const mapDispatchToProps = (dispatch) => {
  let actionCreators = {fetchPostForRent, getDetailPost, interactivePost}
  let actions = bindActionCreators(actionCreators, dispatch)
  return {...actions, dispatch}
}

const NewFeedForRentContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(NewFeedForRent)

export default NewFeedForRentContainer
