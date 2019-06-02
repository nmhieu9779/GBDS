import {createBottomTabNavigator} from "react-navigation"
import NewFeedForSale from "@src/screen/NewFeedForSale"
import NewFeedForRent from "@src/screen/NewFeedForRent"
import NewFeedNeedSale from "@src/screen/NewFeedNeedSale"
import NewFeedNeedRent from "@src/screen/NewFeedNeedRent"
import ForSalePost from "@src/screen/ForSalePost"
import NeedSalePost from "@src/screen/NeedSalePost"
import TabBarBottom from "./component/tab-bar-bottom"

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
    ForSalePost: {
      screen: ForSalePost,
      navigationOptions: {tabBarVisible: false}
    },
    NeedSalePost: {
      screen: NeedSalePost,
      navigationOptions: {tabBarVisible: false}
    }
  },
  {
    initialRouteName: "NewFeedForSale",
    tabBarComponent: TabBarBottom
  }
)

export default HomeStack
