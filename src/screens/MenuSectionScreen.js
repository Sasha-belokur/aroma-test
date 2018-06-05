import React, { Component } from "react";
import { ScrollView, Text, StyleSheet, Alert, Button, View } from "react-native";

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
        <View style={styles.menuSection}>
          {selectedSection.map((item, index) => {
            const price = item.cost_small || item.cost_medium || item.cost_large;
            return (
            <MenuSectionItem
              key={item.id}
              isFirst={index === 0}
              uri={item.image}
              title={item.title}
              price={price}
              navigate={navigation.navigate}
              pricesArray={[item.cost_small, item.cost_medium, item.cost_large]}
            />
          )
          })}
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#00B8F1"
  },
  menuSection: {
    marginHorizontal: 20,
    marginVertical: 30,
    backgroundColor: "#ffffff",
    borderRadius: 4
  }
});

export default MenuSectionScreen;
