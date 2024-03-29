import React, {useState, useRef, useEffect} from "react"
import {ScrollView, View} from "react-native"
import {connect} from "react-redux"
import {bindActionCreators} from "redux"
import Breadcrumb from "@src/component/breadcrumb"
import TopBarMenu from "@src/component/top-bar-menu"
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons"
import Step1 from "./component/Step1"
import Step2 from "./component/Step2"
import Step3 from "./component/Step3"
import Step4 from "./component/Step4"
import Step5 from "./component/Step5"
import Step6 from "./component/Step6"
import Step7 from "./component/Step7"
import {main as styles} from "./styles"
import {scale} from "@src/utilities"
import {main} from "./string"
import uuid from "react-native-uuid"
import {
  uploadPostFor,
  postFor,
  deleteImagePost,
  resetInfoPostFor,
  fetchPostForSale,
  fetchPostForRent,
  getGeocoding
} from "@src/redux/actions"
import LinearGradient from "react-native-linear-gradient"

const ForNewPost = (props) => {
  const defaultState = {
    step1: {
      name: {value: ""},
      typeProduct: {
        productType: {selected: -1, name: "", type: ""},
        productCate: {selected: -1, name: "", type: ""},
        priceUnit: {selected: -1, name: "", type: "", cost: 0}
      },
      address: {
        city: {selected: -1, name: "", type: "", id: ""},
        district: {selected: -1, name: "", type: "", id: ""},
        ward: {selected: -1, name: "", type: "", id: ""},
        street: {selected: -1, name: "", type: "", id: ""}
      },
      area: {value: ""},
      price: {value: ""},
      number: {value: ""}
    },
    step2: {description: {value: ""}},
    step3: {
      wayIn: {value: ""},
      frontSide: {value: ""},
      furniture: {value: ""},
      direction: {
        direction: {selected: -1, name: ""},
        balconyDirection: {selected: -1, name: ""}
      },
      floors: [{index: 0, description: "Tầng trệt", room: "", bedRoom: "", bathRoom: ""}]
    },
    step4: {
      images: {
        others: []
      }
    },
    step5: {
      coordinate: {latitude: null, longitude: null}
    },
    step6: {
      name: {value: props.step6.name},
      address: {value: props.step6.address},
      phone: {value: props.step6.phone},
      email: {value: props.step6.email}
    },
    step7: {vipType: {id: null, name: "Tin VIP đặc biệt", type: "VIP_S0", selected: 1}},
    id: uuid.v4(),
    step: 0,
    deleteImages: []
  }
  let scrollView = useRef(null)
  const [state, setState] = useState(() => {
    return props.navigation.state.params ? {...props.navigation.state.params, deleteImages: []} : defaultState
  })

  const onChangeData = (stateName, data) => {
    const key = Object.keys(data)[0]
    setState({
      ...state,
      [stateName]: {...state[stateName], [key]: {...state[stateName][key], ...data[key]}}
    })
  }

  const onChangeRoom = (data) => {
    setState({...state, step3: {...state.step3, ...data}})
  }

  const onAddNewRoom = () => {
    setState({
      ...state,
      step3: {
        ...state.step3,
        floors: [
          ...state.step3.floors,
          {
            bathRoom: "",
            bedRoom: "",
            description: state.step3.floors.length === 0 ? "Tầng trệt" : `Tầng ${state.step3.floors.length}`,
            index: state.step3.floors.length,
            room: ""
          }
        ]
      }
    })
  }

  const onPressStepItem = (e) => {
    scrollView.current.scrollTo({
      y: 0,
      x: e * scale.WIDTH,
      Animation: true
    })
    setState({...state, step: e})
  }

  const onPost = () => {
    deleteImages = state.deleteImages
    const fieldx = JSON.stringify(delete state.step && delete state.deleteImages && state)

    const data = {
      description: state.step2.description.value,
      id: state.id,
      name: state.step1.name.value,
      priority: state.step7.vipType.type,
      property: {
        additionContactInfo: {
          address: state.step6.address.value,
          email: state.step6.email.value,
          name: state.step6.name.value,
          phone: state.step6.phone.value
        },
        address: {
          district: state.step1.address.district.id,
          number: state.step1.number.value,
          project: "",
          province: state.step1.address.city.id,
          street: state.step1.address.street.id,
          ward: state.step1.address.ward.id
        },
        area: Number(state.step1.area.value) || 0,
        details: {
          balconyDirection: state.step3.direction.balconyDirection.name,
          direction: state.step3.direction.direction.name,
          elevator: true,
          floors: state.step3.floors,
          frontSide: state.step3.frontSide.value,
          furniture: state.step3.furniture.value,
          wayIn: state.step3.wayIn.value
        },
        images: {
          others: state.step4.images.others
        },
        type: state.step1.typeProduct.productCate.type
      },
      state: "OPEN",
      totalCost:
        state.step1.typeProduct.priceUnit.type === -1
          ? -1
          : (Number(state.step1.price.value) || 0) * state.step1.typeProduct.priceUnit.cost,
      unit: state.step1.typeProduct.priceUnit.type,
      user: props.email,
      fieldx: fieldx
    }
    props.postFor({
      body: data,
      type: state.step1.typeProduct.productType.type,
      isNew: !props.navigation.state.params
    })
    deleteImages.length !== 0 &&
      props.deleteImagePost({
        type: state.step1.typeProduct.productType.type,
        data: deleteImages,
        isNew: !props.navigation.state.params
      })
  }

  useEffect(() => {
    if (props.uploadImageSuccess) {
      setState({
        ...state,
        step4: {
          images: {
            others: state.step4.images.others.concat(props.step4.images)
          }
        }
      })
    }
  }, [props.uploadImageSuccess])

  useEffect(() => {
    getGeo()
  }, [
    state.step1.address.city.selected,
    state.step1.address.district.selected,
    state.step1.address.ward.selected,
    state.step1.address.street.selected
  ])

  useEffect(() => {
    props.getGeocodingSuccess &&
      props.geocoding &&
      setState({
        ...state,
        step5: {coordinate: {latitude: props.geocoding.lat, longitude: props.geocoding.lng}}
      })
  }, [props.getGeocodingSuccess])

  getGeo = () => {
    state.step1.address.city.selected !== -1 &&
      props.getGeocoding(
        `${state.step1.number.value ? state.step1.number.value + ", " : ""}${
          state.step1.address.street.selected !== -1 ? "đường " + state.step1.address.street.name + ", " : ""
        }${state.step1.address.ward.selected !== -1 ? state.step1.address.ward.name + ", " : ""}${
          state.step1.address.district.selected !== -1 ? state.step1.address.district.name + ", " : ""
        }${state.step1.address.city.selected !== -1 && state.step1.address.city.name}`
      )
  }

  const onDeleteImages = (index) => {
    let deleteImages = state.deleteImages.concat([state.step4.images.others[index]])
    let images = state.step4.images.others
    images.splice(index, 1)
    setState({
      ...state,
      step4: {
        images: {
          others: images
        }
      },
      deleteImages: deleteImages
    })
  }

  useEffect(() => {
    if (props.postSuccess && !props.navigation.state.params) {
      if (state.step1.typeProduct.productType.type === "SALE") {
        props.navigation.navigate("NewFeedForSale")
        props.fetchPostForSale({page: 1, size: 10})
      } else {
        props.navigation.navigate("NewFeedForRent")
        props.fetchPostForRent({page: 1, size: 10})
      }
      props.resetInfoPostFor()
    } else if (props.postSuccess && props.navigation.state.params) {
      props.navigation.goBack()
      props.resetInfoPostFor()
    }
  }, [props.postSuccess])

  return (
    <LinearGradient style={styles.for_sale_post_container} colors={["#5c6099", "#089a9a"]}>
      <TopBarMenu
        icon={[{icon: faArrowLeft}]}
        title={"Đăng bài mua"}
        onPress={() => props.navigation.goBack()}
      />
      <ScrollView
        ref={scrollView}
        onMomentumScrollEnd={(e) => {
          setState({...state, step: parseInt(e.nativeEvent.contentOffset.x / scale.WIDTH + 0.1)})
        }}
        pagingEnabled={true}
        horizontal={true}>
        <Step1
          onChangeData={onChangeData.bind(this, "step1")}
          name={state.step1.name.value}
          area={state.step1.area.value}
          price={state.step1.price.value}
          number={state.step1.number.value}
          typeProduct={state.step1.typeProduct}
          address={state.step1.address}
          postTypeId={1}
          blur={getGeo.bind()}
        />
        <Step2 onChangeData={onChangeData.bind(this, "step2")} description={state.step2.description.value} />
        <Step3
          onChangeData={onChangeData.bind(this, "step3")}
          frontSide={state.step3.frontSide.value}
          wayIn={state.step3.wayIn.value}
          furniture={state.step3.furniture.value}
          direction={state.step3.direction}
          roomNumber={state.step3.floors}
          onChangeRoom={onChangeRoom.bind(this)}
          onAddNewRoom={onAddNewRoom.bind()}
        />
        <Step4
          onUpload={(e) => {
            props.uploadPostFor({formData: e, id: state.id})
          }}
          images={state.step4.images.others}
          deleteImage={(item) => {
            onDeleteImages(item.index)
          }}
        />
        <Step5
          coordinate={
            state.step5.coordinate.latitude && state.step5.coordinate.longitude && state.step5.coordinate
          }
          address={props.address || ""}
        />
        <Step6
          onChangeData={onChangeData.bind(this, "step6")}
          name={state.step6.name.value}
          address={state.step6.address.value}
          phone={state.step6.phone.value}
          email={state.step6.email.value}
        />
        <Step7
          onChangeData={onChangeData.bind(this, "step7")}
          vipType={state.step7.vipType}
          onPress={onPost.bind()}
          isNew={!props.navigation.state.params}
        />
      </ScrollView>
      <Breadcrumb
        itemSelected={state.step}
        onItemPress={(e) => {
          onPressStepItem(e)
        }}
        data={main.labelStep}
      />
    </LinearGradient>
  )
}

