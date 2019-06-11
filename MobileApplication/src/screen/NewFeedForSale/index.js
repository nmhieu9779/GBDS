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
import {fetchPostForSale} from "@src/redux/actions"

const NewFeedForSale = (props) => {
  const [visiableFilter, setVisiableFilter] = useState(false)
  const [refreshingSate, setRefreshingState] = useState(false)

  useEffect(() => {
    props.nowPage === 0 && !props.loading && props.fetchPostForSale({page: 1, size: 10, init: true})
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
          props.fetchPostForSale({page: 1, size: 10})
        }}
        refreshing={refreshingSate}
        loadMore={() => {
          props.fetchPostForSale({page: props.nowPage + 1, size: 10, loadMore: true})
        }}
        totalPost={props.totalPost}
        loading={props.loading}
      />
    </SafeAreaView>
  )
}

const mapStateToProps = ({newFeedForSale}) => {
  return {
    refreshing: newFeedForSale.refreshing,
    data: newFeedForSale.response ? newFeedForSale.response.content.content : [],
    nowPage: newFeedForSale.response ? newFeedForSale.response.content.pageable.pageNumber + 1 : 0,
    totalPost: newFeedForSale.response && newFeedForSale.response.content.totalElements,
    loading: newFeedForSale.loading || newFeedForSale.loadMore
  }
}

const mapDispatchToProps = (dispatch) => {
  let actionCreators = {fetchPostForSale}
  let actions = bindActionCreators(actionCreators, dispatch)
  return {...actions, dispatch}
}

const NewFeedForSaleContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(NewFeedForSale)

export default NewFeedForSaleContainer
