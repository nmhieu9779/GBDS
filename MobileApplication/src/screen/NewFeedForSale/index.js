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
import {fetchPostForSale, getDetailPost, interactivePost} from "@src/redux/actions"
import {error} from "@src/utilities/message-error"

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
    <SafeAreaView style={styles.container}>
      <TopBarMenu
        titleIsLeft={true}
        icon={[{icon: faBell, name: "NOTI"}, {icon: faFilter, name: "FILTER"}]}
        title={string.title}
        onPress={(name) => {
          name === "FILTER" && props.isNewProfile
            ? error()
            : props.navigation.navigate("Filter", {screen: "FOR_SALE"})
        }}
      />
      <AddFloatingButton screen={"NewFeedForSale"} />
      <PostListFor
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
      />
    </SafeAreaView>
  )
}

const mapStateToProps = (state) => {
  const newFeedForSale = state.newFeedForSale
  let fieldx =
    state.userProfile.userProfile.success &&
    state.userProfile.userProfile.response.content.fieldx &&
    JSON.parse(state.userProfile.userProfile.response.content.fieldx)
  return {
    refreshing: newFeedForSale.refreshing,
    data: newFeedForSale.response ? newFeedForSale.response.content.content : [],
    nowPage: newFeedForSale.success ? newFeedForSale.response.content.pageable.pageNumber + 1 : 0,
    totalPost: newFeedForSale.success && newFeedForSale.response.content.totalElements,
    loading: newFeedForSale.loading || newFeedForSale.loadMore,
    email: state.auth.signIn.success && state.auth.signIn.response.email,
    isNewProfile: !state.userProfile.userProfile.success && !state.userProfile.uriAvatar.success,
    fieldx: (fieldx && Object.keys(fieldx.forSale.data).length !== 0 && fieldx.forSale) || {body: {}}
  }
}

const mapDispatchToProps = (dispatch) => {
  let actionCreators = {fetchPostForSale, getDetailPost, interactivePost}
  let actions = bindActionCreators(actionCreators, dispatch)
  return {...actions, dispatch}
}

const NewFeedForSaleContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(NewFeedForSale)

export default NewFeedForSaleContainer
