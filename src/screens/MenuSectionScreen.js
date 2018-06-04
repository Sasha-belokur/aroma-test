import React, { Component } from "react";
import { ScrollView, Text, StyleSheet, Alert, Button } from "react-native";

import MenuSectionItem from "../components/MenuSectionItem";

import menuSectionData from "../assets/menuSectionData";

class MenuSectionScreen extends Component {
  static navigationOptions = {
    title: "Меню секшн"
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        {menuSectionData.map(item => (
        <MenuSectionItem
          image={item.image}
        />
        ))}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 25,
    marginVertical: 10
  }
});

export default MenuSectionScreen;
