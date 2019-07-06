import React, {useState, useEffect} from "react"
import styles from "./styles"
import string from "./string"
import {connect} from "react-redux"
import {bindActionCreators} from "redux"
import TopBarMenu from "@src/component/top-bar-menu"
import {faFilter} from "@fortawesome/free-solid-svg-icons"
import {faBell} from "@fortawesome/free-regular-svg-icons"
import PostList from "@src/component/post-list"
import {fetchPostForRent, getDetailPost, interactivePost, showToast} from "@src/redux/actions"
import LinearGradient from "react-native-linear-gradient"
import AddFloatingButton from "@src/component/add-floating-button"

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
        icon={[
          {icon: faBell, name: "NOTI", data: props.totalNoti},
          {icon: faFilter, name: "FILTER", color: props.isFilter ? "#F35022" : "white"}
        ]}
        title={string.title}
        onPress={(name) => {
          if (name === "FILTER") {
            props.isNewProfile
              ? props.showToast(props.signIn ? "Bạn chưa cập nhập thông tin" : "Bạn chưa đăng nhập")
              : props.navigation.navigate("Filter", {screen: "FOR_RENT"})
          }
        }}
      />
      <PostList
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
        signIn={props.signIn}
        showToast={(e) => props.showToast(e)}
      />
      <AddFloatingButton />
    </LinearGradient>
  )
}

const mapStateToProps = (state) => {
  const newFeedForRent = state.newFeedForRent
  const fieldx =
    state.userProfile.userProfile.success &&
    state.userProfile.userProfile.response.content.fieldx &&
    JSON.parse(state.userProfile.userProfile.response.content.fieldx)
  return {
    signIn: state.auth.signIn.success,
    refreshing: newFeedForRent.refreshing,
    data: newFeedForRent.response ? newFeedForRent.response.content.content : [],
    nowPage: newFeedForRent.success ? newFeedForRent.response.content.pageable.pageNumber + 1 : 0,
    totalPost: newFeedForRent.success && newFeedForRent.response.content.totalElements,
    loading: newFeedForRent.loading || newFeedForRent.loadMore,
    email: state.auth.signIn.success && state.auth.signIn.response.email,
    isNewProfile: !state.userProfile.userProfile.success,
    isFilter: fieldx && Object.keys(fieldx.forSale.data).length !== 0,
    totalNoti: state.userProfile.countNoti.success ? state.userProfile.countNoti.response.content : 0
  }
}

const mapDispatchToProps = (dispatch) => {
  let actionCreators = {fetchPostForRent, getDetailPost, interactivePost, showToast}
  let actions = bindActionCreators(actionCreators, dispatch)
  return {...actions, dispatch}
}

const NewFeedForRentContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(NewFeedForRent)

export default NewFeedForRentContainer
