import React, {useState, useEffect} from "react"
import styles from "./styles"
import string from "./string"
import {connect} from "react-redux"
import {bindActionCreators} from "redux"
import TopBarMenu from "@src/component/top-bar-menu"
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons"
import PostList from "@src/component/post-list"
import {getPostUserProfile, getDetailPost, interactivePost, showToast} from "@src/redux/actions"
import AddFloatingButton from "@src/component/add-floating-button"
import LinearGradient from "react-native-linear-gradient"

const PostProfile = (props) => {
  const [refreshingSate, setRefreshingState] = useState(false)

  useEffect(() => {
    props.getPostUserProfile({page: 1, size: 10, body: {email: props.navigation.state.params.email}})
  }, [])

  useEffect(() => {
    !props.refreshing && setRefreshingState(props.refreshing)
  }, [props.refreshing])

  return (
    <LinearGradient style={styles.container} colors={["#5c6099", "#089a9a"]}>
      <TopBarMenu
        title={props.navigation.state.params.email}
        icon={[{icon: faArrowLeft}]}
        onPress={() => props.navigation.goBack()}
      />
      <PostList
        data={props.data}
        onRefresh={() => {
          props.getPostUserProfile({page: 1, size: 10, body: {email: props.navigation.state.params.email}})
        }}
        refreshing={refreshingSate}
        loadMore={() => {
          props.getPostUserProfile({
            page: props.nowPage + 1,
            size: 10,
            loadMore: true,
            body: {email: props.navigation.state.params.email}
          })
        }}
        totalPost={props.totalPost}
        loading={props.loading}
        onPress={(id) => {
          // props.getDetailPost({id: id, type: "FOR_SALE"})
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
  const postUserProfile = state.userProfile.postUserProfile
  return {
    signIn: state.auth.signIn.success,
    refreshing: postUserProfile.refreshing,
    data: postUserProfile.response ? postUserProfile.response.content.content : [],
    nowPage: postUserProfile.success ? postUserProfile.response.content.pageable.pageNumber + 1 : 0,
    totalPost: postUserProfile.success && postUserProfile.response.content.totalElements,
    loading: postUserProfile.loading || postUserProfile.loadMore,
    email: state.auth.signIn.success && state.auth.signIn.response.email,
    isNewProfile: !state.userProfile.userProfile.success
  }
}

const mapDispatchToProps = (dispatch) => {
  let actionCreators = {getPostUserProfile, getDetailPost, interactivePost, showToast}
  let actions = bindActionCreators(actionCreators, dispatch)
  return {...actions, dispatch}
}

const postUserProfileContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PostProfile)

export default postUserProfileContainer
