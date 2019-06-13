import React from "react"
import {Text, View, TouchableOpacity} from "react-native"
import styles from "./styles"
import {faUserPlus} from "@fortawesome/free-solid-svg-icons"
import {faComment} from "@fortawesome/free-regular-svg-icons"
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome"
import {faBell} from "@fortawesome/free-regular-svg-icons"

const BottomListPost = (props) => {
  const color = !props.choose ? "rgb(32, 120, 244)" : "#606770"
  return (
    <View style={styles.bottomContainer}>
      <TouchableOpacity style={styles.btnBottom}>
        <View style={styles.itemsBtn}>
          <FontAwesomeIcon style={styles.itemsBtnIcon} color={color} icon={faBell} />
          <Text style={{color: color}}>{"Thông báo"}</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btnBottom}>
        <View style={styles.itemsBtn}>
          <FontAwesomeIcon style={styles.itemsBtnIcon} color={"#606770"} icon={faComment} />
          <Text style={{color: "#606770"}}>{"Bình luận"}</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btnBottom}>
        <View style={styles.itemsBtn}>
          <FontAwesomeIcon style={styles.itemsBtnIcon} color={"#606770"} icon={faUserPlus} />
          <Text style={{color: "#606770"}}>{"Đăng ký"}</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default BottomListPost
