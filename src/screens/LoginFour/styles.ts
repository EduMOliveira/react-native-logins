import { StyleSheet } from "react-native";

const style = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    paddingTop: 20,
  },

  logoContainer: {
    width: 150,
    height: 100,
  },

  image: {
    flex: 1,
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },

  ballOne: {
    position: "absolute",
    width: 10,
    height: 10,
    borderRadius: 10,
    backgroundColor: "#7000F0",
    opacity: 0.4,
    alignSelf: "flex-end",
  },

  ballTwo: {
    position: "absolute",
    width: 17,
    height: 17,
    borderRadius: 17,
    backgroundColor: "#7000F0",
    opacity: 0.4,
    marginTop: 50,
  },

  ballThree: {
    position: "absolute",
    width: 20,
    height: 20,
    borderRadius: 20,
    backgroundColor: "#7000F0",
    opacity: 0.4,
    marginTop: 85,
    marginLeft: 125,
  },

  titleContainer: {
    paddingVertical: 30,
    flexDirection: "column",
    alignItems: "center",
  },

  title: {
    fontFamily: "NotoSansTC_700Bold",
    fontSize: 25,
    color: "#525252",
    lineHeight: 42,
  },

  subTitle: {
    fontFamily: "NotoSansTC_700Bold",
    fontSize: 13,
    color: "#525252",
    margin: -5,
  },

  inputsContainer: {
    width: "95%",
    maxWidth: 320,
  },

  containerStyle: {
    height: 55,
    borderWidth: 1,
    borderRadius: 9,
    borderColor: "#e0e0e0",
    backgroundColor: "#e6e6e6",
    paddingHorizontal: 17,
  },

  inputContainerStyle: {
    borderBottomWidth: 0,
  },

  inputStyle: {
    fontSize: 14,
    marginTop: -15,
  },

  labelStyle: {
    marginTop: 6,
    fontSize: 14,
    color: "#a6a4a4",
    fontFamily: "Rajdhani_700Bold",
    marginBottom: 3,
  },

  errorStyle: {
    height: 0,
  },

  rightIconContainerStyle: {
    marginTop: -22,
  },

  buttonLogin: {
    justifyContent: "center",
    alignItems: "center",
    height: 55,
    width: "100%",
    maxWidth: 320,
    marginTop: 20,
    marginBottom: 10,
    borderRadius: 9,
    backgroundColor: "#7000F0",
  },

  buttonLoginText: {
    color: "#fff",
    fontFamily: "NotoSansTC_700Bold",
  },

  forgotContainer: {
    alignSelf: "center",
    marginBottom: 20,
  },

  forgot: {
    color: "#7000F0",
  },
});

export default style;
