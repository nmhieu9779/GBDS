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
import PostListFor from "@src/component/post-list-for"
import {fetchPostForRent, getDetailPost} from "@src/redux/actions"

const NewFeedForRent = (props) => {
  const [visiableFilter, setVisiableFilter] = useState(false)
  const [refreshingSate, setRefreshingState] = useState(false)

  useEffect(() => {
    props.nowPage === 0 && !props.loading && props.fetchPostForRent({page: 1, size: 10})
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
      />
    </SafeAreaView>
  )
}

const mapStateToProps = ({newFeedForRent}) => {
  return {
    refreshing: newFeedForRent.refreshing,
    data: newFeedForRent.response ? newFeedForRent.response.content.content : [],
    nowPage: newFeedForRent.response ? newFeedForRent.response.content.pageable.pageNumber + 1 : 0,
    totalPost: newFeedForRent.response && newFeedForRent.response.content.totalElements,
    loading: newFeedForRent.loading || newFeedForRent.loadMore
  }
}

const mapDispatchToProps = (dispatch) => {
  let actionCreators = {fetchPostForRent, getDetailPost}
  let actions = bindActionCreators(actionCreators, dispatch)
  return {...actions, dispatch}
}

const NewFeedForRentContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(NewFeedForRent)

export default NewFeedForRentContainer
