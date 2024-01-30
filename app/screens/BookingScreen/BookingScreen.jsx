import { View } from "react-native";
import React from "react";
import List from "./List";
import { SafeAreaView } from "react-native-safe-area-context";

export default function BookingScreen() {
  return (
    <SafeAreaView>
      <View>
        <List />
      </View>
    </SafeAreaView>
  );
}
