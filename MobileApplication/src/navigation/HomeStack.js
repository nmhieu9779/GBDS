import {createBottomTabNavigator} from "react-navigation"
import NewFeedForSale from "@src/screen/NewFeedForSale"
import NewFeedForRent from "@src/screen/NewFeedForRent"
import NewFeedNeedSale from "@src/screen/NewFeedNeedSale"
import NewFeedNeedRent from "@src/screen/NewFeedNeedRent"

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
