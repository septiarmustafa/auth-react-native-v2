import { View, StyleSheet, Image, Text, TextInput } from "react-native";
import React from "react";
// import { useUser } from "@clerk/clerk-expo";
import Colors from "../../utils/Colors";
import { FontAwesome } from "@expo/vector-icons";

export default function Header() {
  // const { user, isLoading } = useUser();

  return (
    <View style={styles.container}>
      <View style={styles.profileMainContainer}>
        <View style={styles.profileContainer}>
          <Image source={{ uri: "" }} style={styles.userImage} />
          <View>
            <Text style={styles.welcome}>Welcome,</Text>
            <Text style={styles.userName}>username</Text>
          </View>
        </View>
        <FontAwesome name="bookmark" size={26} color={Colors.WHITE} />
      </View>
      <View style={styles.searchBarContainer}>
        <TextInput
          placeholder="Search..."
          placeholderTextColor={Colors.PRIMARY_COLOR}
          style={styles.textInput}
        />
        <FontAwesome
          name="search"
          size={24}
          color={Colors.PRIMARY_COLOR}
          style={styles.searchBtn}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  userImage: {
    width: 48,
    height: 48,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: Colors.WHITE,
  },
  container: {
    padding: 20,
    paddingTop: 20,
    backgroundColor: Colors.PRIMARY_COLOR,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  userName: {
    fontSize: 20,
    color: Colors.WHITE,
    textAlign: "left",
    fontFamily: "outfit_bold",
  },
  welcome: {
    fontSize: 15,
    color: Colors.WHITE,
    textAlign: "left",
    fontFamily: "outfit",
  },
  profileContainer: {
    flexDirection: "row",
    alignItems: "center",
    display: "flex",
    gap: 15,
    marginTop: 20,
    marginBottom: 20,
  },
  profileMainContainer: {
    flexDirection: "row",
    alignItems: "center",
    display: "flex",
    paddingHorizontal: 10,
    justifyContent: "space-between",
  },
  searchBarContainer: {
    marginTop: 10,
    display: "flex",
    flexDirection: "row",
    gap: 10,
    marginBottom: 10,
    marginTop: 20,
    justifyContent: "space-between",
  },
  textInput: {
    padding: 7,
    paddingHorizontal: 16,
    backgroundColor: Colors.WHITE,
    borderRadius: 8,
    width: "85%",
    fontFamily: "outfit",
  },
  searchBtn: {
    padding: 8.5,
    borderRadius: 8,
    width: 40,
    backgroundColor: Colors.WHITE,
  },
});
