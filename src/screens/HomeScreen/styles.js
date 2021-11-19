import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#242D34",
    alignItems: "center",
    justifyContent: "center",
  },

  bgImage: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 15,
  },

  titleText: {
    fontSize: 24,
    color: "white",
    position: "absolute",
    top: 50,
  },

  map: {
    width: "80%",
    aspectRatio: 1,
  },

  row: {
    flex: 1,
    flexDirection: "row",
  },

  buttons: {
    position: "absolute",
    bottom: 50,
    flexDirection: "row",
  },

  button: {
    color: "white",
    margin: 10,
    fontSize: 16,
    backgroundColor: "#191F24",
    padding: 10,
    paddingHorizontal: 15,
  },

});

export default styles;
