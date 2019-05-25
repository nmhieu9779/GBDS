import React, { Component } from "react"
import styles from "./styles"
import string from "./string"
import { connect } from "react-redux"
import TopBarMenu from "../Component/top-bar-menu"
import { SafeAreaView } from "react-navigation"
import { faBars, faFilter } from "@fortawesome/free-solid-svg-icons"
import Filter from "./Component/filter"
import AddFloatingButton from "../Component/add-floating-button"
import PostList from "./Component/post-list"
import { onFetchPostForSaleHome, onFetchPostForRentHome } from "./redux/actions"

class HomeScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      visiableFilter: false,
      refreshing: false
    }
  }

  componentDidMount = () => {
    this.fetchData()
  }

  fetchData = () => {
    this.props.fetchPostForSaleHome()
    this.props.fetchPostForRentHome()
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <TopBarMenu
          icon={{ left: faBars, right: faFilter }}
          title={string.title}
          onPressLeft={() => {
            this.props.navigation.toggleDrawer()
          }}
          onPressRight={() => {
            this.setState({ visiableFilter: true })
          }}
        />
        {this.state.visiableFilter && (
          <Filter
            visiable={this.state.visiableFilter}
            onPressClose={() => this.setState({ visiableFilter: false })}
          />
        )}
        <AddFloatingButton />
        <PostList
          listData={this.props.listData}
          onRefresh={() => {
            this.setState({ refreshing: this.props.refreshing })
            this.fetchData()
          }}
          refreshing={this.state.refreshing}
        />
      </SafeAreaView>
    )
  }
}

const mapStateToProps = ({ homeReducers }) => ({
  listData: homeReducers.listData,
  refreshing: homeReducers.refreshing
})

const mapDispatchToProps = dispatch => {
  return {
    fetchPostForSaleHome: () => {
      dispatch(onFetchPostForSaleHome())
    },
    fetchPostForRentHome: () => {
      dispatch(onFetchPostForRentHome())
    }
  }
}

const HomeScreenContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeScreen)

export default HomeScreenContainer
