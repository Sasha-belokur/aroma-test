import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "react-navigation";

import MenuScreen from "./src/screens/MenuScreen";
import MenuSectionScreen from "./src/screens/MenuSectionScreen";
import MenuSectionItemScreen from "./src/screens/MenuSectionItemScreen";

const RootStack = createStackNavigator(
  {
    Menu: MenuScreen,
    MenuSection: MenuSectionScreen,
    MenuSectionItem: MenuSectionItemScreen,
  },
  {
    initialRouteName: "MenuSectionItem",
    navigationOptions: {
      headerStyle: {
        backgroundColor: "#533019"
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold"
      }
    }
  }
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}
