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
  menuItemTouchHandler = () => {
    const { id, navigate, title } = this.props;

    navigate("MenuSection", { id, title });
  };

  render() {
    const { uri, title, index, onPress, backgroundColor } = this.props;
    const isEven = index % 2 === 0;
    const flexDirection = isEven ? "row" : "row-reverse";
    const image = {
      uri: "http://web.aromakava.ua:30082/" + uri
    };
    return (
      <TouchableWithoutFeedback onPress={this.menuItemTouchHandler}>
        <View style={[styles.menuItem, { flexDirection, backgroundColor }]}>
          <View>
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
    width: 120,
    height: "100%"
  },
  menuItem: {
    height: 150,
    justifyContent: "flex-start"
  },
  titleContainer: {
    justifyContent: "center",
    padding: 10,
    width: 220
  },
  title: {
    fontSize: 20,
    color: "#ffffff"
  }
});
