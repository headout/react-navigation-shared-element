import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { NavigationContainer } from "@react-navigation/native";
import * as React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { createSharedElementStackNavigator } from "react-navigation-shared-element";

import { MainScreen, DetailScreen } from "../screens";

const name = "MaterialTopTabs";

const MaterialTopTab = createMaterialTopTabNavigator();

const Stack1 = createSharedElementStackNavigator({
  name,
  debug: true,
});

const Stack2 = createSharedElementStackNavigator({
  name,
  debug: true,
});

const Stack1Screen = () => (
  <Stack1.Navigator>
    <Stack1.Screen name={name} component={MainScreen} />
    <Stack1.Screen name="Detail" component={DetailScreen} />
  </Stack1.Navigator>
);

const Stack2Screen = () => (
  <Stack2.Navigator>
    <Stack2.Screen name={name} component={MainScreen} />
    <Stack2.Screen name="Detail" component={DetailScreen} />
  </Stack2.Navigator>
);

export default () => (
  <NavigationContainer>
    <SafeAreaView style={{ flex: 1 }}>
      {/* @ts-ignore: No overload matches this call when using react navigation 6 */}
      <MaterialTopTab.Navigator>
        <MaterialTopTab.Screen name="Tab1" component={Stack1Screen} />
        <MaterialTopTab.Screen name="Tab2" component={Stack2Screen} />
      </MaterialTopTab.Navigator>
    </SafeAreaView>
  </NavigationContainer>
);
