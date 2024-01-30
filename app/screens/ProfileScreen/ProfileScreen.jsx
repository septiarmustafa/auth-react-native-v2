import { View } from "react-native";
import React from "react";
// import { SignOutButton } from "../../components/SignOutButton";
import { useNavigation } from "@react-navigation/native";

export default function ProfileScreen() {
  const navigation = useNavigation();

  return <View>{/* <SignOutButton navigation={navigation} /> */}</View>;
}
