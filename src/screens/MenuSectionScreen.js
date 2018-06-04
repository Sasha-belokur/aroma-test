import React, { Component } from "react";
import { ScrollView, Text, StyleSheet, Alert, Button } from "react-native";

import MenuSectionItem from "../components/MenuSectionItem";

import menuSectionData from "../assets/menuSectionData";

class MenuSectionScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam("title", "Категория товаров")
    };
  };

  render() {
    const { navigation } = this.props;
    const id = navigation.getParam("id", 1);
    const selectedSection = menuSectionData[id];

    return (
      <ScrollView style={styles.container}>
        {selectedSection.map((item, index) => (
          <MenuSectionItem
            key={item.id}
            borderTop={index !== 0}
            uri={item.image}
            title={item.title}
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
    marginVertical: 10,
    backgroundColor: "#00B8F1"
  }
});

export default MenuSectionScreen;
