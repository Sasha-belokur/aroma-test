import React, { Component } from "react";
import { ScrollView, Text, StyleSheet, Alert, Button } from "react-native";

import MenuItem from "../components/MenuItem";

import menuData from "../assets/menuData";

class MenuScreen extends Component {
  static navigationOptions = {
    title: "Меню"
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        {menuData.map((item, index) => (
          <MenuItem
            onPress={this.props.navigation.navigate}
            id={item.id}
            key={item.id}
            uri={item.image}
            backgroundColor={item.color}
            title={item.title}
            index={index}
          />
        ))}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default MenuScreen;
