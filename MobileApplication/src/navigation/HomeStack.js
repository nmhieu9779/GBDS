import {createBottomTabNavigator} from "react-navigation"
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

const HomeStack = createBottomTabNavigator(
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
    },
    ForNewPost: {
      screen: ForNewPost,
      navigationOptions: {tabBarVisible: false}
    },
    NeedNewPost: {
      screen: NeedNewPost,
      navigationOptions: {tabBarVisible: false}
    },
    PostDetail: {
      screen: PostDetail,
      navigationOptions: {tabBarVisible: false}
    },
    EditProfile: {
      screen: EditProfile,
      navigationOptions: {tabBarVisible: false}
    }
  },
  {
    initialRouteName: "NewFeedForSale",
    tabBarComponent: TabBarBottom
  }
)

export default HomeStack
