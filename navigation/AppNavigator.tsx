// import React from "react";
// import { createStackNavigator } from "@react-navigation/stack";
// import { ROUTES } from "./routes";

// import HomeScreen from "../screens/Home/HomeScreen";
// import LoginScreen from "../screens/Login/LoginScreen";
// import SearchScreen from "../screens/Search/SearchScreen";
// import ContentDetailsScreen from "../screens/ContentDetails/ContentDetailsScreen";
// import WatchListScreen from "../screens/WatchList/WatchListScreen";

// const Stack = createStackNavigator();

// export default function AppNavigator() {
//   return (
//     <Stack.Navigator
//       initialRouteName={ROUTES.HOME}
//       screenOptions={{ headerShown: false }}
//     >
//       <Stack.Screen name={ROUTES.HOME} component={HomeScreen} />
//       <Stack.Screen name={ROUTES.LOGIN} component={LoginScreen} />
//       <Stack.Screen name={ROUTES.SEARCH} component={SearchScreen} />
//       <Stack.Screen
//         name={ROUTES.CONTENT_DETAILS}
//         component={ContentDetailsScreen}
//       />
//       <Stack.Screen name={ROUTES.WATCHLIST} component={WatchListScreen} />
//     </Stack.Navigator>
//   );
// }
