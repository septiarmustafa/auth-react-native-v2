import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { UseWarmUpBrowser } from "../../hooks/warmUpBrowser";
import { useOAuth } from "@clerk/clerk-expo";
import * as WebBrowser from "expo-web-browser";

WebBrowser.maybeCompleteAuthSession();

export default function LoginScreen() {
  const [username, setusername] = useState("");
  const [password, setPassword] = useState("");
  const [hidePassword, setHidePassword] = useState(true);
  const navigation = useNavigation();

  UseWarmUpBrowser();

  const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });

  const onPressGoogle = React.useCallback(async () => {
    try {
      const { createdSessionId, setActive } = await startOAuthFlow();

      if (createdSessionId) {
        setActive({ session: createdSessionId });
      } else {
      }
    } catch (err) {
      console.error("OAuth error", err);
    }
  }, []);

  const handleUsername = (text) => {
    setusername(text);
  };
  const handlePassword = (text) => {
    setPassword(text);
  };

  const togglePasswordVisibility = () => {
    setHidePassword(!hidePassword);
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        "http://10.10.100.207:8081/api/auth/login",
        {
          username,
          password,
        }
      );

      if (response.status === 200) {
        await AsyncStorage.setItem("token", response.data.data.token);
        await AsyncStorage.setItem("role", response.data.data.role);

        console.log("Token and role saved to AsyncStorage");
        console.log(response.data);

        navigation.navigate("Tab");
      } else {
        console.error("Login failed");
        console.error(response.data.message);
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };
  return (
    <View style={styles.container}>
      <ImageBackground
        source={bg}
        resizeMode="cover"
        style={styles.image}
        onError={(error) => console.error("Image load error:", error)}
      >
        <View style={styles.loginContainer}>
          <Text style={styles.title}>Login</Text>
          <TextInput
            style={styles.input}
            placeholder="Username"
            value={username}
            onChangeText={handleUsername}
            placeholderTextColor="white"
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="white"
            secureTextEntry={hidePassword ? true : false}
            value={password}
            onChangeText={handlePassword}
          />
          <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.googleButton} onPress={onPressGoogle}>
            <Text style={styles.buttonText}>Login with Google</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.appleButton}>
            <Text style={styles.buttonText}>Login with Apple</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}

const bg = require("../../../assets/images/bg.jpg");

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  loginContainer: {
    padding: 20,
    backgroundColor: "rgba(255, 255, 255, 0.25)",
    borderRadius: 10,
    margin: 40,
  },
  title: {
    fontSize: 24,
    color: "white",
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    height: 40,
    borderColor: "white",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
    color: "white",
  },
  loginButton: {
    backgroundColor: "#3498db",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    marginBottom: 10,
  },
  googleButton: {
    backgroundColor: "#dd4b39",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    marginBottom: 10,
  },
  appleButton: {
    backgroundColor: "#000",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
  toggleButton: {
    position: "absolute",
    top: 10,
    right: 10,
  },
  toggleText: {
    color: "white",
  },
});
