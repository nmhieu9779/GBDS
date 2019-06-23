import React, {memo, useState} from "react"
import {Text, View, FlatList, TouchableOpacity} from "react-native"
import styles from "./styles"
import AvatarCirCle from "@src/component/avatar-circle"
import Card from "@src/component/card"
import BottomListPost from "@src/component/bottom-list-post"

const Top = (props) => (
  <View style={styles.topContainer}>
    <View style={styles.avatarContainer}>
      <AvatarCirCle avatarImageUrl={props.avatar} size={40} />
    </View>
    <View style={styles.postNameContainer}>
      <Text style={styles.title}>{props.title.toUpperCase()}</Text>
      <Text style={styles.postDate}>{props.postedDate}</Text>
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
    <View style={styles.requestItem}>
      <Text style={styles.requestLabel}>{"Địa chỉ: "}</Text>
      <Text style={styles.requestContent} numberOfLines={2}>
        {props.address}
      </Text>
    </View>
  </View>
)

const Description = (props) =>
  props.description && (
    <View style={styles.descriptionContainer}>
      <Text style={styles.description} numberOfLines={4}>
        {props.description}
      </Text>
    </View>
  )

const Item = ({item, onPressPost, onPressFollow, isFollow}) => {
  const [follow, setFollow] = useState(isFollow)
  const onPress = () => {
    onPressPost(item.id)
  }
  return (
    <TouchableOpacity onPress={onPress.bind()} activeOpacity={1}>
      <Card style={styles.postContainer}>
        <Top postedDate={item.postedDate} title={item.title} avatar={item.avatar} />
        <Request price={item.price || item.priceByMonth} area={item.area} address={item.address} />
        <Description description={item.description} />
        <BottomListPost
          onPressFollow={() => {
            setFollow(!follow)
            onPressFollow(!follow)
          }}
          isFollow={follow}
        />
      </Card>
    </TouchableOpacity>
  )
}

const keyExtractor = (item, index) => index.toString()

const PostListNeed = ({
  data,
  onRefresh,
  refreshing,
  onPress,
  loadMore,
  totalPost,
  loading,
  onPressFollow,
  email
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

export default PostListNeed
