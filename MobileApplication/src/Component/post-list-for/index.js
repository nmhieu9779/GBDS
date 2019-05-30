import React from "react"
import {Text, View, FlatList, Image, TouchableOpacity} from "react-native"
import styles from "./styles"
import string from "./string"
import {faUserCircle, faUserPlus} from "@fortawesome/free-solid-svg-icons"
import {faStar, faThumbsUp, faComment} from "@fortawesome/free-regular-svg-icons"
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome"

const _renderTop = (postDate, address, title, vipType, avatar) => (
  <View style={styles.topContainer}>
    <View style={styles.avatarContainer}>{_renderAvtar(avatar)}</View>
    <View style={styles.postNameContainer}>
      {_renderTitle(title, vipType)}
      <Text style={styles.postDate}>
        {postDate} {" - "} {address}
      </Text>
    </View>
  </View>
)

const _renderTitle = (title, vipType) =>
  ((vipType === 0 || vipType === 1) && (
    <Text style={[styles.title, styleTitle[vipType]]}>{title.toLowerCase()}</Text>
  )) ||
  ((vipType === 2 || vipType === 4) && (
    <Text style={[styles.title, styleTitle[vipType]]}>{title.toUpperCase()}</Text>
  )) ||
  (vipType === 3 && <Text style={[styles.title, styleTitle[vipType]]}>{title.toUpperCase()}</Text>)

const _renderAvtar = (avatarUrl) =>
  avatarUrl ? (
    <Image style={styles.avatar} source={{uri: avatarUrl}} />
  ) : (
    <FontAwesomeIcon icon={faUserCircle} />
  )

const _renderDescription = (description) =>
  description && (
    <View style={styles.descriptionContainer}>
      <Text style={styles.description} numberOfLines={4}>
        {description}
      </Text>
    </View>
  )

const _renderImage = (image) => (
  <Image style={styles.image} source={(image && {uri: image}) || require("../../../res/NoImages.png")} />
)

const _renderBottom = () => (
  <View style={styles.bottomContainer}>
    <TouchableOpacity style={styles.btnBottom}>
      <View style={styles.itemsBtn}>
        <FontAwesomeIcon style={styles.itemsBtnIcon} icon={faThumbsUp} />
        <Text>{"Thích"}</Text>
      </View>
    </TouchableOpacity>
    <TouchableOpacity style={styles.btnBottom}>
      <View style={styles.itemsBtn}>
        <FontAwesomeIcon style={styles.itemsBtnIcon} icon={faComment} />
        <Text>{"Bình luận"}</Text>
      </View>
    </TouchableOpacity>
    <TouchableOpacity style={styles.btnBottom}>
      <View style={styles.itemsBtn}>
        <FontAwesomeIcon style={styles.itemsBtnIcon} icon={faUserPlus} />
        <Text>{"Đăng ký"}</Text>
      </View>
    </TouchableOpacity>
  </View>
)

const styleTitle = [
  {color: "black"},
  {color: "black"},
  {color: "black", fontWeight: "bold"},
  {color: "black", fontWeight: "bold"}
]

const color = ["blue", "blue", "blue", "red", "red"]

const renderItem = (
  {item: {description, avatar, vipType, title, image, price, area, address, postDate, id}},
  index
) => (
  <TouchableOpacity activeOpacity={1} key={index + id} style={styles.postContainer}>
    {_renderTop(postDate, address, title, vipType, avatar)}
    {_renderDescription(description)}
    {_renderImage(image)}
    {_renderBottom()}
  </TouchableOpacity>
)
const keyExtractor = (item, index) => index.toString()

const PostList = ({listData, onRefresh, refreshing}) => (
  <View style={{flex: 1, backgroundColor: "#D9DDE0"}}>
    <FlatList
      refreshing={refreshing}
      onRefresh={onRefresh.bind(this)}
      renderItem={renderItem.bind(this)}
      data={listData}
      keyExtractor={keyExtractor.bind(this)}
    />
  </View>
)

export default PostList
