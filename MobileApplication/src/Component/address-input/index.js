import React, {useState, useEffect} from "react"
import {connect} from "react-redux"
import SafeAreaView from "react-native-safe-area-view"
import ComboBoxDetail from "@src/component/combobox-detail"
import styles from "./styles"
import strings from "./strings"
import {getCity, getDistrict, getWard, getStreet} from "./redux/actions"

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
  getStreet,
  onChangeAddress
}) => {
  const [citySelected, setCitySelected] = useState(-1)
  const [districtSelected, setDistrictSelected] = useState(-1)
  const [wardSelected, setWardSelected] = useState(-1)
  const [streetSelected, setStreetSelected] = useState(-1)

  const [cityId, setCityId] = useState(-1)
  const [districtId, setDistrictId] = useState(-1)
  const [wardId, setWardId] = useState(-1)
  const [streetId, setStreetId] = useState(-1)

  const [cityName, setCityName] = useState("")
  const [districtName, setDistrictName] = useState("")
  const [wardName, setWardName] = useState("")
  const [streetName, setStreetName] = useState("")

  useEffect(() => {
    city.length === 0 && isCity && getCity()
  }, [city.length === 0])

  useEffect(() => {
    onChangeAddress({
      address: {province: cityId, district: districtId, ward: wardId, street: streetId},
      name: `${streetName}${streetName && ", "}${wardName}${wardName && ", "}${districtName}${districtName &&
        ", "} ${cityName}`
    })
  }, [cityName, districtName, wardName, streetName])

  return (
    <SafeAreaView style={styles.container}>
      <ComboBoxDetail
        is={isCity}
        data={city}
        selected={citySelected}
        title={strings.city.title}
        label={strings.city.label}
        name={cityName}
        onChangeSelected={({id, name, selected}) => {
          setCitySelected(selected)
          setCityId(id)
          setCityName(name)
          setDistrictSelected(-1)
          setWardSelected(-1)
          setStreetSelected(-1)
          isDistrict && getDistrict(id)
        }}
        enable={true}
      />
      <ComboBoxDetail
        is={isDistrict}
        data={district}
        selected={districtSelected}
        title={strings.district.title}
        label={strings.district.label}
        name={districtName}
        onChangeSelected={({id, name, selected}) => {
          setDistrictSelected(selected)
          setDistrictId(id)
          setDistrictName(name)
          setWardSelected(-1)
          setStreetSelected(-1)
          isWard && getWard(cityId, id)
        }}
        enable={citySelected !== -1}
      />
      <ComboBoxDetail
        is={isWard}
        data={ward}
        selected={wardSelected}
        title={strings.ward.title}
        label={strings.ward.label}
        name={wardName}
        onChangeSelected={({id, name, selected}) => {
          setWardSelected(selected)
          setWardId(id)
          setWardName(name)
          setStreetSelected(-1)
          isStreet && getStreet(cityId, districtId)
        }}
        enable={districtSelected !== -1}
      />
      <ComboBoxDetail
        is={isStreet}
        data={street}
        selected={streetSelected}
        title={strings.street.title}
        label={strings.street.label}
        name={streetName}
        onChangeSelected={({id, name, selected}) => {
          setStreetSelected(selected)
          setStreetId(id)
          setStreetName(name)
        }}
        enable={wardSelected !== -1}
      />
    </SafeAreaView>
  )
}

const mapStateToProps = ({address}) => {
  return {
    city: address.city,
    district: address.district,
    ward: address.ward,
    street: address.street
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getCity: () => {
      dispatch(getCity())
    },
    getDistrict: (cityId) => {
      dispatch(getDistrict(cityId))
    },
    getWard: (cityId, districtId) => {
      dispatch(getWard({cityId, districtId}))
    },
    getStreet: (cityId, districtId) => {
      dispatch(getStreet({cityId, districtId}))
    }
  }
}

const AddressInputContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddressInput)

export default AddressInputContainer
