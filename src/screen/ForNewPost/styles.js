import {StyleSheet, Platform} from "react-native"
import {scale} from "@src/utilities"

export const step1 = StyleSheet.create({
  container: {width: scale.WIDTH, backgroundColor: "white"},
  contentContainerStyle: {
    alignItems: "center"
  },
  labelStyleProductTitle: {
    color: "red"
  },
  area: {
    position: "absolute",
    right: scale.moderateScale(5),
    bottom: scale.moderateScale(3)
  },
  priceContainer: {
    flexDirection: "row",
    padding: scale.moderateScale(5),
    alignItems: "center"
  },
  priceTitle: {fontSize: scale.moderateScale(16), fontWeight: "bold"},
  priceContent: {color: "red", marginLeft: scale.moderateScale(10), flex: 1},
  addressContainer: {
    flexDirection: "row",
    padding: scale.moderateScale(5),
    alignItems: "center",
    marginTop: scale.moderateScale(5)
  },
  addressTitle: {fontSize: scale.moderateScale(16), fontWeight: "bold", marginRight: scale.moderateScale(5)},
  addressTextInputContainer: {
    flex: 1,
    borderColor: "#ccc",
    borderWidth: 0.5,
    borderRadius: 5,
    marginLeft: scale.moderateScale(10),
    padding: scale.moderateScale(5),
    flexDirection: "row"
  },
  addressName: {flex: 1, marginTop: 5},
  price: {
    width: scale.moderateScale(scale.WIDTH / 2),
    position: "absolute",
    right: scale.moderateScale(5),
    bottom: scale.moderateScale(3)
  }
})

export const step2 = StyleSheet.create({
  container: {width: scale.WIDTH, backgroundColor: "white"},
  noteContent: {
    fontStyle: "italic",
    color: "gray",
    textAlign: "right",
    paddingRight: scale.moderateScale(10)
  },
  note: {color: "red"},
  textInput: {
    textAlignVertical: "top",
    height: scale.moderateScale(scale.WIDTH / 2),
    margin: scale.moderateScale(10),
    padding: scale.moderateScale(10),
    borderWidth: 0.5,
    borderColor: "#ccc",
    borderRadius: scale.moderateScale(10)
  },
  suggest: {padding: scale.moderateScale(5)},
  suggestOther: {color: "red"}
})

export const step3 = StyleSheet.create({
  container: {width: scale.WIDTH, backgroundColor: "white"},
  contentContainerStyle: {
    alignItems: "center"
  },
  suggest: {
    fontStyle: "italic",
    color: "gray",
    padding: scale.moderateScale(10)
  },
  containerCombobox: {
    width: scale.WIDTH
  },
  comboboxCombobox: {width: scale.WIDTH},
  labelCombobox: {fontWeight: "bold", fontSize: scale.moderateScale(16)},
  furnitureContainer: {
    padding: scale.moderateScale(5),
    width: scale.WIDTH
  },
  furnitureTitle: {
    fontSize: scale.moderateScale(16),
    fontWeight: "bold",
    marginBottom: scale.moderateScale(5)
  },
  furnitureInput: {
    borderColor: "#ccc",
    borderWidth: 0.5,
    borderRadius: 10,
    padding: scale.moderateScale(5)
  },
  btnAdd: {
    justifyContent: "center",
    borderWidth: 0.5,
    borderColor: "#ccc",
    borderRadius: scale.moderateScale(5),
    padding: scale.moderateScale(5),
    flexDirection: "row",
    alignItems: "center"
  }
})

export const step4 = StyleSheet.create({
  container: {width: scale.WIDTH, backgroundColor: "white"},
  contentContainerStyle: {
    alignItems: "center"
  },
  note: {
    fontStyle: "italic",
    color: "gray",
    padding: scale.moderateScale(10)
  },
  suggest: {
    fontStyle: "italic",
    color: "gray",
    padding: scale.moderateScale(10)
  },
  imageContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around"
  },
  image: {
    width: scale.moderateScale(scale.WIDTH / 2 - 20),
    height: scale.moderateScale(scale.WIDTH / 2 - 20)
  },
  border: {
    borderWidth: 1,
    borderRadius: 5,
    borderStyle: "dashed",
    borderColor: "#C9D9CB"
  },
  center: {
    justifyContent: "center",
    alignItems: "center"
  },
  trashIcon: {
    position: "absolute",
    top: 5,
    right: 5,
    backgroundColor: "white",
    ...Platform.select({ios: {zIndex: 1}, android: {elevation: 1}}),
    padding: scale.moderateScale(10),
    borderRadius: scale.moderateScale(20)
  }
})

export const step5 = StyleSheet.create({
  container: {width: scale.WIDTH, backgroundColor: "white"},
  note: {
    fontStyle: "italic",
    color: "gray",
    padding: scale.moderateScale(10)
  },
  map: {
    width: scale.WIDTH,
    height: scale.HEIGHT / 2
  }
})

export const step6 = StyleSheet.create({
  container: {width: scale.WIDTH, backgroundColor: "white"},
  contentContainerStyle: {alignItems: "center"}
})

export const step7 = StyleSheet.create({
  containerCombobox: {
    width: scale.WIDTH
  },
  combobox: {flex: 2},
  container: {width: scale.WIDTH, backgroundColor: "white"},
  text: {
    padding: scale.moderateScale(5)
  },
  infoVipName: {fontWeight: "bold"},
  note: {color: "blue", fontWeight: "bold"},
  datePickerContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: scale.moderateScale(5)
  },
  datePickerLabel: {flex: 1},
  datePicker: {flex: 3},
  dateIcon: {
    position: "absolute",
    right: 0,
    top: scale.moderateScale(4),
    marginRight: 0
  },
  dateInput: {
    marginRight: scale.moderateScale(36),
    borderRadius: 5
  },
  suggest: {
    fontStyle: "italic",
    color: "gray",
    padding: scale.moderateScale(10)
  },
  footer: {marginBottom: scale.moderateScale(100), alignItems: "center"},
  textFooter: {
    padding: scale.moderateScale(5),
    marginBottom: scale.moderateScale(5),
    width: scale.WIDTH
  },
  total: {fontSize: scale.moderateScale(18), fontWeight: "bold", color: "red"},
  btnPostContainer: {
    width: scale.moderateScale(300),
    height: scale.moderateScale(40),
    backgroundColor: "red",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center"
  },
  btnPost: {
    fontWeight: "bold",
    color: "white"
  }
})

export const main = StyleSheet.create({
  for_sale_post_container: {flex: 1, backgroundColor: "white"}
})
