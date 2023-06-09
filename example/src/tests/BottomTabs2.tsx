import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import * as React from "react";
import { createSharedElementStackNavigator } from "react-navigation-shared-element";

import { TabBarIcon } from "../components";
import { MainScreen, DetailScreen } from "../screens";

const name = "BottomTabs2";

const BottomTab = createBottomTabNavigator();

const Stack = createSharedElementStackNavigator({
  name,
  debug: true,
});

const Stack2 = createSharedElementStackNavigator({
  name: "Stack2",
  debug: true,
});

const StackScreen = () => (
  <Stack2.Navigator>
    <Stack2.Screen name="Main" component={MainScreen} />
  </Stack2.Navigator>
);

// In order to ensure that Tab1 works correctly, it is wrapped
// with a shared-element stack navigator. This is a workaround that
// ensures that the screen is wrapped in a shared-element scene.
// In the example below, Tab2 is not wrapped and therefore doesn't
// perform shared-element transitions.
const TabScreen = () => (
  <BottomTab.Navigator screenOptions={{ tabBarIcon: TabBarIcon }}>
    <BottomTab.Screen name="Tab1" component={StackScreen} />
    <BottomTab.Screen name="Tab2" component={MainScreen} />
  </BottomTab.Navigator>
);

export default () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name={name} component={TabScreen} />
      <Stack.Screen name="Detail" component={DetailScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);
