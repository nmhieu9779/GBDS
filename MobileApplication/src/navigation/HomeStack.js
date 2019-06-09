import {createBottomTabNavigator} from "react-navigation"
import NewFeedForSale from "@src/screen/NewFeedForSale"
import NewFeedForRent from "@src/screen/NewFeedForRent"
import NewFeedNeedSale from "@src/screen/NewFeedNeedSale"
import NewFeedNeedRent from "@src/screen/NewFeedNeedRent"
import ForNewPost from "@src/screen/ForNewPost"
import NeedNewPost from "@src/screen/NeedNewPost"
import ForSalePostDetail from "@src/screen/ForSalePostDetail"
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
    NewFeedNeedSale: {
      screen: NewFeedNeedSale
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
    ForSalePostDetail: {
      screen: ForSalePostDetail,
      navigationOptions: {tabBarVisible: false}
    },
    EditProfile: {
      screen: EditProfile,
      navigationOptions: {tabBarVisible: false}
    }
  },
  {
    initialRouteName: "EditProfile",
    tabBarComponent: TabBarBottom
  }
)

export default HomeStack
