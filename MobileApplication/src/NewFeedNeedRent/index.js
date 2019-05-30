import React, {useState, useEffect} from "react"
import styles from "./styles"
import string from "./string"
import {connect} from "react-redux"
import TopBarMenu from "../Component/top-bar-menu"
import SafeAreaView from "react-native-safe-area-view"
import {faFilter} from "@fortawesome/free-solid-svg-icons"
import Filter from "@src/Component/filter"
import AddFloatingButton from "@src/Component/add-floating-button"
import PostListNeed from "@src/Component/post-list-need"
import {onFetchPostNeedRentHome} from "./redux/actions"

const NewFeedNeedRent = ({data, refreshing, fetchPostNeedRentHome}) => {
  const [visiableFilter, setVisiableFilter] = useState(false)
  const [refreshingSate, setRefreshingState] = useState(false)

  useEffect(() => {
    fetchPostNeedRentHome()
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
          fetchPostNeedRentHome()
        }}
        refreshing={refreshingSate}
      />
    </SafeAreaView>
  )
}

const mapStateToProps = ({newFeedNeedRent: {data, refreshing}}) => ({
  data: data,
  refreshing: refreshing
})

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPostNeedRentHome: () => {
      dispatch(onFetchPostNeedRentHome())
    }
  }
}

const NewFeedNeedRentContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(NewFeedNeedRent)

export default NewFeedNeedRentContainer
