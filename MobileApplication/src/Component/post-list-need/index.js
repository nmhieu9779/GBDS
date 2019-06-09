import React from "react"
import {Text, View, FlatList, Image, TouchableOpacity} from "react-native"
import styles from "./styles"
import string from "./string"
import {faUserPlus} from "@fortawesome/free-solid-svg-icons"
import {faThumbsUp, faComment} from "@fortawesome/free-regular-svg-icons"
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome"
import AvatarCirCle from "@src/component/avatar-circle"
import Card from "@src/component/card"

const _renderTop = (postDate, title, avatar) => (
  <View style={styles.topContainer}>
    <View style={styles.avatarContainer}>
      <AvatarCirCle avatarImageUrl={avatar} size={40} />
    </View>
    <View style={styles.postNameContainer}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.postDate}>{postDate}</Text>
    </View>
  </View>
)

const _renderRequest = (price, area, address) => (
  <View style={styles.requestContainer}>
    <View style={styles.requestItem}>
      <Text style={styles.requestLabel}>{"Giá: "}</Text>
      <Text style={styles.requestContent}>{price}</Text>
    </View>
    <View style={styles.requestItem}>
      <Text style={styles.requestLabel}>{"Diện tích: "}</Text>
      <Text style={styles.requestContent}>{area}</Text>
    </View>
    <View style={styles.requestItem}>
      <Text style={styles.requestLabel}>{"Địa chỉ: "}</Text>
      <Text style={styles.requestContent} numberOfLines={2}>
        {address}
      </Text>
    </View>
  </View>
)

const _renderDescription = (description) =>
  description && (
    <View style={styles.descriptionContainer}>
      <Text style={styles.description} numberOfLines={4}>
        {description}
      </Text>
    </View>
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

const renderItem = ({item: {avatar, description, title, price, area, address, postDate, id}}, index) => (
  <TouchableOpacity activeOpacity={1} key={index + id}>
    <Card style={styles.postContainer}>
      {_renderTop(postDate, title, avatar)}
      {_renderRequest(price, area, address)}
      {_renderDescription(description)}
      {_renderBottom()}
    </Card>
  </TouchableOpacity>
)
const keyExtractor = (item, index) => index.toString()

const PostListNeed = ({data, onRefresh, refreshing}) => (
  <View style={{flex: 1, backgroundColor: "#D9DDE0"}}>
    <FlatList
      refreshing={refreshing}
      onRefresh={onRefresh.bind(this)}
      renderItem={renderItem.bind(this)}
      data={data}
      keyExtractor={keyExtractor.bind(this)}
    />
  </View>
)

export default PostListNeed
