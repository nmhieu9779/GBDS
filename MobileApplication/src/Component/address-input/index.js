import React, { Component } from "react"
import { connect } from "react-redux"
import { SafeAreaView } from "react-navigation"
import ComboBox from "../combobox"
import styles from "./styles"
import strings from "./strings"
import {
  getCityAction,
  getDistrictAction,
  getWardAction,
  getstreetAction
} from "./redux/addressAction"

class AddressInput extends Component {
  constructor(props) {
    super(props)
    this.state = {
      citySelected: -1,
      districtSelected: -1,
      wardSelected: -1,
      streetSelected: -1
    }
  }

  componentDidMount = () => {
    this.props.city.length === 0 && this.props.isCity && this.props.getCity()
  }

  render() {
    const {
      city,
      district,
      ward,
      street,
      getDistrict,
      getWard,
      getStreet,
      isCity,
      isDistrict,
      isWard,
      isStreet
    } = this.props
    const {
      citySelected,
      districtSelected,
      wardSelected,
      streetSelected
    } = this.state
    return (
      <SafeAreaView style={styles.container}>
        {isCity && (
          <ComboBox
            style={{
              container: styles.containerCombobox,
              combobox: styles.combobox
            }}
            data={city}
            selected={citySelected}
            title={strings.city.title}
            label={strings.city.label}
            onChangeSelected={selected => {
              this.onChangeSelected(selected, "citySelected")
              isDistrict && getDistrict(city[selected].id)
            }}
          />
        )}
        {isDistrict && (
          <ComboBox
            style={{
              container: styles.containerCombobox,
              combobox: styles.combobox
            }}
            data={district}
            selected={districtSelected}
            title={strings.district.title}
            label={strings.district.label}
            onChangeSelected={selected => {
              this.onChangeSelected(selected, "districtSelected")
              isWard && getWard(city[citySelected].id, district[selected].id)
            }}
          />
        )}
        {isWard && (
          <ComboBox
            style={{
              container: styles.containerCombobox,
              combobox: styles.combobox
            }}
            data={ward}
            selected={wardSelected}
            title={strings.ward.title}
            label={strings.ward.label}
            onChangeSelected={selected => {
              this.onChangeSelected(selected, "wardSelected")
              isStreet &&
                getStreet(city[citySelected].id, district[districtSelected].id)
            }}
          />
        )}
        {isStreet && (
          <ComboBox
            style={{
              container: styles.containerCombobox,
              combobox: styles.combobox
            }}
            data={street}
            selected={streetSelected}
            title={strings.street.title}
            label={strings.street.label}
            onChangeSelected={selected => {
              this.onChangeSelected(selected, "streetSelected")
            }}
          />
        )}
      </SafeAreaView>
    )
  }

  onChangeSelected = (selected, name) => {
    this.setState({ [name]: selected }, () => {
      const { city, district, ward, street } = this.props
      const {
        citySelected,
        districtSelected,
        wardSelected,
        streetSelected
      } = this.state
      streetAddress =
        streetSelected != -1 && street[streetSelected].label + ", "
      wardAddress = wardSelected != -1 && ward[wardSelected].label + ", "
      districtAddress =
        districtSelected != -1 && district[districtSelected].label + ", "
      cityAddress = citySelected != -1 && city[citySelected].label
      const address =
        streetAddress + wardAddress + districtAddress + cityAddress
      this.props.onChangeAddress(address)
    })
  }
}

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
