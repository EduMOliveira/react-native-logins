import { Dimensions, StyleSheet } from "react-native";

const windowHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
  },

  logoBackgroundContainer: {
    position: "absolute",
    width: "100%",
    alignItems: "flex-end",
  },

  content: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    marginHorizontal: 20,
    paddingVertical: 10,
  },

  introContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "center",
  },

  introIcon: {
    width: windowHeight * 0.13,
    height: windowHeight * 0.13,
    maxWidth: 85,
    maxHeight: 85,
  },

  introTitle: {
    fontFamily: "Pacifico_400Regular",
    color: "#3b3b3b",
    fontSize: 26,
  },

  loginContainer: {
    width: "100%",
    maxWidth: 550,
    alignItems: "center",
    paddingTop: 5,
    paddingBottom: 15,

    backgroundColor: "white",
    marginHorizontal: 25,
    marginVertical: 7,
    borderRadius: 3,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 3.84,
    elevation: 3,
  },

  loginTitle: {
    fontFamily: "Mitr_600SemiBold",
    color: "#3b3b3b",
    marginBottom: -10,
    fontSize: 26,
  },

  loginSubTitle: {
    fontFamily: "Mitr_500Medium",
    letterSpacing: -0.7,
    color: "#3b3b3b",
    fontSize: 15,
    marginBottom: 25,
  },

  loginForgot: {
    fontSize: 14,
    color: "#c9c9c9",
  },

  socialText: {
    color: "#000",
    fontWeight: "bold",
    marginTop: 5,
    marginBottom: 8,
    fontSize: 12,
  },

  socialContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: 80,
  },
});

export default styles;
