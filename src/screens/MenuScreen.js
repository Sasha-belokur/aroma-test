import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

import Menu from "../components/Menu";

class MenuScreen extends Component {
  static navigationOptions = {
    title: "Меню"
  };

  render() {
    return <Menu navigate={this.props.navigation.navigate} />;
  }
}

export default MenuScreen;
