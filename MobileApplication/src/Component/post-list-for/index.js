import React from "react"
import {Text, View, FlatList, Image, TouchableOpacity} from "react-native"
import styles from "./styles"
import string from "./string"
import {faUserCircle} from "@fortawesome/free-solid-svg-icons"
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome"
import BottomListPost from "@src/component/bottom-list-post"

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
    <FontAwesomeIcon size={40} icon={faUserCircle} />
  )

const _renderDescription = (description) =>
  description && (
    <View style={styles.descriptionContainer}>
      <Text style={styles.description} numberOfLines={4}>
        {description}
      </Text>
    </View>
  )

const _renderImage = ({image, price, area}) =>
  (image && (
    <View>
      {_renderPriceArea({price, area})}
      <Image style={styles.image} source={image && {uri: image}} />
    </View>
  )) ||
  null

const _renderPriceArea = ({price, area}) => (
  <View style={styles.priceAreaContainer}>
    <View style={[styles.priceAreaLabelContainer, {marginRight: 5}]}>
      <Text style={styles.priceAreaLabelText}>{price}</Text>
    </View>
    <View style={styles.priceAreaLabelContainer}>
      <Text style={styles.priceAreaLabelText}>{area}</Text>
    </View>
  </View>
)

const _renderRequest = ({price, area}) => (
  <View style={styles.requestContainer}>
    <View style={styles.requestItem}>
      <Text style={styles.requestLabel}>{"Giá: "}</Text>
      <Text style={styles.requestContent}>{price}</Text>
    </View>
    <View style={styles.requestItem}>
      <Text style={styles.requestLabel}>{"Diện tích: "}</Text>
      <Text style={styles.requestContent}>{area}</Text>
    </View>
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
    {!image && _renderRequest({price, area})}
    {_renderDescription(description)}
    {_renderImage({image, price, area})}
    <BottomListPost />
  </TouchableOpacity>
)
const keyExtractor = (item, index) => index.toString()

const PostListFor = ({data, onRefresh, refreshing}) => (
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

export default PostListFor
