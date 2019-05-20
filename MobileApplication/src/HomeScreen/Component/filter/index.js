import React, { Component } from "react"
import { Modal, TouchableOpacity } from "react-native"
import { SafeAreaView } from "react-navigation"
import SafeAreaViewBoxShadow from "../../../Component/safe-area-view-box-shadow"
import AddressInput from "../../../Component/address-input"
import ComboBox from "../../../Component/combobox"
import styles from "./styles"
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome"
import { faSortUp } from "@fortawesome/free-solid-svg-icons"

class FilterContainer extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <SafeAreaViewBoxShadow style={{ flex: 1 }}>
        <FontAwesomeIcon
          size={50}
          style={{ position: "absolute", top: -20, right: 2 }}
          icon={faSortUp}
          color={"white"}
        />
        <AddressInput
          isCity={true}
          isDistrict={true}
          onChangeAddress={() => {}}
        />
      </SafeAreaViewBoxShadow>
    )
  }
}

class Filter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      visiable: false
    }
  }

  componentWillMount = () => {
    this.setState({ visiable: this.props.visiable })
  }

  componentDidUpdate = prevProps => {
    if (prevProps.visiable != this.props.visiable) {
      this.setState({ visiable: this.props.visiable })
    }
  }

  render() {
    return (
      <Modal
        visible={this.state.visiable}
        transparent={true}
        animationType={"slide"}
      >
        <SafeAreaView style={{ flex: 1 }}>
          <TouchableOpacity
            onPress={() => this.props.onPressClose()}
            activeOpacity={1}
            style={[styles.area_tranparent, { height: 56 }]}
          />
          <FilterContainer />
          <TouchableOpacity
            onPress={() => this.props.onPressClose()}
            activeOpacity={1}
            style={[styles.area_tranparent, { flex: 2 }]}
          />
        </SafeAreaView>
      </Modal>
    )
  }
}

export default Filter
