import React from "react";
import HomeScreen from "../screens/Home/HomeScreen";

export default function App() {
  return <HomeScreen></HomeScreen>;
}

// import React from "react";
// import { SafeAreaView, StyleSheet, View } from "react-native";
// import { colors } from "../themes/colors";
// import HomeScreen from "../screens/Home/HomeScreen";
// import Navbar from "../components/Navbar/Navbar";

// export default function App() {
//   return (
//     <SafeAreaView style={styles.safeArea}>
//       <View style={styles.contentContainer}>
//         <HomeScreen />
//       </View>
//       <Navbar style={styles.navbar} />
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   safeArea: {
//     flex: 1,
//     backgroundColor: colors.background,
//   },
//   contentContainer: {
//     flex: 1,
//   },
//   navbar: {
//     position: "absolute",
//     bottom: 0,
//     left: 0,
//     right: 0,
//     zIndex: 10,
//   },
// });
