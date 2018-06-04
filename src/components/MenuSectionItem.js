import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
  Alert
} from "react-native";

export default class MenuItem extends Component {
  render() {
    const { uri, title, price, description } = this.props;
    const image = {
      uri: "http://web.aromakava.ua:30082/" + uri
    };

    return (
      <TouchableWithoutFeedback>
        <View style={styles.menuItem}>
          <View style={styles.imageContainer}>
            <Image source={image} style={styles.image} />
          </View>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>{title}</Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 80
  },
  imageContainer: {
    width: 100,
    height: "100%"
  },
  menuItem: {
    height: 80,
    justifyContent: "flex-start",
    flexDirection: "row"
  },
  titleContainer: {
    justifyContent: "center",
    flexGrow: 1,
    padding: 10,
    borderTopColor: "#ccc",
    borderTopWidth: 1
  },
  title: {
    fontSize: 20,
    color: "#ffffff"
  }
});
