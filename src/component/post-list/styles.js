import {StyleSheet, Platform} from "react-native"
import {scale} from "@src/utilities"

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: "#4285F4",
    padding: scale.moderateScale(10),
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    alignItems: "center"
  },
  headerTitle: {
    fontWeight: "bold",
    color: "white",
    fontSize: scale.moderateScale(18)
  },
  topContainer: {
    padding: scale.moderateScale(10),
    paddingBottom: 0,
    marginBottom: scale.moderateScale(12),
    flexDirection: "row"
  },
  postContainer: {
    margin: scale.moderateScale(5),
    marginTop: scale.moderateScale(2.5),
    marginBottom: scale.moderateScale(2.5),
    backgroundColor: "white"
  },
  avatarContainer: {
    paddingRight: scale.moderateScale(8)
  },
  postNameContainer: {flex: 1},
  title: {
    fontSize: scale.moderateScale(14)
  },
  postDate: {
    color: "rgb(144, 148, 156);",
    fontSize: scale.moderateScale(12)
  },
  descriptionContainer: {
    marginTop: scale.moderateScale(8),
    marginBottom: scale.moderateScale(8),
    paddingLeft: scale.moderateScale(10),
    paddingRight: scale.moderateScale(10)
  },
  description: {
    fontSize: scale.moderateScale(14)
  },
  image: {
    width: scale.WIDTH - scale.moderateScale(10),
    height: scale.moderateScale(250)
  },
  bottomContainer: {
    marginTop: scale.moderateScale(10),
    flexDirection: "row"
  },
  btnBottom: {
    flexDirection: "row",
    flex: 1,
    paddingLeft: scale.moderateScale(8),
    paddingRight: scale.moderateScale(8)
  },
  itemsBtn: {
    flexDirection: "row",
    padding: scale.moderateScale(8),
    paddingTop: scale.moderateScale(6),
    alignItems: "center",
    justifyContent: "center"
  },
  itemsBtnIcon: {
    marginRight: scale.moderateScale(4)
  },
  footer: {
    width: "100%",
    borderBottomLeftRadius: scale.moderateScale(20),
    borderBottomRightRadius: scale.moderateScale(20),
    backgroundColor: "transparent",
    marginBottom: scale.moderateScale(10),
    alignItems: "center",
    borderColor: "#ccc",
    borderWidth: scale.moderateScale(0.5),
    borderTopWidth: 0
  },
  footerText: {fontWeight: "bold", fontSize: scale.moderateScale(18)},
  priceAreaContainer: {
    position: "absolute",
    bottom: 0,
    right: scale.moderateScale(5),
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
    padding: scale.moderateScale(5),
    backgroundColor: "#34A853",
    borderTopLeftRadius: scale.moderateScale(10),
    borderBottomRightRadius: scale.moderateScale(10)
  },
  priceAreaLabelText: {color: "white", fontWeight: "bold"},
  requestContainer: {
    marginBottom: scale.moderateScale(8),
    paddingLeft: scale.moderateScale(10),
    paddingRight: scale.moderateScale(10)
  },
  requestItem: {
    flexDirection: "row"
  },
  requestLabel: {color: "#0072bc", fontWeight: "bold"},
  requestContent: {
    flex: 1
  },
  loadingTextWr: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  }
})

export default styles
