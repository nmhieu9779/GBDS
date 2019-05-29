import React from "react"
import {Text, View, SectionList, Image, TouchableOpacity} from "react-native"
import styles from "./styles"
import string from "./string"
import {faStar} from "@fortawesome/free-solid-svg-icons"
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome"
import SafeAreaViewBoxShadow from "../../../Component/safe-area-view-box-shadow"

const renderSectionHeader = ({section: {title}}) => (
  <View style={styles.headerContainer}>
    <Text style={styles.headerTitle}>{title}</Text>
  </View>
)

const _renderTitle = (title, vipType) =>
  ((vipType === 0 || vipType === 1) && (
    <Text style={[styles.title, styleTitle[vipType]]}>{title.toLowerCase()}</Text>
  )) ||
  ((vipType === 2 || vipType === 4) && (
    <Text style={[styles.title, styleTitle[vipType]]}>{title.toUpperCase()}</Text>
  )) ||
  (vipType === 3 && (
    <>
      <FontAwesomeIcon
        style={{position: "absolute", top: 7, left: 5}}
        color={"#FAC041"}
        size={13}
        icon={faStar}
      />
      <Text style={[styles.title, styleTitle[vipType]]}>
        {"    "}
        {title.toUpperCase()}
      </Text>
    </>
  ))

const _renderImage = (image) => (
  <Image
    resizeMode={"stretch"}
    style={styles.image}
    source={(image && {uri: image}) || require("../../../../res/NoImages.png")}
  />
)

const styleTitle = [
  {color: "blue"},
  {color: "orange"},
  {color: "orange", fontWeight: "bold"},
  {color: "red", fontWeight: "bold"}
]

const color = ["blue", "blue", "blue", "red", "red"]

const renderItem = ({item: {vipType, title, image, price, area, address, postDate, id}}, index) => (
  <View style={styles.container}>
    <TouchableOpacity
      activeOpacity={1}
      key={index + id}
      style={[styles.postContainer, {borderColor: color[vipType]}]}>
      {_renderTitle(title, vipType)}
      <View style={styles.infoContainer}>
        {_renderImage(image)}
        <View style={styles.info}>
          <Text style={styles.price}>{price}</Text>
          <Text>{area}</Text>
          <Text>{address}</Text>
          <Text style={styles.postDate}>{postDate}</Text>
        </View>
      </View>
    </TouchableOpacity>
  </View>
)

const renderSectionFooter = () => (
  <View style={styles.footer}>
    <TouchableOpacity>
      <Text style={styles.footerText}>{"Xem thêm"}</Text>
    </TouchableOpacity>
  </View>
)

const keyExtractor = (item, index) => index.toString()

const PostList = ({listData, onRefresh, refreshing}) => (
  <View style={{flex: 1, padding: 5}}>
    <SectionList
      refreshing={refreshing}
      onRefresh={onRefresh.bind(this)}
      renderItem={renderItem.bind(this)}
      renderSectionHeader={renderSectionHeader.bind(this)}
      renderSectionFooter={renderSectionFooter.bind(this)}
      sections={listData}
      keyExtractor={keyExtractor.bind(this)}
    />
  </View>
)

export default PostList