const mapStateToProps = (state) => {
  const userProfile = state.userProfile.userProfile.response.content
  return {
    step6: {
      name: userProfile.name,
      address: userProfile.address,
      phone: userProfile.phone,
      email: userProfile.email
    },
    step4: {
      images: state.postFor.uploadPostFor.success ? state.postFor.uploadPostFor.response.content : []
    },
    email: state.auth.signIn.success && state.auth.signIn.response.email,
    postSuccess: state.postFor.postFor.success,
    uploadImageSuccess: state.postFor.uploadPostFor.success,
    getGeocodingSuccess: state.postFor.geocoding.success,
    geocoding:
      state.postFor.geocoding.success &&
      state.postFor.geocoding.response.results.lenght !== 0 &&
      state.postFor.geocoding.response.results[0].geometry &&
      state.postFor.geocoding.response.results[0].geometry.location,
    address: state.postFor.geocoding.success && state.postFor.geocoding.response.results[0].formatted_address
  }
}

const mapDispatchToProps = (dispatch) => {
  let actionCreators = {
    uploadPostFor,
    postFor,
    deleteImagePost,
    resetInfoPostFor,
    fetchPostForSale,
    fetchPostForRent,
    getGeocoding
  }
  let actions = bindActionCreators(actionCreators, dispatch)
  return {...actions, dispatch}
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ForNewPost)
