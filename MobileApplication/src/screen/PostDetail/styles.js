import {StyleSheet} from "react-native"
import {scale} from "@src/utilities"

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  infoUserContainer: {
    width: scale.WIDTH,
    backgroundColor: "#E8ECEF"
  },
  infoUserTopContainer: {
    flexDirection: "row",
    padding: scale.moderateScale(5),
    paddingBottom: 0,
    marginBottom: scale.moderateScale(5)
  },
  infoUserPostDate: {
    flex: 1,
    marginLeft: scale.moderateScale(5),
    color: "#0072bc"
  },
  infoUserBottomContainer: {
    flexDirection: "row",
    padding: scale.moderateScale(5),
    paddingTop: 0
  },
  postName: {
    marginLeft: scale.moderateScale(5),
    flex: 1,
    fontWeight: "bold"
  },
  infoPostContainer: {margin: scale.moderateScale(5), paddingBottom: scale.moderateScale(5)},
  infoPostTitleContainer: {
    borderBottomColor: "#D4D7D8",
    borderBottomWidth: scale.moderateScale(1)
  },
  infoPostTitleText: {
    textAlign: "center",
    fontWeight: "bold",
    padding: scale.moderateScale(5)
  },
  infoPostItemComtainer: {
    borderBottomColor: "#D4D7D8",
    borderBottomWidth: scale.moderateScale(0.7),
    flexDirection: "row"
  },
  infoPostItemLabelContainer: {
    flex: 1,
    backgroundColor: "#F2F2F2",
    justifyContent: "center",
    alignItems: "flex-start",
    padding: scale.moderateScale(5),
    borderRightColor: "#D4D7D8",
    borderRightWidth: scale.moderateScale(0.7)
  },
  infoPostItemLabelText: {color: "#146EB4", fontWeight: "bold"},
  infoPostItemContentContainer: {
    flex: 4,
    justifyContent: "center",
    alignItems: "flex-start",
    padding: scale.moderateScale(5)
  },
  contentPostContainer: {
    padding: scale.moderateScale(10),
    margin: scale.moderateScale(5)
  },
  contentPostTitle: {
    fontSize: scale.moderateScale(20),
    fontWeight: "bold",
    color: "#8e8e8e",
    marginBottom: scale.moderateScale(5)
  },
  imagePostContainer: {
    margin: scale.moderateScale(5),
    paddingLeft: scale.moderateScale(5),
    paddingRight: scale.moderateScale(5),
    paddingTop: scale.moderateScale(5)
  },
  imagePostItem: {
    width: scale.WIDTH - scale.moderateScale(20),
    height: scale.moderateScale(500),
    overflow: "hidden",
    marginBottom: scale.moderateScale(5)
  },
  commentContainer: {
    padding: scale.moderateScale(5),
    paddingLeft: scale.moderateScale(10),
    paddingRight: scale.moderateScale(10),
    flexDirection: "row",
    alignItems: "center"
  },
  textInputComment: {
    backgroundColor: "#E8ECEF",
    height: scale.moderateScale(30),
    borderRadius: scale.moderateScale(15),
    padding: 0,
    paddingLeft: scale.moderateScale(5),
    paddingRight: scale.moderateScale(5),
    flex: 1
  },
  iconComment: {marginLeft: scale.moderateScale(5)},
  menuContainer: {
    flexDirection: "row",
    marginBottom: scale.moderateScale(5),
    marginLeft: scale.moderateScale(5),
    flexWrap: "wrap"
  },
  menuItemContainer: {
    alignItems: "center",
    marginRight: scale.moderateScale(5),
    marginBottom: scale.moderateScale(5)
  },
  menuItem: {
    flexDirection: "row",
    borderRadius: scale.moderateScale(5),
    backgroundColor: "#2E75ED",
    padding: scale.moderateScale(5)
  },
  menuItemText: {color: "white", marginLeft: scale.moderateScale(3)}
})

export default styles
