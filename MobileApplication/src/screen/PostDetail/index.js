import React from "react"
import {connect} from "react-redux"
import {bindActionCreators} from "redux"
import {View, Text, ScrollView, TouchableOpacity, TextInput} from "react-native"
import SafeAreaView from "react-native-safe-area-view"
import TopBarMenu from "@src/component/top-bar-menu"
import {faArrowLeft, faBookmark} from "@fortawesome/free-solid-svg-icons"
import {faShareSquare, faEdit, faClock, faUser, faPaperPlane} from "@fortawesome/free-regular-svg-icons"
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome"
import styles from "./styles"
import AvatarCirCle from "@src/component/avatar-circle"
import Card from "@src/component/card"
import FastImage from "react-native-fast-image"
import {NavigationActions} from "react-navigation"
import {postNeed, postFor} from "@src/redux/actions"
import {date} from "@src/utilities"

const TableInfo = (props) => (
  <Card style={styles.infoPostContainer}>
    <View style={styles.infoPostTitleContainer}>
      <Text style={styles.infoPostTitleText}>{"Thông tin nhà đất"}</Text>
    </View>
    {props.info.map(
      (item, index) => item && <TableIcon key={index} label={item.label} content={item.content} />
    )}
  </Card>
)

const TableContact = (props) => (
  <Card style={styles.infoPostContainer}>
    <View style={styles.infoPostTitleContainer}>
      <Text style={styles.infoPostTitleText}>{`Thông tin liên hệ`}</Text>
    </View>
    {props.contact.map(
      (item, index) => item && <TableIcon key={index} label={item.label} content={item.content} />
    )}
  </Card>
)

const TableIcon = ({label, content}) => (
  <View style={styles.infoPostItemComtainer}>
    <View style={styles.infoPostItemLabelContainer}>
      <Text style={styles.infoPostItemLabelText}>{label}:</Text>
    </View>
    <View style={styles.infoPostItemContentContainer}>
      <Text>{content}</Text>
    </View>
  </View>
)

const ContentPost = (props) => (
  <Card style={styles.contentPostContainer}>
    <Text style={styles.contentPostTitle}>{"Thông tin mô tả"}</Text>
    <Text>{props.content}</Text>
  </Card>
)

const ImagePost = (props) => (
  <Card style={styles.imagePostContainer}>
    {props.images.map((uri, index) => (
      <FastImage key={index} style={styles.imagePostItem} source={{uri: uri}} />
    ))}
  </Card>
)

const Menu = (props) => (
  <View style={styles.menuContainer}>
    <TouchableOpacity onPress={props.onEditPost.bind()} style={styles.menuItemContainer}>
      <View style={styles.menuItem}>
        <FontAwesomeIcon color={"white"} icon={faEdit} />
        <Text style={styles.menuItemText}>{"Chỉnh sửa"}</Text>
      </View>
    </TouchableOpacity>
    <TouchableOpacity onPress={props.onReupPost.bind()} style={styles.menuItemContainer}>
      <View style={styles.menuItem}>
        <FontAwesomeIcon color={"white"} icon={faClock} />
        <Text style={styles.menuItemText}>{"Đăng lại"}</Text>
      </View>
    </TouchableOpacity>
    <TouchableOpacity style={styles.menuItemContainer}>
      <View style={styles.menuItem}>
        <FontAwesomeIcon color={"white"} icon={faUser} />
        <Text style={styles.menuItemText}>{"Người đăng ký"}</Text>
      </View>
    </TouchableOpacity>
  </View>
)

const PostDetail = (props) => {
  return (
    <SafeAreaView style={styles.container}>
      <TopBarMenu icon={[{icon: faArrowLeft}]} title={props.name} onPress={() => props.navigation.goBack()} />
      {props.success && (
        <ScrollView>
          <Card style={styles.infoUserContainer}>
            <View style={styles.infoUserTopContainer}>
              <FontAwesomeIcon color={"#0072bc"} icon={faBookmark} />
              <Text style={styles.infoUserPostDate}>{props.createdDate}</Text>
              <FontAwesomeIcon color={"#0072bc"} icon={faShareSquare} />
            </View>
            <View style={styles.infoUserBottomContainer}>
              <AvatarCirCle avatarImageUrl={props.avatarImageUrl} size={40} />
              <Text style={styles.postName} numberOfLines={3}>
                {props.name}
              </Text>
            </View>
            {props.isUserPost && (
              <Menu
                onEditPost={() =>
                  props.navigation.navigate({
                    routeName: [props.screen].toString(),
                    params: props.fieldx
                  })
                }
                onReupPost={() =>
                  props.postType === "NEED"
                    ? props.postNeed({
                        body: {
                          createdDate: `${date.formatDate(new Date(), "YYYY-MM-DD HH:mm:ss")}`,
                          id: props.id
                        },
                        type: props.fieldx.step1.typeProduct.productType.type,
                        isNew: false
                      })
                    : props.postFor({
                        body: {
                          createdDate: `${date.formatDate(new Date(), "YYYY-MM-DD HH:mm:ss")}`,
                          id: props.id
                        },
                        type: props.fieldx.step1.typeProduct.productType.type,
                        isNew: false
                      })
                }
              />
            )}
          </Card>
          {props.info && <TableInfo info={props.info} />}
          {props.contact && <TableContact contact={props.contact} />}
          {props.content && <ContentPost content={props.content} />}
          {props.images && <ImagePost images={props.images} />}
        </ScrollView>
      )}
      <View style={styles.commentContainer}>
        <TextInput style={styles.textInputComment} placeholder={"Viết bình luận..."} />
        <FontAwesomeIcon style={styles.iconComment} color={"#2E75ED"} icon={faPaperPlane} />
      </View>
    </SafeAreaView>
  )
}

