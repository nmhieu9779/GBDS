import React from "react"
import { Text, View, SectionList, Image, TouchableOpacity } from "react-native"
import styles from "./styles"
import string from "./string"
import { faStar } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome"

const renderSectionHeader = title => (
  <View style={styles.headerContainer}>
    <Text style={styles.headerTitle}>{title}</Text>
  </View>
)

const formatTitle = (title, vipType) =>
  ((vipType === 0 || vipType === 1) && title.toLowerCase()) ||
  ((vipType === 2 || vipType === 3 || vipType === 4) && title.toUpperCase())

const styleTitle = [
  { color: "blue" },
  { color: "orange" },
  { color: "orange", fontWeight: "bold" },
  { color: "red", fontWeight: "bold" }
]

const color = ["blue", "blue", "blue", "red", "red"]

const renderItem = (
  { vipType, title, image, price, area, address, postDate, id },
  index
) => (
  <TouchableOpacity
    activeOpacity={1}
    key={index + id}
    style={[styles.postContainer, { borderColor: color[vipType] }]}
  >
    {vipType === 3 && (
      <FontAwesomeIcon color={"#FAC041"} size={13} icon={faStar} />
    )}
    <Text style={[styles.title, styleTitle[vipType]]}>
      {formatTitle(title, vipType)}
    </Text>
    <View style={styles.infoContainer}>
      <Image
        resizeMode={"stretch"}
        style={styles.image}
        source={
          (image && { uri: image }) || require("../../../../res/NoImages.png")
        }
      />
      <View style={styles.info}>
        <Text style={styles.price}>{price}</Text>
        <Text>{area}</Text>
        <Text>{address}</Text>
        <Text style={styles.postDate}>{postDate}</Text>
      </View>
    </View>
  </TouchableOpacity>
)

const renderSectionFooter = () => (
  <View style={styles.footer}>
    <TouchableOpacity>
      <Text style={{ fontWeight: "bold", fontSize: 20 }}>{"Xem thêm"}</Text>
    </TouchableOpacity>
  </View>
)

const PostList = ({ listData, onRefresh, refreshing }) => (
  <View style={{ padding: 5, marginBottom: 50 }}>
    <SectionList
      refreshing={refreshing}
      onRefresh={() => onRefresh()}
      renderItem={({ item, index }) => renderItem(item, index)}
      renderSectionHeader={({ section: { title } }) =>
        renderSectionHeader(title)
      }
      renderSectionFooter={() => renderSectionFooter()}
      sections={listData}
      keyExtractor={(item, index) => item + index}
    />
  </View>
)

export default PostList
