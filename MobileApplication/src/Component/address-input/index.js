import React, { useState, useEffect } from "react"
import { connect } from "react-redux"
import { SafeAreaView } from "react-navigation"
import ComboBoxDetail from "../combobox-detail"
import styles from "./styles"
import strings from "./strings"
import {
  getCityAction,
  getDistrictAction,
  getWardAction,
  getstreetAction
} from "./redux/actions"

const AddressInput = ({
  city,
  isCity,
  getCity,
  district,
  isDistrict,
  getDistrict,
  ward,
  isWard,
  getWard,
  street,
  isStreet,
  getStreet
}) => {
  const [citySelected, setCitySelected] = useState(-1)
  const [districtSelected, setDistrictSelected] = useState(-1)
  const [wardSelected, setWardSelected] = useState(-1)
  const [streetSelected, setStreetSelected] = useState(-1)

  useEffect(() => isCity && getCity(), [city.length])

  return (
    <SafeAreaView style={styles.container}>
      <ComboBoxDetail
        is={isCity}
        data={city}
        selected={citySelected}
        title={strings.city.title}
        label={strings.city.label}
        onChangeSelected={selected => {
          setCitySelected(selected)
          isDistrict && getDistrict(city[selected].id)
        }}
      />
      <ComboBoxDetail
        is={isDistrict}
        data={district}
        selected={districtSelected}
        title={strings.district.title}
        label={strings.district.label}
        onChangeSelected={selected => {
          setDistrictSelected(selected)
          isWard && getWard(city[citySelected].id, district[selected].id)
        }}
      />
      <ComboBoxDetail
        is={isWard}
        data={ward}
        selected={wardSelected}
        title={strings.ward.title}
        label={strings.ward.label}
        onChangeSelected={selected => {
          setWardSelected(selected)
          isStreet &&
            getStreet(city[citySelected].id, district[districtSelected].id)
        }}
      />
      <ComboBoxDetail
        is={isStreet}
        data={street}
        selected={streetSelected}
        title={strings.street.title}
        label={strings.street.label}
        onChangeSelected={selected => {
          setStreetSelected(selected)
        }}
      />
    </SafeAreaView>
  )
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
