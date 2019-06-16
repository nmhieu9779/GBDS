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
import {fetchPostNeedRent, getDetailPost} from "@src/redux/actions"

const NewFeedNeedRent = (props) => {
  const [visiableFilter, setVisiableFilter] = useState(false)
  const [refreshingSate, setRefreshingState] = useState(false)

  useEffect(() => {
    props.nowPage === 0 && !props.loading && props.fetchPostNeedRent({page: 1, size: 10})
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
      />
    </SafeAreaView>
  )
}

const mapStateToProps = ({newFeedNeedRent}) => {
  return {
    refreshing: newFeedNeedRent.refreshing,
    data: newFeedNeedRent.response ? newFeedNeedRent.response.content.content : [],
    nowPage: newFeedNeedRent.response ? newFeedNeedRent.response.content.pageable.pageNumber + 1 : 0,
    totalPost: newFeedNeedRent.response && newFeedNeedRent.response.content.totalElements,
    loading: newFeedNeedRent.loading || newFeedNeedRent.loadMore
  }
}

const mapDispatchToProps = (dispatch) => {
  let actionCreators = {fetchPostNeedRent, getDetailPost}
  let actions = bindActionCreators(actionCreators, dispatch)
  return {...actions, dispatch}
}

const NewFeedNeedRentContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(NewFeedNeedRent)

export default NewFeedNeedRentContainer
