import React, {memo} from "react"
import {Text, View, FlatList, Image, TouchableOpacity} from "react-native"
import styles from "./styles"
import BottomListPost from "@src/component/bottom-list-post"
import NavigationService from "@src/navigation/NavigationService"
import AvatarCirCle from "@src/component/avatar-circle"
import Card from "@src/component/card"
import {CODE_VIP} from "@src/common/typeCode"

const PRIORITY_NORMAL = [CODE_VIP.X_NORMAL, CODE_VIP.VIP_S2]

const Top = (props) => {
  let style = {}
  switch (props.priority) {
    case CODE_VIP.X_NORMAL:
      style = {color: "blue"}
      break
    case CODE_VIP.VIP_S0:
      style = {color: "red", fontWeight: "bold"}
      break
    case CODE_VIP.VIP_S1:
      style = {color: "orange", fontWeight: "bold"}
      break
    case CODE_VIP.VIP_S2:
      style = {color: "orange"}
      break
    default:
      break
  }

  return (
    <View style={styles.topContainer}>
      <View style={styles.avatarContainer}>
        <AvatarCirCle avatarImageUrl={props.avatar} size={40} />
      </View>
      <View style={styles.postNameContainer}>
        <Text style={[styles.title, style]}>
          {PRIORITY_NORMAL.findIndex((e) => e === props.priority) === -1
            ? props.title.toUpperCase()
            : props.title.toLowerCase()}
        </Text>
        <Text style={styles.postDate}>
          {props.postedDate} {" - "} {props.address}
        </Text>
      </View>
    </View>
  )
}

const Description = (props) =>
  props.description && (
    <View style={styles.descriptionContainer}>
      <Text style={styles.description} numberOfLines={4}>
        {props.description}
      </Text>
    </View>
  )

const Images = (props) =>
  (props.images.length !== 0 && (
    <View>
      <PriceArea price={props.price} area={props.area} />
      <Image
        style={styles.image}
        source={{uri: props.images[parseInt(Math.random() * props.images.length)]}}
      />
    </View>
  )) ||
  null

const PriceArea = (props) => (
  <View style={styles.priceAreaContainer}>
    <View style={[styles.priceAreaLabelContainer, {marginRight: 5}]}>
      <Text style={styles.priceAreaLabelText}>{props.price}</Text>
    </View>
    <View style={styles.priceAreaLabelContainer}>
      <Text style={styles.priceAreaLabelText}>{props.area}</Text>
    </View>
  </View>
)

const Request = (props) => (
  <View style={styles.requestContainer}>
    <View style={styles.requestItem}>
      <Text style={styles.requestLabel}>{"Giá: "}</Text>
      <Text style={styles.requestContent}>{props.price}</Text>
    </View>
    <View style={styles.requestItem}>
      <Text style={styles.requestLabel}>{"Diện tích: "}</Text>
      <Text style={styles.requestContent}>{props.area}</Text>
    </View>
  </View>
)

const Item = memo(({props}) => {
  return (
    <TouchableOpacity
      onPress={() => {
        NavigationService.navigate("ForSalePostDetail")
      }}
      activeOpacity={1}>
      <Card style={styles.postContainer}>
        <Top
          postedDate={props.postedDate}
          address={props.address}
          title={props.title}
          avatar={props.avatar}
          priority={props.priority}
        />
        {props.images.length === 0 && <Request price={props.price} area={props.area} />}
        <Description description={props.description} />
        <Images images={props.images} price={props.price} area={props.area} />
        <BottomListPost />
      </Card>
    </TouchableOpacity>
  )
})

const keyExtractor = (item, index) => index.toString()

const PostListFor = ({data, onRefresh, refreshing, onPress, loadMore, totalPost, loading}) => {
  let onEndReachedCalledDuringMomentum = true

  const onEndReached = () => {
    if (data.length < totalPost && !loading && !onEndReachedCalledDuringMomentum) {
      loadMore()
      onEndReachedCalledDuringMomentum = true
    }
  }

  return (
    <View style={{flex: 1}}>
      <FlatList
        refreshing={refreshing}
        onRefresh={onRefresh.bind(this)}
        renderItem={(item) => <Item props={item.item} />}
        data={data}
        keyExtractor={keyExtractor.bind(this)}
        onEndReached={onEndReached.bind(this)}
        onEndReachedThreshold={0.5}
        onMomentumScrollBegin={() => {
          onEndReachedCalledDuringMomentum = false
        }}
      />
    </View>
  )
}

export default PostListFor
