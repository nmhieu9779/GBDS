import React, {useState, useEffect} from "react"
import styles from "./styles"
import string from "./string"
import {connect} from "react-redux"
import TopBarMenu from "@src/component/top-bar-menu"
import SafeAreaView from "react-native-safe-area-view"
import {faFilter} from "@fortawesome/free-solid-svg-icons"
import Filter from "@src/component/filter"
import AddFloatingButton from "@src/component/add-floating-button"
import PostListNeed from "@src/component/post-list-need"
import {onFetchPostNeedSaleHome} from "./redux/actions"

const NewFeedNeedSale = ({data, refreshing, fetchPostNeedSaleHome}) => {
  const [visiableFilter, setVisiableFilter] = useState(false)
  const [refreshingSate, setRefreshingState] = useState(false)

  useEffect(() => {
    fetchPostNeedSaleHome()
  }, [])

  useEffect(() => {
    !refreshing && setRefreshingState(refreshing)
  }, [refreshing])

  return (
    <SafeAreaView style={styles.container}>
      <TopBarMenu
        icon={{right: faFilter}}
        title={string.title}
        onPressRight={() => {
          setVisiableFilter(true)
        }}
      />
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
        data={data}
        onRefresh={() => {
          fetchPostNeedSaleHome()
        }}
        refreshing={refreshingSate}
      />
    </SafeAreaView>
  )
}

const mapStateToProps = ({newFeedNeedSale: {data, refreshing}}) => ({
  data: data,
  refreshing: refreshing
})

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPostNeedSaleHome: () => {
      dispatch(onFetchPostNeedSaleHome())
    }
  }
}

const NewFeedNeedSaleContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(NewFeedNeedSale)

export default NewFeedNeedSaleContainer
