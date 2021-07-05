import { Dimensions, StyleSheet } from "react-native";

const windowHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#f6f6f6",
    flexDirection: "column",
  },

  bgWrapper: {
    width: "100%",
    height: windowHeight * 0.29,
    maxHeight: 300,
    overflow: "hidden",
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },

  bg: {
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },

  title: {
    fontFamily: "Rajdhani_700Bold",
    color: "#fff",
    fontSize: 48,
  },

  loginContainer: {
    maxWidth: 600,
    backgroundColor: "#fff",
    width: "93%",
    marginTop: "-10%",
    marginBottom: 15,
    paddingBottom: 20,
    borderRadius: 10,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 3,
  },

  loginTitle: {
    padding: 20,
    paddingLeft: 25,
    paddingBottom: 13,
    fontSize: 30,
    fontFamily: "Inter_900Black",
  },

  labelStyle: {
    fontSize: 10,
    color: "#d1d1d1",
    fontFamily: "Rajdhani_700Bold",
    marginBottom: 3,
  },

  inputContainerStyle: {
    height: 45,
    borderColor: "#d1d1d1",
    borderWidth: 1,
    overflow: "hidden",
    borderRadius: 3,
  },

  leftIconContainerStyle: {
    borderRightWidth: 1,
    width: 45,
    height: 45,
    padding: 5,
    borderColor: "#d1d1d1",
    justifyContent: "center",
    backgroundColor: "#f6f6f6",
  },

  inputStyle: {
    fontSize: 14,
    margin: 10,
  },

  forgotContainer: {
    marginLeft: 25,
    alignSelf: "flex-start",
  },

  forgotButton: {
    color: "#fc6076",
    fontWeight: "bold",
    marginTop: -7,
  },

  buttonContainer: {
    marginTop: 25,
    alignSelf: "center",
    width: "86%",
  },

  buttonGradient: {
    alignSelf: "center",
    height: 40,
    width: "100%",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },

  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontFamily: "Rajdhani_700Bold",
  },

  socialButton: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",

    width: "93%",
    maxWidth: 600,
    height: 43,
    marginTop: 10,
    backgroundColor: "#fff",
    borderWidth: 0.7,
    borderRadius: 3,
    borderColor: "#d1d1d1",
  },

  socialIcon: {
    position: "absolute",
    paddingLeft: 10,
  },

  socialButtonSvg: {
    width: 23,
    height: 23,
    marginLeft: 10,
    position: "absolute",
  },

  socialButtonText: {
    width: "100%",
    textAlign: "center",
    fontFamily: "Rajdhani_700Bold",
  },
});

export default styles;
