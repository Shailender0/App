const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Profile from "./screens/Profile";
import Login from "./screens/Login";
import Home from "./screens/Home";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const App = () => {
  return (
    <>


      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Profile"
            component={Profile}
            options={{ headerShown: false }}
          />

        </Stack.Navigator>
      </NavigationContainer>

    </>
  );
};
export default App;
