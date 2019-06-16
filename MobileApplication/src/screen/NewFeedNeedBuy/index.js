import React, {useState, useEffect} from "react"
import styles from "./styles"
import string from "./string"
import {connect} from "react-redux"
import {bindActionCreators} from "redux"
import TopBarMenu from "@src/component/top-bar-menu"
import SafeAreaView from "react-native-safe-area-view"
import {faFilter} from "@fortawesome/free-solid-svg-icons"
import {faBell} from "@fortawesome/free-regular-svg-icons"
import Filter from "@src/component/filter"
import AddFloatingButton from "@src/component/add-floating-button"
import PostListNeed from "@src/component/post-list-need"
import {fetchPostNeedBuy, getDetailPost, interactivePost} from "@src/redux/actions"

const NewFeedNeedBuy = (props) => {
  const [visiableFilter, setVisiableFilter] = useState(false)
  const [refreshingSate, setRefreshingState] = useState(false)

  useEffect(() => {
    props.nowPage === 0 && !props.loading && props.fetchPostNeedBuy({page: 1, size: 10})
  }, [])

  useEffect(() => {
    !props.refreshing && setRefreshingState(props.refreshing)
  }, [props.refreshing])

  return (
    <SafeAreaView style={styles.container}>
      <TopBarMenu titleIsLeft={true} icon={[{icon: faBell}, {icon: faFilter}]} title={string.title} />
      {visiableFilter && (
        <Filter
          visiable={visiableFilter}
          onPressClose={() => {
            setVisiableFilter(false)
          }}
        />
      )}
      <AddFloatingButton />
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
      />
    </SafeAreaView>
  )
}

const mapStateToProps = ({newFeedNeedBuy}) => {
  return {
    refreshing: newFeedNeedBuy.refreshing,
    data: newFeedNeedBuy.response ? newFeedNeedBuy.response.content.content : [],
    nowPage: newFeedNeedBuy.response ? newFeedNeedBuy.response.content.pageable.pageNumber + 1 : 0,
    totalPost: newFeedNeedBuy.response && newFeedNeedBuy.response.content.totalElements,
    loading: newFeedNeedBuy.loading || newFeedNeedBuy.loadMore,
    email: state.auth.signIn.success && state.auth.signIn.response.email
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
