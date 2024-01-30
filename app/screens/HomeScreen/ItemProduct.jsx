import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import Colors from "../../utils/Colors";

export default function ItemProduct({ id, name, desc }) {
  return (
    <View style={styles.containerItem}>
      <Image
        source={require("../../../assets/images/cargo-truck.png")}
        style={styles.imageItem}
      />
      <View style={styles.textItem}>
        <Text style={styles.titleItem}>{name}</Text>
        <Text>{desc}</Text>
        <Text>{id}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
  },
  containerItem: {
    margin: 2,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 16,
    backgroundColor: Colors.WHITE,
    flexDirection: "row",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  imageItem: {
    width: 150,
    height: 150,
    borderBottomLeftRadius: 16,
    borderTopLeftRadius: 16,
  },
  textItem: {
    padding: 10,
    flex: 1,
  },
  titleItem: {
    fontSize: 12,
    color: Colors.PRIMARY_COLOR,
  },
});
