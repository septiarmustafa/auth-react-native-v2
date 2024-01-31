import { View, StyleSheet, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import Header from "./Header";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { SafeAreaView } from "react-native-safe-area-context";
import Colors from "../../utils/Colors";
import { Text } from "react-native";
import axios from "axios";
import { BASE_URL } from "../../config/baseUrl";
import http from "../../config/httpConfig";
import ItemProduct from "./ItemProduct";

export default function HomeScreen() {
  const [selectedId, setSelectedId] = useState();
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const apiEndpoint = BASE_URL+"/product";
    // console.log(apiEndpoint)
    const authToken = AsyncStorage.getItem("token");
    // console.log(authToken);

    http
      .get(apiEndpoint)
      .then((response) => {
        setProducts(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  console.log(products);

  const renderItem = ({ item }) => {
    return (
      <ItemProduct name={item.name} desc={item.description} id={item.id} price={item.productPrice[0].price} />
    );
  };
  return (
    <SafeAreaView>
      <Header />
      <View>
        <View>
          <Text style={styles.title}>Products</Text>
          <FlatList
            data={products}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    fontSize: 32,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 16,
    padding: 10,
    color: Colors.PRIMARY_COLOR,
    fontWeight: "bold",
  },
});
