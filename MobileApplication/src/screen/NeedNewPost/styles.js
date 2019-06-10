import {StyleSheet} from "react-native"
import {moderateScale, WIDTH} from "@src/utilities/scale"

export const styles_main = StyleSheet.create({
  container: {flex: 1, backgroundColor: "white"}
})

export const styles_step1 = StyleSheet.create({
  container: {width: WIDTH},
  contentContainerStyle: {
    alignItems: "center"
  }
})

export const styles_step2 = StyleSheet.create({
  container: {width: WIDTH},
  contentContainerStyle: {
    alignItems: "center"
  },
  infoPostLabel: {
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 10
  },
  infoPostContainer: {margin: 10},
  infoPostTextInput: {
    height: WIDTH / 2,
    width: WIDTH - 10,
    margin: 10,
    padding: 10,
    borderWidth: 0.5,
    borderColor: "#ccc",
    borderRadius: 10
  }
})

export const styles_step3 = StyleSheet.create({
  container: {width: WIDTH},
  contentContainerStyle: {
    alignItems: "center"
  },
  footer: {marginTop: moderateScale(100), alignItems: "center"},
  btnPost: {
    width: moderateScale(300),
    height: moderateScale(40),
    backgroundColor: "red",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center"
  }
})
