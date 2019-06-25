import React, {useState} from "react"
import {View, TouchableOpacity, Text, TextInput} from "react-native"
import {connect} from "react-redux"
import {bindActionCreators} from "redux"
import {stylesFor, stylesNeed, styles, stylesGroup} from "./styles"
import AddressInput from "@src/component/address-input"
import SafeAreaView from "react-native-safe-area-view"
import {faWindowClose} from "@fortawesome/free-regular-svg-icons"
import {faCheck} from "@fortawesome/free-solid-svg-icons"
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome"
import ComboBox from "@src/component/combobox"
import stringTypeProduct from "@src/component/type-product/strings"
import {scale, cleanObject} from "@src/utilities"
import TextInputCustom from "@src/component/text-input-custom"
import {
  fetchPostForSale,
  fetchPostForRent,
  fetchPostNeedBuy,
  fetchPostNeedRent,
  editProfile
} from "@src/redux/actions"

const styleCBB = {
  container: styles.containerCombobox,
  combobox: styles.combobox
}

const GroupButton = (props) => {
  const [check, setCheck] = useState(true)

  return (
    <View style={stylesGroup.container}>
      <View style={stylesGroup.groupCheckbox}>
        <TouchableOpacity onPress={() => setCheck(!check)} style={stylesGroup.checkBoxContainer}>
          <View
            style={[
              stylesGroup.checkBox,
              {borderColor: check ? "#2e75ed" : "#a6a6a6", backgroundColor: check ? "#2e75ed" : "transparent"}
            ]}>
            <FontAwesomeIcon size={13} color={"white"} icon={faCheck} />
          </View>
        </TouchableOpacity>
        <Text>{"Lưu tìm kiếm"}</Text>
      </View>
      <View style={stylesGroup.groupBtn}>
        <TouchableOpacity
          onPress={props.onFilter.bind(this, check)}
          style={[stylesGroup.btnContainer, {backgroundColor: "#2e75ed"}]}>
          <Text style={stylesGroup.btnLabel}>{"Tìm kiếm"}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={props.resetFilter.bind()}
          style={[stylesGroup.btnContainer, {backgroundColor: "#F35022"}]}>
          <Text style={stylesGroup.btnLabel}>{"Xoá tìm kiếm"}</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const FilterFor = (props) => {
  const defaultStateFor = {
    name: "",
    address: {
      city: {selected: -1, name: "", type: "", id: ""},
      district: {selected: -1, name: "", type: "", id: ""},
      ward: {selected: -1, name: "", type: "", id: ""},
      street: {selected: -1, name: "", type: "", id: ""}
    },
    productCate: {selected: -1, name: "", type: ""},
    priceUnit: {selected: -1, name: "", type: "", cost: 0},
    minTotalCost: "",
    maxTotalCost: "",
    minArea: "",
    maxArea: ""
  }
  const [state, setState] = useState(() =>
    Object.keys(props.data).length !== 0 ? props.data : defaultStateFor
  )

  onChangeSelected = (stateName, data) => {
    setState({...state, [stateName]: {...state[stateName], ...data}})
  }

  onChangeText = (stateName, data) => {
    setState({...state, [stateName]: data})
  }

  onFilter = (check) => {
    let body = {
      district: state.address.district.id,
      maxArea: Number(state.maxArea) || null,
      maxTotalCost: Number(state.maxTotalCost) * state.priceUnit.cost || null,
      minArea: Number(state.minArea) || null,
      minTotalCost: Number(state.minTotalCost) * state.priceUnit.cost || null,
      name: state.name,
      propertyType: state.productCate.type,
      province: state.address.city.id,
      street: state.address.street.id,
      unit: state.priceUnit.type,
      ward: state.address.ward.id
    }

    const data = {data: state, check: check, body: cleanObject(body)}

    props.onFilter(data)
  }

  return (
    <View style={stylesFor.container}>
      <TextInputCustom
        onChangeText={onChangeText.bind(this, "name")}
        value={state.name}
        width={scale.WIDTH - scale.moderateScale(10)}
        label={"Tên bài viết"}
      />
      <ComboBox
        style={styleCBB}
        data={stringTypeProduct.productCate.data[1][props.screen === "FOR_SALE" ? 0 : 1]}
        selected={state.productCate.selected}
        title={stringTypeProduct.productCate.title}
        label={stringTypeProduct.productCate.label}
        onChangeSelected={onChangeSelected.bind(this, "productCate")}
        enable={true}
        name={state.productCate.name}
      />
      <AddressInput
        isCity={true}
        isDistrict={true}
        isWard={true}
        isStreet={true}
        onChangeSelected={onChangeSelected.bind(this, "address")}
        city={state.address.city}
        district={state.address.district}
        ward={state.address.ward}
        street={state.address.street}
      />
      <View style={stylesFor.priceContainer}>
        <Text style={stylesFor.areaLabel}>{"Mức giá:"}</Text>
        <View style={stylesFor.areaContainer}>
          {!state.isFocused && <Text style={{marginLeft: scale.moderateScale(5)}}>{"Từ"}</Text>}
          <TextInput
            value={state.minTotalCost}
            style={stylesFor.textInput}
            keyboardType={"numeric"}
            onChangeText={onChangeText.bind(this, "minTotalCost")}
            placeholder={"0"}
          />
          <Text>{"đến"}</Text>
          <TextInput
            value={state.maxTotalCost}
            style={stylesFor.textInput}
            keyboardType={"numeric"}
            onChangeText={onChangeText.bind(this, "maxTotalCost")}
            placeholder={"0"}
          />
        </View>
      </View>
      <ComboBox
        style={styleCBB}
        data={stringTypeProduct.priceUnit.data[props.screen === "FOR_SALE" ? 0 : 1]}
        selected={state.priceUnit.selected}
        title={stringTypeProduct.priceUnit.title}
        label={"Đơn vị giá"}
        onChangeSelected={onChangeSelected.bind(this, "priceUnit")}
        enable={true}
        name={state.priceUnit.name}
      />
      <View style={stylesFor.priceContainer}>
        <Text style={stylesFor.areaLabel}>{"Diện tích (m2)"}</Text>
        <View style={stylesFor.areaContainer}>
          <Text style={{marginLeft: scale.moderateScale(5)}}>{"Từ"}</Text>
          <TextInput
            value={state.minArea}
            style={stylesFor.textInput}
            keyboardType={"numeric"}
            onChangeText={onChangeText.bind(this, "minArea")}
            placeholder={"0"}
          />
          <Text>{"đến"}</Text>
          <TextInput
            value={state.maxArea}
            style={stylesFor.textInput}
            keyboardType={"numeric"}
            onChangeText={onChangeText.bind(this, "maxArea")}
            placeholder={"0"}
          />
        </View>
      </View>
      <GroupButton resetFilter={props.resetFilter.bind()} onFilter={onFilter.bind()} />
    </View>
  )
}

const FilterNeed = (props) => {
  const defaultStateNeed = {
    name: "",
    address: {
      city: {selected: -1, name: "", type: "", id: ""},
      district: {selected: -1, name: "", type: "", id: ""}
    },
    productCate: {selected: -1, name: "", type: ""},
    priceUnit: {selected: -1, name: "", type: "", cost: 0},
    minTotalCost: "",
    maxTotalCost: "",
    minArea: "",
    maxArea: ""
  }
  const [state, setState] = useState(() =>
    Object.keys(props.data).length !== 0 ? props.data : defaultStateNeed
  )

  onChangeSelected = (stateName, data) => {
    setState({...state, [stateName]: {...state[stateName], ...data}})
  }

  onChangeText = (stateName, data) => {
    setState({...state, [stateName]: data})
  }
  onFilter = (check) => {
    let body = {
      district: state.address.district.id,
      maxArea: Number(state.maxArea) || null,
      maxTotalCost: Number(state.maxTotalCost) * state.priceUnit.cost || null,
      minArea: Number(state.minArea) || null,
      minTotalCost: Number(state.minTotalCost) * state.priceUnit.cost || null,
      name: state.name,
      propertyType: state.productCate.type,
      province: state.address.city.id,
      unit: state.priceUnit.type
    }

    const data = {data: state, check: check, body: cleanObject(body)}

    props.onFilter(data)
  }

  return (
    <View style={stylesFor.container}>
      <TextInputCustom
        onChangeText={onChangeText.bind(this, "name")}
        value={state.name}
        width={scale.WIDTH - scale.moderateScale(10)}
        label={"Tên bài viết"}
      />
      <ComboBox
        style={styleCBB}
        data={stringTypeProduct.productCate.data[0][props.screen === "NEED_BUY" ? 0 : 1]}
        selected={state.productCate.selected}
        title={stringTypeProduct.productCate.title}
        label={stringTypeProduct.productCate.label}
        onChangeSelected={onChangeSelected.bind(this, "productCate")}
        enable={true}
        name={state.productCate.name}
      />
      <AddressInput
        isCity={true}
        isDistrict={true}
        onChangeSelected={onChangeSelected.bind(this, "address")}
        city={state.address.city}
        district={state.address.district}
      />
      <View style={stylesFor.priceContainer}>
        <Text style={stylesFor.areaLabel}>{"Mức giá:"}</Text>
        <View style={stylesFor.areaContainer}>
          {!state.isFocused && <Text style={{marginLeft: scale.moderateScale(5)}}>{"Từ"}</Text>}
          <TextInput
            value={state.minTotalCost}
            style={stylesFor.textInput}
            keyboardType={"numeric"}
            onChangeText={onChangeText.bind(this, "minTotalCost")}
            placeholder={"0"}
          />
          <Text>{"đến"}</Text>
          <TextInput
            value={state.maxTotalCost}
            style={stylesFor.textInput}
            keyboardType={"numeric"}
            onChangeText={onChangeText.bind(this, "maxTotalCost")}
            placeholder={"0"}
          />
        </View>
      </View>
      <ComboBox
        style={styleCBB}
        data={stringTypeProduct.priceUnit.data[props.screen === "NEED_BUY" ? 0 : 1]}
        selected={state.priceUnit.selected}
        title={stringTypeProduct.priceUnit.title}
        label={"Đơn vị giá"}
        onChangeSelected={onChangeSelected.bind(this, "priceUnit")}
        enable={true}
        name={state.priceUnit.name}
      />
      <View style={stylesFor.priceContainer}>
        <Text style={stylesFor.areaLabel}>{"Diện tích (m2)"}</Text>
        <View style={stylesFor.areaContainer}>
          <Text style={{marginLeft: scale.moderateScale(5)}}>{"Từ"}</Text>
          <TextInput
            value={state.minArea}
            style={stylesFor.textInput}
            keyboardType={"numeric"}
            onChangeText={onChangeText.bind(this, "minArea")}
            placeholder={"0"}
          />
          <Text>{"đến"}</Text>
          <TextInput
            value={state.maxArea}
            style={stylesFor.textInput}
            keyboardType={"numeric"}
            onChangeText={onChangeText.bind(this, "maxArea")}
            placeholder={"0"}
          />
        </View>
      </View>
      <GroupButton onFilter={onFilter.bind()} resetFilter={props.resetFilter.bind()} />
    </View>
  )
}
const Filter = (props) => {
  console.log(props)

  onFilter = (type, params) => {
    const emptyFieldx = {data: {}, body: {}}
    let fieldx = props.fieldx
    if (type === "FILTER") {
      switch (props.navigation.state.params.screen) {
        case "FOR_SALE":
          props.navigation.goBack()
          props.fetchPostForSale({page: 1, size: 10, body: params.body})
          fieldx = {...fieldx, forSale: {data: params.data, body: params.body}}
          break
        case "FOR_RENT":
          props.navigation.goBack()
          props.fetchPostForRent({page: 1, size: 10, body: params.body})
          fieldx = {...fieldx, forRent: {data: params.data, body: params.body}}
          break
        case "NEED_BUY":
          props.navigation.goBack()
          props.fetchPostNeedBuy({page: 1, size: 10, body: params.body})
          fieldx = {...fieldx, needBuy: {data: params.data, body: params.body}}
          break
        case "NEED_RENT":
          props.navigation.goBack()
          props.fetchPostNeedRent({page: 1, size: 10, body: params.body})
          fieldx = {...fieldx, needRent: {data: params.data, body: params.body}}
          break
        default:
          break
      }
    } else {
      switch (props.navigation.state.params.screen) {
        case "FOR_SALE":
          props.navigation.goBack()
          props.fetchPostForSale({page: 1, size: 10, body: {}})
          fieldx = {...fieldx, forSale: emptyFieldx}
          break
        case "FOR_RENT":
          props.navigation.goBack()
          props.fetchPostForRent({page: 1, size: 10, body: {}})
          fieldx = {...fieldx, forRent: emptyFieldx}
          break
        case "NEED_BUY":
          props.navigation.goBack()
          props.fetchPostNeedBuy({page: 1, size: 10, body: {}})
          fieldx = {...fieldx, needBuy: emptyFieldx}
          break
        case "NEED_RENT":
          props.navigation.goBack()
          props.fetchPostNeedRent({page: 1, size: 10, body: {}})
          fieldx = {...fieldx, needRent: emptyFieldx}
          break
        default:
          break
      }
    }
    if (params.check || type === "RESET") {
      props.editProfile({
        body: {fieldx: JSON.stringify(fieldx), email: props.email || email},
        isCreate: false
      })
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.closeContainer}>
        <TouchableOpacity style={styles.icon} onPress={() => props.navigation.goBack()}>
          <FontAwesomeIcon size={20} color={"red"} icon={faWindowClose} />
        </TouchableOpacity>
      </View>
      {props.navigation.state.params.screen === "FOR_SALE" ||
      props.navigation.state.params.screen === "FOR_RENT" ? (
        <FilterFor
          data={
            props.navigation.state.params.screen === "FOR_SALE"
              ? props.fieldx.forSale.data
              : props.fieldx.forRent.data
          }
          onFilter={onFilter.bind(this, "FILTER")}
          screen={props.navigation.state.params.screen}
          resetFilter={onFilter.bind(this, "RESET")}
        />
      ) : (
        <FilterNeed
          data={
            props.navigation.state.params.screen === "NEED_BUY"
              ? props.fieldx.needBuy.data
              : props.fieldx.needRent.data
          }
          onFilter={onFilter.bind(this, "FILTER")}
          screen={props.navigation.state.params.screen}
          resetFilter={onFilter.bind(this, "RESET")}
        />
      )}
    </SafeAreaView>
  )
}

const mapStateToProps = (state) => {
  let fieldx =
    state.userProfile.userProfile.response.content.fieldx &&
    JSON.parse(state.userProfile.userProfile.response.content.fieldx)
  return {
    email: state.auth.signIn.success && state.auth.signIn.response.email,
    fieldx: fieldx
  }
}

const mapDispatchToProps = (dispatch) => {
  let actionCreators = {fetchPostForSale, fetchPostForRent, fetchPostNeedBuy, fetchPostNeedRent, editProfile}
  let actions = bindActionCreators(actionCreators, dispatch)
  return {...actions, dispatch}
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Filter)
