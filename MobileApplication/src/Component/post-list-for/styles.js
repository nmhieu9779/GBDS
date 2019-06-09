import {StyleSheet, Platform} from "react-native"
import {moderateScale, width} from "@src/utilities/scale"

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: "#4285F4",
    padding: moderateScale(10),
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    alignItems: "center"
  },
  headerTitle: {
    fontWeight: "bold",
    color: "white",
    fontSize: moderateScale(18)
  },
  topContainer: {
    padding: moderateScale(10),
    paddingBottom: 0,
    marginBottom: moderateScale(12),
    flexDirection: "row"
  },
  postContainer: {
    marginBottom: moderateScale(5),
    backgroundColor: "white"
  },
  avatarContainer: {
    paddingRight: moderateScale(8)
  },
  postNameContainer: {flex: 1},
  title: {
    fontSize: moderateScale(14)
  },
  postDate: {
    color: "rgb(144, 148, 156);",
    fontSize: moderateScale(12)
  },
  descriptionContainer: {
    marginTop: moderateScale(8),
    marginBottom: moderateScale(8),
    paddingLeft: moderateScale(10),
    paddingRight: moderateScale(10)
  },
  description: {
    fontSize: moderateScale(14)
  },
  image: {
    width: width,
    height: moderateScale(250)
  },
  bottomContainer: {
    marginTop: moderateScale(10),
    flexDirection: "row"
  },
  btnBottom: {
    flexDirection: "row",
    flex: 1,
    paddingLeft: moderateScale(8),
    paddingRight: moderateScale(8)
  },
  itemsBtn: {
    flexDirection: "row",
    padding: moderateScale(8),
    paddingTop: moderateScale(6),
    alignItems: "center",
    justifyContent: "center"
  },
  itemsBtnIcon: {
    marginRight: moderateScale(4)
  },
  footer: {
    width: "100%",
    borderBottomLeftRadius: moderateScale(20),
    borderBottomRightRadius: moderateScale(20),
    backgroundColor: "transparent",
    marginBottom: moderateScale(10),
    alignItems: "center",
    borderColor: "#ccc",
    borderWidth: moderateScale(0.5),
    borderTopWidth: 0
  },
  footerText: {fontWeight: "bold", fontSize: moderateScale(18)},
  priceAreaContainer: {
    position: "absolute",
    bottom: 0,
    right: moderateScale(5),
    flexDirection: "row",
    ...Platform.select({
      ios: {
        zIndex: 1
      },
      android: {
        elevation: 1
      }
    })
  },
  priceAreaLabelContainer: {
    padding: moderateScale(5),
    backgroundColor: "#34A853",
    borderTopLeftRadius: moderateScale(10),
    borderBottomRightRadius: moderateScale(10)
  },
  priceAreaLabelText: {color: "white", fontWeight: "bold"},
  requestContainer: {
    marginBottom: moderateScale(8),
    paddingLeft: moderateScale(10),
    paddingRight: moderateScale(10)
  },
  requestItem: {
    flexDirection: "row"
  },
  requestLabel: {color: "#0072bc", fontWeight: "bold"},
  requestContent: {
    flex: 1
  }
})

export default styles
