import React, {useState, useEffect} from "react"
import {connect} from "react-redux"
import {bindActionCreators} from "redux"
import SafeAreaView from "react-native-safe-area-view"
import ComboBoxDetail from "@src/component/combobox-detail"
import styles from "./styles"
import strings from "./strings"
import {getCity, getDistrict, getWard, getStreet} from "@src/redux/actions"
import {cleanObject} from "@src/utilities/clean-object"

const AddressInput = (props) => {
  const defaultState = {
    id: null,
    name: "",
    type: null,
    selected: -1
  }
  const [city, setCity] = useState(defaultState)
  const [district, setDistrict] = useState(defaultState)
  const [ward, setWard] = useState(defaultState)
  const [street, setStreet] = useState(defaultState)

  useEffect(() => {
    !props.city && props.getCity()
  }, [])

  useEffect(() => {
    props.onChangeAddress({
      data: cleanObject({
        city: props.isCity && city,
        district: props.isDistrict && district,
        ward: props.isWard && ward,
        street: props.isStreet && street
      }),
      name: `${street.name}${street.name && ", "}${ward.name}${ward.name && ", "}${
        district.name
      }${district.name && ", "} ${city.name}`
    })
  }, [city, district, ward, street])

  const onChangeSelected = ({id, name, type, selected, stateName}) => {
    switch (stateName) {
      case "CITY":
        setCity({...city, id: id, name: name, type: type, selected: selected})
        setDistrict(defaultState)
        setWard(defaultState)
        setStreet(defaultState)
        props.isDistrict && props.getDistrict({cityId: id})
        break
      case "DISTRICT":
        setDistrict({...district, id: id, name: name, type: type, selected: selected})
        setWard(defaultState)
        setStreet(defaultState)
        props.isWard && props.getWard({cityId: city.id, districtId: id})
        break
      case "WARD":
        setWard({...ward, id: id, name: name, type: type, selected: selected})
        setStreet(defaultState)
        props.isStreet && props.getStreet({cityId: city.id, districtId: district.id})
        break
      case "STREET":
        setStreet({...ward, id: id, name: name, type: type, selected: selected})
        break
      default:
        break
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <ComboBoxDetail
        is={props.isCity}
        data={props.city}
        selected={city.selected}
        title={strings.city.title}
        label={strings.city.label}
        name={city.name}
        onChangeSelected={(e) => onChangeSelected({...e, stateName: "CITY"})}
        enable={true}
      />
      <ComboBoxDetail
        is={props.isDistrict}
        data={props.district}
        selected={district.selected}
        title={strings.district.title}
        label={strings.district.label}
        name={district.name}
        onChangeSelected={(e) => onChangeSelected({...e, stateName: "DISTRICT"})}
        enable={city.elected !== -1}
      />
      <ComboBoxDetail
        is={props.isWard}
        data={props.ward}
        selected={ward.selected}
        title={strings.ward.title}
        label={strings.ward.label}
        name={ward.name}
        onChangeSelected={(e) => onChangeSelected({...e, stateName: "WARD"})}
        enable={district.selected !== -1}
      />
      <ComboBoxDetail
        is={props.isStreet}
        data={props.street}
        selected={street.selected}
        title={strings.street.title}
        label={strings.street.label}
        name={street.name}
        onChangeSelected={(e) => onChangeSelected({...e, stateName: "STREET"})}
        enable={ward.selected !== -1}
      />
    </SafeAreaView>
  )
}

const mapStateToProps = ({address}) => {
  const formatData = (data) =>
    data.map((item) => ({
      id: item.id,
      label: item.name,
      type: item.code
    }))
  return {
    city: address.city.success && formatData(address.city.response.content),
    district: address.district.success && formatData(address.district.response.content),
    ward: address.ward.success && formatData(address.ward.response.content),
    street: address.street.success && formatData(address.street.response.content)
  }
}

const mapDispatchToProps = (dispatch) => {
  let actionCreators = {
    getCity,
    getDistrict,
    getWard,
    getStreet
  }
  let actions = bindActionCreators(actionCreators, dispatch)
  return {...actions, dispatch}
}

const AddressInputContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddressInput)

export default AddressInputContainer
