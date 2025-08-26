import React from "react";
import { SafeAreaView, StyleSheet, View, Text, ScrollView } from "react-native";
import { colors } from "../themes/colors";
import Navbar from "../components/Navbar/Navbar";

export default function Page() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Navbar></Navbar>
        {/* PROFILE ICON
            HOME: img, title, descript.
            BUTTONS
            TRENDING NOW
            NAVBAR
         */}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.background,
  },
  container: {},
});

// export default function Page() {
//   return (
//     <View style={styles.container}>
//       <View style={styles.main}>
//         <Text style={styles.title}>Hello World</Text>
//         <Text style={styles.subtitle}>This is the first page of your app.</Text>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: "center",
//     padding: 24,
//   },
//   main: {
//     flex: 1,
//     justifyContent: "center",
//     maxWidth: 960,
//     marginHorizontal: "auto",
//   },
//   title: {
//     fontSize: 64,
//     fontWeight: "bold",
//   },
//   subtitle: {
//     fontSize: 36,
//     color: "#38434D",
//   },
// });
