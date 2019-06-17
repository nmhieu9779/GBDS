import React, {useState, useRef} from "react"
import {ScrollView} from "react-native"
import {connect} from "react-redux"
import {bindActionCreators} from "redux"
import SafeAreaView from "react-native-safe-area-view"
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
import {WIDTH} from "@src/utilities/scale"
import {main} from "./string"
import {withNavigationFocus} from "react-navigation"
import uuid from "react-native-uuid"
import {uploadPostFor, postFor} from "@src/redux/actions"

const ForNewPost = (props) => {
  const [step, setStep] = useState(0)
  const [dataPost, setDataPost] = useState({step1: {}, step2: {}, step3: {}, step6: {}, step7: {}})
  const [id] = useState(uuid.v4())
  let scrollView = useRef(null)

  const onPressStepItem = (e) => {
    scrollView.current.scrollTo({
      y: 0,
      x: e * WIDTH,
      Animation: true
    })
    setStep(e)
  }

  const onChangeData = (data) => {
    setDataPost({...dataPost, ...data})
  }
  const onPost = () => {
    const data = {
      description: dataPost.step2.description,
      id: id,
      name: dataPost.step1.productTitle,
      priority: dataPost.step7.vipType.type,
      property: {
        additionContactInfo: {
          address: dataPost.step6.address,
          email: dataPost.step6.email,
          name: dataPost.step6.name,
          phone: dataPost.step6.phoneNumber
        },
        address: {
          district: dataPost.step1.address.district.id,
          number: dataPost.step1.homeNumber,
          project: "",
          province: dataPost.step1.address.city.id,
          street: dataPost.step1.address.street.id,
          ward: dataPost.step1.address.ward.id
        },
        area: dataPost.step1.area,
        details: {
          balconyDirection: dataPost.step3.direction.balconyDirection,
          direction: dataPost.step3.direction.direction,
          elevator: true,
          floors: dataPost.step3.floors,
          frontSide: dataPost.step3.widthState,
          furniture: dataPost.step3.other,
          wayIn: dataPost.step3.landWidth
        },
        images: {
          others: props.step4.images
        },
        type: dataPost.step1.typeProduct.productCate.type
      },
      state: "OPEN",
      totalCost: dataPost.step1.price,
      unit: dataPost.step1.typeProduct.name,
      user: props.email
    }
    // const data = {
    //   description: "Ndiwbc",
    //   id: id,
    //   name: "Hiếu bán nhà :3",
    //   priority: "VIP_S0",
    //   property: {
    //     additionContactInfo: {
    //       address: "Bla vla",
    //       email: "hieu@a.b",
    //       name: "Nguyễn minh hiếu",
    //       phone: "0706216519"
    //     },
    //     address: {
    //       district: 3,
    //       number: "15/2",
    //       project: "",
    //       province: 1,
    //       street: 1099,
    //       ward: 29
    //     },
    //     area: 16,
    //     details: {
    //       balconyDirection: "Tây",
    //       direction: "Đông",
    //       elevator: true,
    //       floors: [
    //         {
    //           description: "Tầng trệt",
    //           index: 0,
    //           bathRoom: 2,
    //           bedRoom: 1,
    //           room: 8
    //         },
    //         {
    //           description: "Tầng 1",
    //           index: 1,
    //           bathRoom: 0,
    //           bedRoom: 1,
    //           room: 5
    //         }
    //       ],
    //       frontSide: 11,
    //       furniture: "K cóa",
    //       wayIn: 12
    //     },
    //     images: {
    //       others: [
    //         "https://s3-ap-southeast-1.amazonaws.com/t-grre-storage/617d1389-4afd-4427-a…fc49c6246/property/images/others/25f463e5-8b10-4254-8736-79b54429331c.jpeg",
    //         "https://s3-ap-southeast-1.amazonaws.com/t-grre-storage/617d1389-4afd-4427-a…fc49c6246/property/images/others/25ec70d5-f66d-49f9-9d67-c3da77faf6ba.jpeg",
    //         "https://s3-ap-southeast-1.amazonaws.com/t-grre-storage/617d1389-4afd-4427-a…fc49c6246/property/images/others/1f7b9b32-020b-4b58-87e2-05383ebff272.jpeg",
    //         "https://s3-ap-southeast-1.amazonaws.com/t-grre-storage/617d1389-4afd-4427-a…fc49c6246/property/images/others/dae68518-8e75-46ab-9ecf-34359344a74d.jpeg"
    //       ]
    //     },
    //     type: "OFFICE"
    //   },
    //   state: "OPEN",
    //   totalCost: 50
    // }
    props.postFor({body: data, type: dataPost.step1.typeProduct.productType.id === 2 ? "SALE" : "RENT"})
  }

  return (
    <SafeAreaView style={styles.for_sale_post_container}>
      <TopBarMenu
        icon={[{icon: faArrowLeft}]}
        title={"Đăng bài mua"}
        onPress={() => props.navigation.goBack()}
      />
      <ScrollView
        ref={scrollView}
        onMomentumScrollEnd={(e) => {
          setStep(parseInt(e.nativeEvent.contentOffset.x / WIDTH + 0.1))
        }}
        pagingEnabled={true}
        horizontal={true}>
        <Step1 onChangeData={onChangeData.bind()} />
        <Step2 onChangeData={onChangeData.bind()} />
        <Step3 onChangeData={onChangeData.bind()} />
        <Step4
          onUpload={(e) => {
            props.uploadPostFor({formData: e, id: id})
          }}
          images={props.step4.images}
        />
        <Step5 onChangeData={onChangeData.bind()} />
        <Step6 onChangeData={onChangeData.bind()} data={props.step6} />
        <Step7 onChangeData={onChangeData.bind()} onPress={onPost.bind()} />
      </ScrollView>
      <Breadcrumb
        itemSelected={step}
        onItemPress={(e) => {
          onPressStepItem(e)
        }}
        data={main.labelStep}
      />
    </SafeAreaView>
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
      images: state.postFor.uploadPostFor.response && state.postFor.uploadPostFor.response.content
    },
    email: userProfile.phone
  }
}

const mapDispatchToProps = (dispatch) => {
  let actionCreators = {uploadPostFor, postFor}
  let actions = bindActionCreators(actionCreators, dispatch)
  return {...actions, dispatch}
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withNavigationFocus(ForNewPost))
