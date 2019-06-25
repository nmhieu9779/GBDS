import React, {useState, useRef, useEffect} from "react"
import {ScrollView} from "react-native"
import {connect} from "react-redux"
import {bindActionCreators} from "redux"
import SafeAreaView from "react-native-safe-area-view"
import Breadcrumb from "@src/component/breadcrumb"
import TopBarMenu from "@src/component/top-bar-menu"
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons"
import {styles_main as styles} from "./styles"
import {stringMain as string} from "./string"
import Step1 from "./component/Step1"
import Step2 from "./component/Step2"
import Step3 from "./component/Step3"
import {scale} from "@src/utilities"
import {postNeed, fetchPostNeedBuy, fetchPostNeedRent, resetInfoPostNeed} from "@src/redux/actions"
import LinearGradient from "react-native-linear-gradient"

const NeedNewPost = (props) => {
  const defaultState = {
    step1: {
      address: {
        city: {selected: -1, name: "", type: ""},
        district: {selected: -1, name: "", type: ""}
      },
      typeProduct: {
        productType: {selected: -1, name: "", type: ""},
        productCate: {selected: -1, name: "", type: ""},
        area: {selected: -1, name: "", type: ""},
        price: {selected: -1, name: "", type: ""}
      }
    },
    step2: {productTitle: {value: ""}, description: {value: ""}},
    step3: {
      name: {value: props.step3.name},
      address: {value: props.step3.address},
      phone: {value: props.step3.phone},
      email: {value: props.step3.email}
    },
    step: 0
  }
  const [state, setState] = useState(() =>
    props.navigation.state.params ? {...props.navigation.state.params, step: 0} : defaultState
  )
  let scrollView = useRef(null)

  const onChangeData = (stateName, data) => {
    const key = Object.keys(data)[0]
    setState({
      ...state,
      [stateName]: {...state[stateName], [key]: {...state[stateName][key], ...data[key]}}
    })
  }

  const onPost = () => {
    const fieldx = JSON.stringify(delete state.step && state)
    const data = {
      additionContactInfo: {
        address: state.step3.address.value,
        email: state.step3.email.value,
        name: state.step3.name.value,
        phone: state.step3.phone.value
      },
      description: state.step2.description.value,
      district: state.step1.address.district.id,
      maxArea: state.step1.typeProduct.area.max || state.step1.typeProduct.area.type,
      maxTotalCost: state.step1.typeProduct.price.max || state.step1.typeProduct.price.type,
      minArea: state.step1.typeProduct.area.min || state.step1.typeProduct.area.type,
      minTotalCost: state.step1.typeProduct.price.min || state.step1.typeProduct.price.type,
      name: state.step2.productTitle.value,
      propertyType: state.step1.typeProduct.productCate.type,
      province: state.step1.address.city.id,
      state: "OPEN",
      priority: "VIP_S0",
      user: props.email,
      fieldx: fieldx
    }
    const dataPost = props.navigation.state.params ? {...data, id: state.id} : data

    props.postNeed({
      body: dataPost,
      type: state.step1.typeProduct.productType.type,
      isNew: !props.navigation.state.params
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

  useEffect(() => {
    if (props.success && !props.navigation.state.params) {
      if (state.step1.typeProduct.productType.type === "BUY") {
        props.navigation.navigate("NewFeedNeedBuy")
        props.fetchPostNeedBuy({page: 1, size: 10})
      } else {
        props.navigation.navigate("NewFeedNeedRent")
        props.fetchPostNeedRent({page: 1, size: 10})
      }
      props.resetInfoPostNeed()
    } else if (props.success && props.navigation.state.params) {
      props.navigation.goBack()
      props.resetInfoPostNeed()
    }
  }, [props.success])

  return (
    <LinearGradient style={styles.container} colors={["#5c6099", "#089a9a"]}>
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
          onChangeSelected={onChangeData.bind(this, "step1")}
          typeProduct={state.step1.typeProduct}
          address={state.step1.address}
          postTypeId={0}
        />
        <Step2
          onChangeText={onChangeData.bind(this, "step2")}
          productTitle={state.step2.productTitle.value}
          description={state.step2.description.value}
        />
        <Step3
          onChangeText={onChangeData.bind(this, "step3")}
          onPress={onPost.bind()}
          name={state.step3.name.value}
          address={state.step3.address.value}
          phone={state.step3.phone.value}
          email={state.step3.email.value}
          isNew={!props.navigation.state.params}
        />
      </ScrollView>
      <Breadcrumb
        itemSelected={state.step}
        onItemPress={(e) => {
          onPressStepItem(e)
        }}
        data={string.breadcrumb}
      />
    </LinearGradient>
  )
}

const mapStateToProps = (state) => {
  const userProfile = state.userProfile.userProfile.response.content
  const newData = {
    email: state.auth.signIn.success && state.auth.signIn.response.email,
    step3: {
      name: userProfile.name,
      address: userProfile.address,
      phone: userProfile.phone,
      email: userProfile.email
    },
    success: state.postNeed.postNeed.success
  }
  return newData
}

const mapDispatchToProps = (dispatch) => {
  let actionCreators = {postNeed, fetchPostNeedBuy, fetchPostNeedRent, resetInfoPostNeed}
  let actions = bindActionCreators(actionCreators, dispatch)
  return {...actions, dispatch}
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NeedNewPost)
