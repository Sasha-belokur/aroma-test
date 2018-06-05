import React, { Component } from "react";
import {
  ScrollView,
  Text,
  StyleSheet,
  Alert,
  Button,
  View,
  Image
} from "react-native";

import MenuSectionItem from "../components/MenuSectionItem";

import menuSectionData from "../assets/menuSectionData";

class MenuSectionItemScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam("title", "Товар")
    };
  };

  render() {
    const { navigation } = this.props;
    const description = navigation.getParam(
      "description",
      "У данной позиции нет описания"
    );
    const price = navigation.getParam("price", "13");
    const uri = navigation.getParam("uri", "13");
    const image = {
      uri: "http://web.aromakava.ua:30082/" + uri
    };

    return (
      <ScrollView style={styles.container}>
        <View style={styles.sectionItem}>
          <View style={styles.sizes}>
            <Text>{price + "₴"}</Text>
          </View>
          <View style={styles.imageContainer}>
            <Image sourse={image} style={styles.image} />
          </View>
          <View>
            <Text>{description}</Text>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#00B8F1",
    marginTop: 15
  },
  imageContainer: {
    width: 250,
    height: 250
  },
  image: {
    width: 70,
    height: 70
  }
});

export default MenuSectionItemScreen;
