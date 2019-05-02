import React, { Component } from "React"
import {
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
  Modal
} from "react-native"
import {
  SafeAreaView,
  createStackNavigator,
  createDrawerNavigator
} from "react-navigation"
import constants from "../Constant"
import { faDollarSign } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome"
import HomeScreen from "../HomeScreen/HomeScreen"
import ForSalePostScreen from "../ForSalePostScreen"

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

class DrawerMenu extends Component {
  constructor(props) {
    super(props)
    this.state = { visible: false }
  }

  onPressPost = () => {
    this.setState({ visible: true })
  }

  render() {
    let me = this
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <Modal visible={me.state.visible} transparent={true}>
          <View
            style={{
              backgroundColor: "white",
              justifyContent: "center",
              alignItems: "center",
              padding: 5,
              height: "20%",
              width: "70%",
              position: "absolute",
              top: "40%",
              left: "15%",
              borderRadius: 10,
              shadowColor: "#000000",
              shadowOpacity: 0.8,
              shadowRadius: 2,
              shadowOffset: {
                height: 1,
                width: 1
              }
            }}
          >
            <View>
              <Text style={{ fontWeight: "bold", fontSize: 20 }}>
                {"Chọn loại bài cần đăng"}
              </Text>
            </View>
            <View style={{ flex: 1 }} />
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <TouchableOpacity
                style={{
                  flex: 1,
                  backgroundColor: "#E9EBEE",
                  paddingTop: 10,
                  paddingBottom: 10,
                  borderRadius: 5,
                  borderColor: "#ccc",
                  borderWidth: 0.5
                }}
                onPress={() => {
                  me.setState({ visible: false })
                  me.props.navigation.navigate("ForSalePostScreen")
                }}
              >
                <Text style={{ textAlign: "center" }}>
                  {"Cần bán - Cho thuê"}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  flex: 1,
                  backgroundColor: "#E9EBEE",
                  paddingTop: 10,
                  paddingBottom: 10,
                  borderRadius: 5,
                  borderColor: "#ccc",
                  borderWidth: 0.5
                }}
                onPress={() => me.setState({ visible: false })}
              >
                <Text style={{ textAlign: "center" }}>
                  {"Cần mua - Cần thuê"}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
        <ImageBackground
          style={{
            width: "100%",
            flexDirection: "row",
            shadowColor: "#000000",
            shadowOpacity: 0.8,
            shadowRadius: 1,
            shadowOffset: {
              height: 1,
              width: 0
            }
          }}
          source={require("../../res/DrawerBackground.jpg")}
        >
          <View
            style={{
              backgroundColor: "white",
              width: 0.2 * constants.width + 10,
              height: 0.2 * constants.width + 10,
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 999,
              margin: 5
            }}
          >
            <Image
              style={{
                width: 0.2 * constants.width,
                height: 0.2 * constants.width
              }}
              source={require("../../res/Avatar.png")}
            />
          </View>
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              padding: 5,
              paddingLeft: 0
            }}
          >
            <Text
              style={{
                marginBottom: 5,
                color: "#4267b2",
                fontWeight: "bold",
                fontSize: 21
              }}
            >
              {"Nguyễn Minh Hiếu"}
            </Text>
            <View style={{ flexDirection: "row" }}>
              <FontAwesomeIcon icon={faDollarSign} color={"#4285F4"} />
              <Text style={{ color: "#4285F4", fontWeight: "bold" }}>
                100.000
              </Text>
            </View>
            <TouchableOpacity
              elevation={5}
              style={{
                margin: 5,
                padding: 5,
                backgroundColor: "#00AB6B",
                shadowColor: "#000000",
                shadowOpacity: 0.8,
                shadowRadius: 2,
                shadowOffset: {
                  height: 1,
                  width: 1
                },
                alignItems: "center"
              }}
              onPress={() => me.onPressPost()}
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
            >
              <Text style={{ color: "#4267b2", fontSize: 20 }}>
                {item.label}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </SafeAreaView>
    )
  }
}

const HomeStack = createDrawerNavigator(
  {
    HomeScreen: { screen: HomeScreen },
    ForSalePostScreen: {
      screen: ForSalePostScreen
    }
  },
  {
    initialRouteName: "HomeScreen",
    contentComponent: DrawerMenu
  }
)

export default HomeStack
