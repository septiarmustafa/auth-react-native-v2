import { View, Text, FlatList, Image, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
// import GlobalApi from "../../utils/GlobalApi";

export default function Slider() {
  const [slider, setSlider] = useState([]);

  // useEffect(() => {
  //   fetchSlider(); // Change the function name to fetchSlider
  // }, []);

  // const fetchSlider = async () => {
  //   try {
  //     const resp = await GlobalApi.getSlider(); // Use await to wait for the Promise
  //     console.log("res", resp);
  //     setSlider(resp?.sliders);
  //   } catch (error) {
  //     console.error("Error fetching slider:", error);
  //   }
  // };

  return (
    <View>
      <Text style={styles.heading}>Offers For you</Text>
      <FlatList
        data={slider}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <View>
            <Image
              style={styles.sliderImage}
              key={index}
              source={{ uri: item?.image?.url }}
            />
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 20,
    margin: 10,
    fontFamily: "outfit_medium",
  },
  sliderImage: {
    width: 230,
    height: 150,
    borderRadius: 10,
    objectFit: "contain",
    margin: 10,
    resizeMode: "contain",
  },
});
