import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Main from "../screens/Main";
import LoginOne from "../screens/LoginOne";
import LoginTwo from "../screens/LoginTwo";
import LoginThree from "../screens/LoginThree";
import LoginFour from "../screens/LoginFour";
import LoginFive from "../screens/LoginFive";

const { Navigator, Screen } = createStackNavigator();

const AuthRoutes = () => {
  return (
    <Navigator
      headerMode={"none"}
      screenOptions={{
        headerBackTitleVisible: false,
      }}
    >
      <Screen name="Main" component={Main} />
      <Screen name="LoginOne" component={LoginOne} />
      <Screen name="LoginTwo" component={LoginTwo} />
      <Screen name="LoginThree" component={LoginThree} />
      <Screen name="LoginFour" component={LoginFour} />
      <Screen name="LoginFive" component={LoginFive} />
    </Navigator>
  );
};

export default AuthRoutes;
