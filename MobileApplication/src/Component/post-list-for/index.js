import React, {memo, useState} from "react"
import {Text, View, FlatList, TouchableOpacity, RefreshControl, ActivityIndicator} from "react-native"
import styles from "./styles"
import BottomListPost from "@src/component/bottom-list-post"
import AvatarCirCle from "@src/component/avatar-circle"
import Card from "@src/component/card"
import {CODE_VIP} from "@src/common/typeCode"
import FastImage from "react-native-fast-image"
import {toast} from "@src/utilities"

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
        <Text style={styles.postDate}>{`${props.postedDate} - ${props.address}`}</Text>
      </View>
    </View>
  )
}

const Description = (props) =>
  props.description ? (
    <View style={styles.descriptionContainer}>
      <Text style={styles.description} numberOfLines={4}>
        {props.description}
      </Text>
    </View>
  ) : null

const Images = (props) => {
  return (
    (props.images.length !== 0 && (
      <View>
        <PriceArea price={props.price} area={props.area} />
        <FastImage
          style={styles.image}
          source={{uri: props.images[parseInt(Math.random() * props.images.length)]}}
        />
      </View>
    )) ||
    null
  )
}

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

const Item = ({item, onPressPost, onPressFollow, isFollow, isNewProfile}) => {
  const [follow, setFollow] = useState(isFollow)
  const onPress = () => {
    onPressPost(item.id)
  }

  return (
    <TouchableOpacity onPress={onPress.bind()} activeOpacity={1}>
      <Card style={styles.postContainer}>
        <Top
          postedDate={item.postedDate}
          address={item.address}
          title={item.title}
          avatar={item.avatar}
          priority={item.priority}
        />
        {item.images.length === 0 && <Request price={item.price || item.priceByMonth} area={item.area} />}
        <Description description={item.description} />
        <Images images={item.images} price={item.price || item.priceByMonth} area={item.area} />
        <BottomListPost
          onPressFollow={() => {
            if (isNewProfile) {
              toast.showToast("Bạn chưa câp nhập thông tin cá nhân", "#ffffff", "#E0002C")
            } else {
              setFollow(!follow)
              onPressFollow(!follow)
            }
          }}
          isFollow={follow}
        />
      </Card>
    </TouchableOpacity>
  )
}

const keyExtractor = (item, index) => index.toString()

const PostListFor = ({
  data,
  onRefresh,
  refreshing,
  onPress,
  loadMore,
  totalPost,
  loading,
  onPressFollow,
  email,
  isNewProfile
}) => {
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
        onRefresh={onRefresh.bind()}
        renderItem={(item) => (
          <Item
            item={item.item}
            onPressPost={onPress.bind()}
            onPressFollow={(follow) =>
              onPressFollow({
                email: email,
                id: item.item.id,
                follow: follow
              })
            }
            isFollow={item.item.emailsOfFollowers.findIndex((e) => e === email) !== -1}
            isNewProfile={isNewProfile}
          />
        )}
        data={data}
        keyExtractor={keyExtractor.bind()}
        onEndReached={onEndReached.bind()}
        onEndReachedThreshold={0.5}
        onMomentumScrollBegin={() => {
          onEndReachedCalledDuringMomentum = false
        }}
      />
    </View>
  )
}

export default PostListFor
