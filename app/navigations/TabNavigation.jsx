import { Text } from "react-native";
import React, { useState, useEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen/ProfileScreen";
import BookingScreen from "../screens/BookingScreen/BookingScreen";
import Colors from "../utils/Colors";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Tab = createBottomTabNavigator();


export default function TabNavigation() {

  const [role, setRole] = useState();

  useEffect(async () => {
    const role = await AsyncStorage.getItem("role");
   
    setRole(role);

  }, []);

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Colors.PRIMARY_COLOR,
      }}
    >
      <Tab.Screen
        name="home"
        component={HomeScreen}
        options={{
          tabBarLabel: ({ color }) => (
            <Text
              style={{
                color: color,
                fontSize: 12,
                marginTop: -7,
              }}
            >
              Products
            </Text>
          ),
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="appstore-o" size={24} color={color} />
          ),
        }}
      />
      {role === "ROLE_ADMIN" ? (
        <Tab.Screen
          name="Store"
          component={BookingScreen}
          options={{
            tabBarLabel: ({ color }) => (
              <Text
                style={{
                  color: color,
                  fontSize: 12,
                  marginTop: -7,
                }}
              >
                Store
              </Text>
            ),
            tabBarIcon: ({ color, size }) => (
              <AntDesign name="isv" size={24} color={color} />
            ),
          }}
        />
      ) : null}
      <Tab.Screen
        name="profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: ({ color }) => (
            <Text
              style={{
                color: color,
                fontSize: 12,
                marginTop: -7,
              }}
            >
              Profile
            </Text>
          ),
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="account-outline"
              size={24}
              color={color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
