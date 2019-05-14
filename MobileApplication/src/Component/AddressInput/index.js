import React, { Component } from "react"
import { Platform, StyleSheet } from "react-native"
import { connect } from "react-redux"
import { SafeAreaView } from "react-navigation"
import ComboBox from "../ComboBox"
import constants from "../../Constant"
import {
  getCityAction,
  getDistrictAction,
  getWardAction,
  getstreetAction
} from "./addressAction"

class AddressInput extends Component {
  constructor(props) {
    super(props)
    this.state = {
      citySelected: -1,
      districtSelected: -1,
      wardSelected: -1,
      streetSelected: -1
    }
    this.combobox = {
      container: {
        width: constants.width,
        height: null
      },
      combobox: { flex: 2 }
    }
  }

  componentDidMount = () => {
    this.props.getCity()
  }

  render() {
    const {
      city,
      district,
      ward,
      street,
      getDistrict,
      getWard,
      getStreet
    } = this.props
    const {
      citySelected,
      districtSelected,
      wardSelected,
      streetSelected
    } = this.state
    return (
      <SafeAreaView style={styles.container}>
        <ComboBox
          style={this.combobox}
          data={city}
          selected={citySelected}
          title={constants.address.city.title}
          label={constants.address.city.label}
          onChangeSelected={selected => {
            this.onChangeSelected(selected, "citySelected")
            getDistrict(city[selected].id)
          }}
        />
        <ComboBox
          style={this.combobox}
          data={district}
          selected={districtSelected}
          title={constants.address.district.title}
          label={constants.address.district.label}
          onChangeSelected={selected => {
            this.onChangeSelected(selected, "districtSelected")
            getWard(city[citySelected].id, district[selected].id)
          }}
        />
        <ComboBox
          style={this.combobox}
          data={ward}
          selected={wardSelected}
          title={constants.address.ward.title}
          label={constants.address.ward.label}
          onChangeSelected={selected => {
            this.onChangeSelected(selected, "wardSelected")
            getStreet(city[citySelected].id, district[districtSelected].id)
          }}
        />
        <ComboBox
          style={this.combobox}
          data={street}
          selected={streetSelected}
          title={constants.address.street.title}
          label={constants.address.street.label}
          onChangeSelected={selected => {
            this.onChangeSelected(selected, "streetSelected")
          }}
        />
      </SafeAreaView>
    )
  }

  onChangeSelected = (selected, name) => this.setState({ [name]: selected })
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

const mapStateToProps = ({ addressReducers }) => {
  return {
    city: addressReducers.city,
    district: addressReducers.district,
    ward: addressReducers.ward,
    street: addressReducers.street
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getCity: () => {
      dispatch(getCityAction())
    },
    getDistrict: cityId => {
      dispatch(getDistrictAction(cityId))
    },
    getWard: (cityId, districtId) => {
      dispatch(getWardAction({ cityId, districtId }))
    },
    getStreet: (cityId, districtId) => {
      dispatch(getstreetAction({ cityId, districtId }))
    }
  }
}

const AddressInputContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddressInput)

export default AddressInputContainer
