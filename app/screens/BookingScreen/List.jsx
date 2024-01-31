import React from "react";
import { StyleSheet, Text, View, SectionList } from "react-native";

const DATA = [
  // {
  //   title: "Main dishes",
  //   data: [],
  // },
  {
    title: "Store",
    data: [
      "WMB",
      "WMB2"
      // ,
    //   "Fried Shrimps",
    //   "French Fries",
    //   "Onion Rings",
    //   "Fried Shrimps",
    //   "French Fries",
    //   "Onion Rings",
    //   "Fried Shrimps",
    //   "French Fries",
    //   "Onion Rings",
    //   "Fried Shrimps",
    ]
  },
];

export default function List() {
  return (
    <View>
      <SectionList
        sections={DATA}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.title}>{item}</Text>
          </View>
        )}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.header}>{title}</Text>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
  },
  header: {
    fontSize: 32,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
  },
});
