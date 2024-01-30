import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import Colors from "../../utils/Colors";
import { AntDesign } from "@expo/vector-icons";
import { useClerk } from "@clerk/clerk-react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function ProfileScreen() {
  const navigation = useNavigation();
  const { signOut } = useClerk();

  const handleLogout = async () => {
    try {
      await signOut();
      await AsyncStorage.removeItem("token");
      await AsyncStorage.removeItem("role");

      navigation.navigate("Login");
    } catch (error) {
      console.error("Clerk logout error", error);
    }
  };

  return (
    <View>
      <View style={styles.container}>
        <Image
          source={require("./../../../assets/baim.jpg")}
          style={styles.userImage}
        />
        <Text style={styles.userName}>Baim Wong</Text>
      </View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("BookingScreen");
        }}
      >
        <View style={styles.card}>
          <AntDesign name="hearto" size={24} color="black" />
          <Text style={styles.cardText}>Favorit</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.card}>
        <AntDesign name="shoppingcart" size={24} color="black" />
        <Text style={styles.cardText}>Order</Text>
      </View>
      <View style={styles.card}>
        <AntDesign name="file1" size={24} color="black" />
        <Text style={styles.cardText}>Cart</Text>
      </View>
      <TouchableOpacity onPress={handleLogout}>
        <View style={styles.card}>
          <AntDesign name="logout" size={24} color="black" />
          <Text style={styles.cardText}>Logout</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  userImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    display: "flex",
    marginLeft: "auto",
    marginRight: "auto",
  },
  container: {
    padding: 20,
    paddingTop: 40,
    backgroundColor: Colors.PRIMARY_COLOR,
  },
  userName: {
    fontSize: 20,
    color: Colors.WHITE,
    textAlign: "center",
    fontFamily: "outfit_bold",
    marginTop: 15,
  },
  card: {
    backgroundColor: Colors.WHITE,
    padding: 20,
    borderBottomWidth: 0.5,
    flexDirection: "row",
  },
  cardText: {
    fontSize: 20,
    marginLeft: 20,
  },
  logo: {
    flexDirection: "row",
  },
});
