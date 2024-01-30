// import { useClerk } from "@clerk/clerk-react";
// import { Text, TouchableOpacity, View } from "react-native";

// export const SignOutButton = ({ navigation }) => {
//   const { signOut } = useClerk();

//   const handleLogout = async () => {
//     try {
//       await signOut();

//       navigation.navigate("Login");
//     } catch (error) {
//       console.error("Clerk logout error", error);
//     }
//   };

//   return (
//     <TouchableOpacity onPress={handleLogout}>
//       <View>
//         <Text
//           style={{
//             alignSelf: "center",
//             backgroundColor: "black",
//             fontSize: 17,
//             textAlign: "center",
//             color: "white",
//             padding: 10,
//           }}
//         >
//           Logout
//         </Text>
//       </View>
//     </TouchableOpacity>
//   );
// };
