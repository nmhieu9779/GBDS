import React from "react"
import {Text, View, TouchableOpacity} from "react-native"
import styles from "./styles"
import {faUserPlus} from "@fortawesome/free-solid-svg-icons"
import {faComment, faThumbsUp} from "@fortawesome/free-regular-svg-icons"
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome"

const BottomListPost = () => (
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

export default BottomListPost
