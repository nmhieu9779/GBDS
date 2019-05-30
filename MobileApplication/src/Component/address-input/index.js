import React, {useState, useEffect} from "react"
import {connect} from "react-redux"
import SafeAreaView from "react-native-safe-area-view"
import ComboBoxDetail from "@src/component/combobox-detail"
import styles from "./styles"
import strings from "./strings"
import {getCityAction, getDistrictAction, getWardAction, getstreetAction} from "./redux/actions"

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

  useEffect(() => {
    city.length === 0 && isCity && getCity()
  }, [city.length === 0])

  return (
    <SafeAreaView style={styles.container}>
      <ComboBoxDetail
        is={isCity}
        data={city}
        selected={citySelected}
        title={strings.city.title}
        label={strings.city.label}
        onChangeSelected={(selected) => {
          setCitySelected(selected)
          setDistrictSelected(-1)
          setWardSelected(-1)
          setStreetSelected(-1)
          isDistrict && getDistrict(city[selected].id)
        }}
        enable={true}
      />
      <ComboBoxDetail
        is={isDistrict}
        data={district}
        selected={districtSelected}
        title={strings.district.title}
        label={strings.district.label}
        onChangeSelected={(selected) => {
          setDistrictSelected(selected)
          setWardSelected(-1)
          setStreetSelected(-1)
          isWard && getWard(city[citySelected].id, district[selected].id)
        }}
        enable={citySelected !== -1}
      />
      <ComboBoxDetail
        is={isWard}
        data={ward}
        selected={wardSelected}
        title={strings.ward.title}
        label={strings.ward.label}
        onChangeSelected={(selected) => {
          setWardSelected(selected)
          setStreetSelected(-1)
          isStreet && getStreet(city[citySelected].id, district[districtSelected].id)
        }}
        enable={districtSelected !== -1}
      />
      <ComboBoxDetail
        is={isStreet}
        data={street}
        selected={streetSelected}
        title={strings.street.title}
        label={strings.street.label}
        onChangeSelected={(selected) => {
          setStreetSelected(selected)
        }}
        enable={wardSelected !== -1}
      />
    </SafeAreaView>
  )
}

const mapStateToProps = ({addressReducers}) => {
  return {
    city: addressReducers.city,
    district: addressReducers.district,
    ward: addressReducers.ward,
    street: addressReducers.street
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getCity: () => {
      dispatch(getCityAction())
    },
    getDistrict: (cityId) => {
      dispatch(getDistrictAction(cityId))
    },
    getWard: (cityId, districtId) => {
      dispatch(getWardAction({cityId, districtId}))
    },
    getStreet: (cityId, districtId) => {
      dispatch(getstreetAction({cityId, districtId}))
    }
  }
}

const AddressInputContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddressInput)

export default AddressInputContainer