const mapStateToProps = (state) => {
  if (state.postDetail.postDetail.success) {
    if (["FOR_SALE", "FOR_RENT"].findIndex((e) => e === state.postDetail.postDetail.response.type) !== -1) {
      const postDetail = state.postDetail.postDetail.response.content
      const address = postDetail.property.address
      const details = postDetail.property.details
      const contact = postDetail.property.additionContactInfo
      const images = postDetail.property.images
      const floors = postDetail.property.details.floors.map((item) => ({
        label: item.index === 0 ? `Tầng trệt` : `Tầng ${item.index}`,
        content: `${item.room} phòng, ${item.bedroom} phòng ngủ, ${item.bathroom} toilet`
      }))
      return {
        success: state.postDetail.postDetail.success,
        name: postDetail.name,
        avatarImageUrl: postDetail.avatar,
        createdDate: postDetail.createdDate,
        info: [
          {
            label: "Địa chỉ",
            content: `${address.number}, ${address.street.prefix} ${address.street.name}, ${
              address.ward.prefix
            } ${address.ward.name}, ${address.district.prefix} ${address.district.name}, ${
              address.province.name
            },`
          },
          postDetail.totalCost ? {label: "Giá", content: postDetail.totalCost} : false,
          postDetail.property.area ? {label: "Diện tích", content: postDetail.property.area} : false,
          details.frontSide ? {label: "Mặt tiền", content: `${details.frontSide} m`} : false,
          details.wayIn ? {label: "Đường vào", content: `${details.wayIn} m`} : false,
          details.direction ? {label: "Hướng nhà", content: `${details.direction}`} : false,
          details.balconyDirection
            ? {label: "Hướng ban công", content: `${details.balconyDirection}`}
            : false,
          ...floors,
          details.furniture ? {label: "Nội thất khác", content: `${details.furniture}`} : false
        ],
        contact: [
          contact.name ? {label: "Họ tên", content: contact.name} : false,
          contact.address ? {label: "Địa chỉ", content: contact.address} : false,
          contact.phone ? {label: "Di động", content: contact.phone} : false,
          contact.email ? {label: "Email", content: contact.email} : false
        ],
        content: postDetail.description,
        images: [...images.frontSide, ...images.wayIn, ...images.furnitures, ...images.others],
        isUserPost:
          state.userProfile.userProfile.success &&
          state.userProfile.userProfile.response.content.email === postDetail.user,
        screen: "ForNewPost",
        postType: "FOR",
        fieldx: postDetail.fieldx && {...JSON.parse(postDetail.fieldx), step: 0},
        id: postDetail.id
      }
    } else if (
      ["NEED_BUY", "NEED_RENT"].findIndex((e) => e === state.postDetail.postDetail.response.type) !== -1
    ) {
      const postDetail = state.postDetail.postDetail.response.content
      const contact = postDetail.additionContactInfo
      return {
        success: state.postDetail.postDetail.success,
        name: postDetail.name,
        avatarImageUrl: postDetail.avatar,
        createdDate: postDetail.createdDate,
        info: [
          {
            label: "Địa chỉ",
            content: `${postDetail.district.prefix} ${postDetail.district.name}, ${postDetail.province.name},`
          },
          postDetail.totalCost && {
            label: "Giá",
            content: `${postDetail.totalCost}`
          },
          postDetail.area && {label: "Diện tích", content: `${postDetail.area}`}
        ],
        contact: [
          contact.name && {label: "Họ tên", content: contact.name},
          contact.address && {label: "Địa chỉ", content: contact.address},
          contact.phone && {label: "Di động", content: contact.phone},
          contact.email && {label: "Email", content: contact.email}
        ],
        content: postDetail.description,
        isUserPost:
          state.userProfile.userProfile.success &&
          state.userProfile.userProfile.response.content.email === postDetail.user,
        screen: "NeedNewPost",
        postType: "NEED",
        fieldx: postDetail.fieldx && {...JSON.parse(postDetail.fieldx), id: postDetail.id},
        id: postDetail.id
      }
    }
  } else {
    return {
      success: state.postDetail.postDetail.success
    }
  }
}

const mapDispatchToProps = (dispatch) => {
  let actionCreators = {postNeed, postFor}
  let actions = bindActionCreators(actionCreators, dispatch)
  return {...actions, dispatch}
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostDetail)
