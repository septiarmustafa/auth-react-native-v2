import { StatusBar } from "expo-status-bar";
import * as SecureStore from "expo-secure-store";
import { StyleSheet, View } from "react-native";
import { ClerkProvider, SignedIn, SignedOut } from "@clerk/clerk-expo";
import { useFonts } from "expo-font";
import LoginScreen from "./app/screens/LoginScreen/LoginScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import TabNavigation from "./app/navigations/TabNavigation";
import * as React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const tokenCache = {
  async getToken(key) {
    try {
      return SecureStore.getItemAsync(key);
    } catch (err) {
      return null;
    }
  },
  async saveToken(key, value) {
    try {
      return SecureStore.setItemAsync(key, value);
    } catch (err) {
      return;
    }
  },
};

const Stack = createStackNavigator();

export default function App() {
  const [signedIn, setSignedIn] = React.useState(false);
  const [fontsLoaded, fontError] = useFonts({
    outfit: require("./assets/fonts/Outfit-Regular.ttf"),
    outfit_bold: require("./assets/fonts/Outfit-Bold.ttf"),
    outfit_medium: require("./assets/fonts/Outfit-Medium.ttf"),
  });

  const getIsSignedIn = async () => {
    let isSignedIn = await AsyncStorage.getItem("token");
    setSignedIn(isSignedIn ? true : false);
  };

  React.useEffect(() => {
    console.log();
    getIsSignedIn();
  }, []);

  return (
    <ClerkProvider
      publishableKey="pk_test_YnVzeS1sb3VzZS03Ny5jbGVyay5hY2NvdW50cy5kZXYk"
      tokenCache={tokenCache}
    >
      <NavigationContainer>
        <View style={styles.container}>
          <SignedIn>
            <Stack.Navigator>
              <Stack.Screen
                name="Tab"
                component={TabNavigation}
                options={{ headerShown: false }}
              />
            </Stack.Navigator>
          </SignedIn>
          {signedIn ? (
            <SignedOut>
              <Stack.Navigator>
                <Stack.Screen
                  name="Tab"
                  component={TabNavigation}
                  options={{ headerShown: false }}
                />
              </Stack.Navigator>
            </SignedOut>
          ) : (
            <SignedOut>
              <Stack.Navigator>
                <Stack.Screen
                  name="Login"
                  component={LoginScreen}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="Tab"
                  component={TabNavigation}
                  options={{ headerShown: false }}
                />
              </Stack.Navigator>
            </SignedOut>
          )}
          <StatusBar style="auto" />
        </View>
      </NavigationContainer>
    </ClerkProvider>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
