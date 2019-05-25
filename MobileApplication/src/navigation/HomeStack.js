import React, { Component } from "React"
import {
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
  Modal,
  StyleSheet
} from "react-native"
import {
  SafeAreaView,
  createStackNavigator,
  createDrawerNavigator
} from "react-navigation"
import constants from "../Constant"
import { faDollarSign } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome"
import HomeScreen from "../HomeScreen"
import ForSalePostScreen from "../ForSalePostScreen"
import ForRentPostScreen from "../NeedSalePostCreen"
import { openSelectTypePostAction } from "../Component/add-floating-button/redux/actions"
import { connect } from "react-redux"

const menu = [
  {
    label: "Trang chủ"
  },
  {
    label: "Nhà đất bán"
  },
  {
    label: "Nhà đất cho thuê"
  },
  {
    label: "Cần mua - Cần bán"
  },
  {
    label: "Tin tức"
  },
  {
    label: "Nội - Ngoại thất"
  },
  {
    label: "Phong thuỷ"
  },
  {
    label: "Góp ý, báo lỗi"
  },
  {
    label: "Giới thiệu chung"
  },
  {
    label: "Liên hệ"
  },
  {
    label: "Đăng xuất"
  }
]

const DrawerMenu = ({ open }) => (
  <SafeAreaView style={style.container}>
    <ImageBackground
      style={[style.boxShadow, style.infoContainer]}
      source={require("../../res/DrawerBackground.jpg")}
    >
      <View style={style.avatarContainer}>
        <Image style={style.avatar} source={require("../../res/Avatar.png")} />
      </View>
      <View style={style.nameContainer}>
        <Text style={style.name}>{"Nguyễn Minh Hiếu"}</Text>
        <View style={{ flexDirection: "row" }}>
          <FontAwesomeIcon icon={faDollarSign} color={"#4285F4"} />
          <Text style={{ color: "#4285F4", fontWeight: "bold" }}>100.000</Text>
        </View>
        <TouchableOpacity
          elevation={5}
          style={[
            style.boxShadow,
            {
              margin: 5,
              padding: 5,
              backgroundColor: "#00AB6B",
              alignItems: "center"
            }
          ]}
          onPress={() => open()}
        >
          <Text
            style={{
              color: "white",
              fontWeight: "bold"
            }}
          >
            {"Đăng bài"}
          </Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
    <ScrollView
      style={{
        width: "100%"
      }}
    >
      {menu.map((item, index) => (
        <TouchableOpacity
          key={index}
          style={{
            padding: 20
            // backgroundColor: "#E6EDF1"
          }}
          onPress={() => this.props.navigation.navigate("HomeScreen")}
        >
          <Text style={{ color: "#4267b2" }}>{item.label}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  </SafeAreaView>
)

const mapDispatchToProps = dispatch => {
  return {
    open: () => {
      dispatch(openSelectTypePostAction())
    }
  }
}

const DrawerMenuContainer = connect(
  null,
  mapDispatchToProps
)(DrawerMenu)

const style = StyleSheet.create({
  container: { flex: 1 },
  boxShadow: {
    shadowColor: "#000000",
    shadowOpacity: 0.8,
    shadowRadius: 1,
    shadowOffset: {
      height: 1,
      width: 0
    }
  },
  infoContainer: { width: "100%", flexDirection: "row" },
  avatarContainer: {
    backgroundColor: "white",
    width: 0.2 * constants.width + 10,
    height: 0.2 * constants.width + 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 999,
    margin: 5
  },
  avatar: {
    width: 0.2 * constants.width,
    height: 0.2 * constants.width
  },
  nameContainer: {
    flex: 1,
    justifyContent: "center",
    padding: 5,
    paddingLeft: 0
  },
  name: {
    marginBottom: 5,
    color: "#4267b2",
    fontWeight: "bold",
    fontSize: 21
  }
})

const HomeStack = createDrawerNavigator(
  {
    HomeScreen: {
      screen: HomeScreen
    },
    ForSalePostScreen: {
      screen: ForSalePostScreen
    },
    ForRentPostScreen: {
      screen: ForRentPostScreen
    }
  },
  {
    initialRouteName: "HomeScreen",
    contentComponent: DrawerMenuContainer
  }
)

export default HomeStack
