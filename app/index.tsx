import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { SafeAreaView, StyleSheet } from "react-native";
import { colors } from "../themes/colors";
import ContentEpisodeScreen from "../screens/ContentDetails/ContentEpisodeScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ContentEpisodeScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: colors.background,
  },
});

// TRY: later to solve proper navigation

// import React from "react";
// import { NavigationContainer } from "@react-navigation/native";
// import AppNavigator from "../navigation/AppNavigator";

// export default function App() {
//   return (
//     <NavigationContainer>
//       <AppNavigator />
//     </NavigationContainer>
//   );
// }
