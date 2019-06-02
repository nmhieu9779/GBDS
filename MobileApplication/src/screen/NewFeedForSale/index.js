import React, {useState, useEffect} from "react"
import styles from "./styles"
import string from "./string"
import {connect} from "react-redux"
import TopBarMenu from "@src/component/top-bar-menu"
import SafeAreaView from "react-native-safe-area-view"
import {faFilter} from "@fortawesome/free-solid-svg-icons"
import {faBell} from "@fortawesome/free-regular-svg-icons"
import Filter from "@src/component/filter"
import AddFloatingButton from "@src/component/add-floating-button"
import PostListFor from "@src/component/post-list-for"
import {onFetchPostForSaleHome} from "./redux/actions"

const NewFeedForSale = ({data, refreshing, fetchPostForSaleHome, navigation}) => {
  const [visiableFilter, setVisiableFilter] = useState(false)
  const [refreshingSate, setRefreshingState] = useState(false)

  useEffect(() => {
    fetchPostForSaleHome()
  }, [])

  useEffect(() => {
    !refreshing && setRefreshingState(refreshing)
  }, [refreshing])

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
        data={data}
        onRefresh={() => {
          fetchPostForSaleHome()
        }}
        refreshing={refreshingSate}
      />
    </SafeAreaView>
  )
}

const mapStateToProps = ({newFeedForSale: {data, refreshing}}) => ({
  data: data,
  refreshing: refreshing
})

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPostForSaleHome: () => {
      dispatch(onFetchPostForSaleHome())
    }
  }
}

const NewFeedForSaleContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(NewFeedForSale)

export default NewFeedForSaleContainer
