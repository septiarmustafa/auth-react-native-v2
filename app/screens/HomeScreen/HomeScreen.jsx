import { View } from "react-native";
import React from "react";
import Header from "./Header";
import Slider from "./Slider";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
    <SafeAreaView>
      <View>
        <Header />
        <Slider />
        <Slider />
      </View>
    </SafeAreaView>
  );
}
