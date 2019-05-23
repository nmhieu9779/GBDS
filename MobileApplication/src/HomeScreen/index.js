import React, { Component } from "react"
import { StyleSheet } from "react-native"
import TopBarMenu from "../Component/top-bar-menu"
import { SafeAreaView } from "react-navigation"
import { faBars, faFilter } from "@fortawesome/free-solid-svg-icons"
import Filter from "./Component/filter"
import AddFloatingButton from "../Component/add-floating-button"

class HomeScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      visiableFilter: false
    }
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <TopBarMenu
          icon={{ left: faBars, right: faFilter }}
          title={"Trang chủ"}
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
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default HomeScreen
