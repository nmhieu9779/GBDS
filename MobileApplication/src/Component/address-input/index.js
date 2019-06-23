import React from "react"
import {connect} from "react-redux"
import {bindActionCreators} from "redux"
import styles from "./styles"
import strings from "./strings"
import {getCity, getDistrict, getWard, getStreet} from "@src/redux/actions"
import {View} from "react-native"
import ComboBox from "@src/component/combobox"
import {cleanObject} from "@src/utilities"

const AddressInput = (props) => {
  const styleCBB = {
    container: styles.containerCombobox,
    combobox: styles.combobox
  }

  const defaultParams = {selected: -1, name: "", type: ""}

  const onChangeSelected = (stateName, data) => {
    let params = {}
    switch (stateName) {
      case "city":
        props.isDistrict && props.getDistrict({cityId: data.id})
        params = {
          city: data,
          district: props.isDistrict && defaultParams,
          ward: props.isWard && defaultParams,
          street: props.isStreet && defaultParams
        }
        break
      case "district":
        props.isWard && props.getWard({cityId: props.city.id, districtId: data.id})
        params = {
          district: data,
          ward: props.isWard && defaultParams,
          street: props.isStreet && defaultParams
        }
        break
      case "ward":
        props.isStreet && props.getStreet({cityId: props.city.id, districtId: props.district.id})
        params = {
          ward: data,
          street: props.isStreet && defaultParams
        }
        break
      case "street":
        params = {
          street: data
        }
        break
      default:
        break
    }
    props.onChangeSelected(cleanObject(params))
  }

  return (
    <View style={styles.container}>
      {props.isCity && (
        <ComboBox
          style={styleCBB}
          data={props.dataCity}
          selected={props.city.selected}
          title={strings.city.title}
          label={strings.city.label}
          onChangeSelected={onChangeSelected.bind(this, "city")}
          enable={true}
          name={props.city.name}
        />
      )}
      {props.isDistrict && (
        <ComboBox
          style={styleCBB}
          data={props.dataDistrict}
          selected={props.district.selected}
          title={strings.district.title}
          label={strings.district.label}
          onChangeSelected={onChangeSelected.bind(this, "district")}
          enable={true}
          name={props.district.name}
        />
      )}
      {props.isWard && (
        <ComboBox
          style={styleCBB}
          data={props.dataWard}
          selected={props.ward.selected}
          title={strings.ward.title}
          label={strings.ward.label}
          onChangeSelected={onChangeSelected.bind(this, "ward")}
          enable={true}
          name={props.ward.name}
        />
      )}
      {props.isStreet && (
        <ComboBox
          style={styleCBB}
          data={props.dataStreet}
          selected={props.street.selected}
          title={strings.street.title}
          label={strings.street.label}
          onChangeSelected={onChangeSelected.bind(this, "street")}
          enable={true}
          name={props.street.name}
        />
      )}
    </View>
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
    dataCity: address.city.success && formatData(address.city.response.content),
    dataDistrict: address.district.success && formatData(address.district.response.content),
    dataWard: address.ward.success && formatData(address.ward.response.content),
    dataStreet: address.street.success && formatData(address.street.response.content)
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
