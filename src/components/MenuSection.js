import React, { Component } from "react";
import { ScrollView, Text, StyleSheet, Alert, Button } from "react-native";

import MenuSectionItem from "./MenuSectionItem";

import menuSectionData from "../assets/menuSectionData";

export default class Menu extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        {menuSectionData.map(item => (
        <MenuSectionItem
          image={}
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
