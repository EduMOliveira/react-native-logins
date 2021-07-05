import { Dimensions, StyleSheet } from "react-native";

const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    flexDirection: "column",
  },

  content: {
    maxWidth: 600,
    justifyContent: "flex-end",
    width: "100%",
    margin: 20,
    padding: 20,
    marginTop: 40,
  },

  logoContainer: {
    alignItems: "center",
    alignSelf: "center",
    width: windowHeight * 0.71,
    maxWidth: 230,
    height: windowWidth * 0.61,
    maxHeight: 250,
  },

  txtWelcome: {
    fontFamily: "Rajdhani_700Bold",
    fontSize: 30,
    color: "#4d4b4b",
  },

  rowButton: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 30,
  },

  buttonLogin: {
    backgroundColor: "#4d4b4b",
    width: windowWidth * 0.17,
    maxWidth: 80,
    height: windowWidth * 0.17,
    maxHeight: 80,
    borderRadius: windowWidth * 0.17,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 15,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 8,
  },

  bottomTitle: {
    fontFamily: "Inter_700Bold",
    fontSize: 28,
    color: "#4d4b4b",
  },

  labelStyle: {
    fontSize: 16,
    color: "#9c9a9a",
    fontFamily: "Rajdhani_700Bold",
  },

  inputContainerStyle: {
    height: 35,
    borderColor: "#cfcfcf",
    overflow: "hidden",
    borderRadius: 3,
  },

  inputStyle: {
    fontSize: 14,
    margin: 10,
  },

  rowForgot: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 40,
    paddingHorizontal: 30,
  },

  btnsText: {
    fontFamily: "Inter_600SemiBold",
    fontSize: 14,
    color: "#4d4b4b",
  },
});

export default styles;
