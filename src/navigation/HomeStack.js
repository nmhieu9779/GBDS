import {createBottomTabNavigator, createStackNavigator} from "react-navigation"
import NewFeedForSale from "@src/screen/NewFeedForSale"
import NewFeedForRent from "@src/screen/NewFeedForRent"
import NewFeedNeedBuy from "@src/screen/NewFeedNeedBuy"
import NewFeedNeedRent from "@src/screen/NewFeedNeedRent"
import ForNewPost from "@src/screen/ForNewPost"
import NeedNewPost from "@src/screen/NeedNewPost"
import PostDetail from "@src/screen/PostDetail"
import UserProfile from "@src/screen/UserProfile"
import TabBarBottom from "./component/tab-bar-bottom"
import EditProfile from "@src/screen/EditProfile"
import Filter from "@src/screen/Filter"
import Notification from "@src/screen/Notification"
import PostProfile from "@src/screen/PostProfile"

const BottomHome = createBottomTabNavigator(
  {
    NewFeedForSale: {
      screen: NewFeedForSale
    },
    NewFeedForRent: {
      screen: NewFeedForRent
    },
    NewFeedNeedBuy: {
      screen: NewFeedNeedBuy
    },
    NewFeedNeedRent: {
      screen: NewFeedNeedRent
    },
    UserProfile: {
      screen: UserProfile
    }
  },
  {
    swipeEnabled: true,
    lazy: true,
    tabBarComponent: TabBarBottom
  }
)

const HomeStack = createStackNavigator(
  {
    BottomHome: {
      screen: BottomHome
    },
    ForNewPost: {
      screen: ForNewPost
    },
    NeedNewPost: {
      screen: NeedNewPost
    },
    PostDetail: {
      screen: PostDetail
    },
    EditProfile: {
      screen: EditProfile
    },
    Filter: {
      screen: Filter
    },
    Notification: {
      screen: Notification
    },
    PostProfile: {
      screen: PostProfile
    }
  },
  {initialRouteName: "BottomHome", headerMode: "none"}
)

export default HomeStack
