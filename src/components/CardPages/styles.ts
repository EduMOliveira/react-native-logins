import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  cardContainer: {
    height: 80,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    marginHorizontal: 30,
    marginVertical: 10,
    padding: 15,
    borderRadius: 8,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.1,
    shadowRadius: 7.49,

    elevation: 12,
  },

  cardColor: {
    width: 50,
    height: 50,
    borderRadius: 10,
    backgroundColor: "green",
  },

  rowBetween: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
  },

  cardTitle: {
    marginLeft: 20,
    fontFamily: "Rajdhani_700Bold",
    fontSize: 20,
  },

  cardButton: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    width: 50,
    height: 50,
    borderRadius: 50,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 7.49,

    elevation: 18,
  },
});

export default styles;
