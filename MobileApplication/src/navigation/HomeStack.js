import React from "React"
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
import {SafeAreaView, createBottomTabNavigator} from "react-navigation"
import constants from "../Constant"
import {faDollarSign} from "@fortawesome/free-solid-svg-icons"
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome"
import ForSalePostScreen from "../ForSalePostScreen"
import NeedSalePostCreen from "../NeedSalePostCreen"
import {openSelectTypePostAction} from "../Component/add-floating-button/redux/actions"
import {connect} from "react-redux"
import NewFeedForSale from "../NewFeedForSale"
import NewFeedForRent from "../NewFeedForRent"
import NewFeedNeedSale from "../NewFeedNeedSale"
import NewFeedNeedRent from "../NewFeedNeedRent"

const HomeStack = createBottomTabNavigator(
  {
    NewFeedForSale: {
      screen: NewFeedForSale
    },
    NewFeedForRent: {
      screen: NewFeedForRent
    },
    NewFeedNeedSale: {
      screen: NewFeedNeedSale
    },
    NewFeedNeedRent: {
      screen: NewFeedNeedRent
    }
  },
  {
    initialRouteName: "NewFeedForSale"
  }
)

export default HomeStack
