import {StyleSheet} from "react-native"
import {moderateScale, WIDTH} from "@src/utilities/scale"

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  infoUserContainer: {
    width: WIDTH,
    backgroundColor: "#E8ECEF"
  },
  infoUserTopContainer: {
    flexDirection: "row",
    padding: moderateScale(5),
    paddingBottom: 0,
    marginBottom: moderateScale(5)
  },
  infoUserPostDate: {
    flex: 1,
    marginLeft: moderateScale(5),
    color: "#0072bc"
  },
  infoUserBottomContainer: {
    flexDirection: "row",
    padding: moderateScale(5),
    paddingTop: 0
  },
  postName: {
    marginLeft: moderateScale(5),
    flex: 1,
    fontWeight: "bold"
  },
  infoPostContainer: {margin: moderateScale(10)},
  infoPostTitleContainer: {
    borderBottomColor: "gray",
    borderBottomWidth: moderateScale(1)
  },
  infoPostTitleText: {
    textAlign: "center",
    fontWeight: "bold"
  },
  infoPostItemComtainer: {
    borderColor: "gray",
    borderWidth: moderateScale(1),
    borderTopWidth: 0,
    flexDirection: "row"
  },
  infoPostItemLabelContainer: {
    flex: 1,
    backgroundColor: "#F2F2F2",
    justifyContent: "center",
    alignItems: "flex-start",
    padding: moderateScale(5),
    borderRightColor: "gray",
    borderRightWidth: moderateScale(1)
  },
  infoPostItemLabelText: {color: "#146EB4", fontWeight: "bold"},
  infoPostItemContentContainer: {
    flex: 4,
    justifyContent: "center",
    alignItems: "flex-start",
    padding: moderateScale(5)
  },
  contentPostContainer: {paddingLeft: moderateScale(10), paddingRight: moderateScale(10)},
  contentPostTitle: {
    fontSize: moderateScale(20),
    fontWeight: "bold",
    color: "#8e8e8e",
    marginBottom: moderateScale(5)
  },
  imagePostContainer: {
    marginTop: moderateScale(20),
    paddingLeft: moderateScale(10),
    paddingRight: moderateScale(10)
  },
  imagePostItem: {
    width: WIDTH - moderateScale(20),
    height: 500,
    overflow: "hidden",
    marginBottom: moderateScale(5)
  },
  commentContainer: {
    padding: 5,
    paddingLeft: 10,
    paddingRight: 10,
    flexDirection: "row",
    alignItems: "center"
  },
  textInputComment: {
    backgroundColor: "#E8ECEF",
    height: 30,
    borderRadius: 15,
    padding: 0,
    paddingLeft: 5,
    paddingRight: 5,
    flex: 1
  },
  iconComment: {marginLeft: 5},
  menuContainer: {flexDirection: "row", marginBottom: 5, marginLeft: 5},
  menuItemContainer: {alignItems: "center", marginRight: 5},
  menuItem: {flexDirection: "row", borderRadius: 5, backgroundColor: "#2E75ED", padding: 5},
  menuItemText: {color: "white", marginLeft: 3}
})

export default styles