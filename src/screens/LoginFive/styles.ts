import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";

const windowHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
  },

  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff",
    paddingBottom: 5,
  },

  logoWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },

  logoImgContainer: {
    width: 26,
    height: 26,
  },

  logo: {
    flex: 1,
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },

  logoText: {
    fontSize: 18,
    fontFamily: "Exo_900Black",
    color: "#EC0C92",
    marginLeft: 8,
  },

  imageContainer: {
    width: "100%",
    height: "42%",
    minHeight: windowHeight * 0.42,
    marginTop: -35,
    zIndex: -1,
  },

  image: {
    flex: 1,
    width: "100%",
    height: "100%",
    marginTop: -35,
  },

  content: {
    width: "100%",
    maxWidth: 450,
    alignItems: "center",
    paddingHorizontal: 30,
  },

  titleArea: {
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "1%",
    marginBottom: 8,
    paddingHorizontal: 9,
  },

  title: {
    fontSize: 28,
    fontFamily: "Poppins_700Bold",
  },

  socialButton: {
    borderWidth: 0.8,
    borderColor: "#c9c9c9",
    width: 44,
    height: 44,
    borderRadius: 14,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 8,
  },

  labelStyle: {
    marginBottom: 6,
    fontSize: 13,
  },

  inputContainerStyle: {
    borderWidth: 0.8,
    borderColor: "#c9c9c9",
    borderRadius: 15,
    height: 50,
  },

  leftIconContainerStyle: {
    height: 25,
    width: 48,
    borderRightWidth: 0.8,
    borderColor: "#c9c9c9",
  },

  icon: {
    marginLeft: 7,
  },

  inputStyle: {
    marginLeft: 10,
    fontSize: 13,
  },

  rememberArea: {
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 9,
    marginTop: -4,
  },

  switch: {
    transform: [{ scaleX: 0.7 }, { scaleY: 0.7 }],
  },

  remember: {
    alignItems: "center",
  },

  rememberText: {
    fontSize: 13,
    fontFamily: "Poppins_600SemiBold",
  },

  forgetText: {
    fontSize: 13,
    fontFamily: "Poppins_600SemiBold",
    color: "#EC4468",
  },

  signButton: {
    width: "100%",
    marginVertical: 7,
    paddingHorizontal: 9,
  },

  signGradient: {
    height: 45,
    borderRadius: 15,
    justifyContent: "center",
  },

  signText: {
    color: "#fff",
    alignSelf: "center",
    fontFamily: "Poppins_600SemiBold",
    fontSize: 13,
  },
});

export default styles;
