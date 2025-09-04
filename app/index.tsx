import React from "react";
import HomeScreen from "../screens/Home/HomeScreen";
// import { NavigationContainer } from "@react-navigation/native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default function App() {
  return <HomeScreen></HomeScreen>;
}

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

// import HomeScreen from "@/screens/Home/HomeScreen";
// import SearchScreen from "@/screens/Search/SearchScreen";
// import ContentWatchListScreen from "@/screens/ContentDetails/ContentWatchListScreen";
// import LoginScreen from "@/screens/Login/LoginScreen";

// const Stack = createNativeStackNavigator();

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Home">
//         <Stack.Screen name="Home" component={HomeScreen} />
//         <Stack.Screen name="Search" component={SearchScreen} />
//         <Stack.Screen name="WatchList" component={ContentWatchListScreen} />
//         <Stack.Screen name="Login" component={LoginScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }
