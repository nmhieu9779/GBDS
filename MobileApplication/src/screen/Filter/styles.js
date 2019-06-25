import {StyleSheet} from "react-native"
import {scale} from "@src/utilities"

export const stylesFor = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "white"
  },
  priceContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: scale.moderateScale(5),
    marginTop: scale.moderateScale(5),
    marginBottom: scale.moderateScale(5)
  },
  textInput: {
    borderRadius: scale.moderateScale(5),
    borderWidth: scale.moderateScale(0.5),
    borderColor: "#ccc",
    flex: 1,
    paddingTop: scale.moderateScale(5),
    paddingBottom: scale.moderateScale(5),
    marginLeft: scale.moderateScale(5),
    marginRight: scale.moderateScale(5),
    textAlign: "center"
  },
  priceLabel: {
    marginLeft: scale.moderateScale(5),
    fontWeight: "bold"
  },
  areaLabel: {
    flex: 1
  },
  areaContainer: {
    flex: 2,
    alignItems: "center",
    flexDirection: "row"
  }
})

export const stylesNeed = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  }
})

export const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  closeContainer: {
    alignItems: "flex-end",
    marginBottom: scale.moderateScale(10)
  },
  icon: {
    marginTop: scale.moderateScale(5),
    marginRight: scale.moderateScale(5)
  },
  containerCombobox: {
    width: scale.WIDTH
  },
  combobox: {flex: 2}
})

export const stylesGroup = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center"
  },
  checkBoxContainer: {
    width: scale.moderateScale(20),
    height: scale.moderateScale(20),
    marginRight: scale.moderateScale(5)
  },
  checkBox: {
    flex: 1,
    borderRadius: scale.moderateScale(5),
    borderWidth: scale.moderateScale(2),
    justifyContent: "center",
    alignItems: "center"
  },
  groupCheckbox: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: scale.moderateScale(5),
    marginBottom: scale.moderateScale(10)
  },
  groupBtn: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: scale.WIDTH
  },
  btnContainer: {
    borderRadius: scale.moderateScale(5),
    paddingTop: scale.moderateScale(10),
    paddingBottom: scale.moderateScale(10),
    width: scale.WIDTH / 3,
    justifyContent: "center",
    alignItems: "center"
  },
  btnLabel: {
    color: "white"
  }
})
