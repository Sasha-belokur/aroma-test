import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
  Alert
} from "react-native";

export default class MenuSectionItem extends Component {
  menuSectionItemPressHandler = () => {
    const { navigate, description, title, price, uri } = this.props;

    navigate("MenuSectionItem", { description, title, price, uri });
  };

  render() {
    const { uri, title, price, isFirst } = this.props;
    const borderTop = isFirst ? undefined : styles.borderTop;
    const image = {
      uri: "http://web.aromakava.ua:30082" + uri
    };
    
    return (
      <TouchableWithoutFeedback onPress={this.menuSectionItemPressHandler}>
        <View style={styles.menuItem}>
          <View style={styles.imageContainer}>
            <Image source={image} style={styles.image} />
          </View>
          <View style={[styles.titleContainer, borderTop]}>
            <Text adjustsFontSizeToFit={true} style={styles.title}>
              {title}
            </Text>
            <Text style={styles.price}>{price + "₴"}</Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    width: 80,
    height: 80,
  },
  imageContainer: {
    justifyContent: "center",
    width: 80,
    height: 80,
    marginHorizontal: 10
  },
  menuItem: {
    height: 90,

    justifyContent: "flex-start",
    flexDirection: "row"
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    flex: 1
  },
  borderTop: {
    borderTopColor: "#ccc",
    borderTopWidth: 1
  },
  title: {
    fontSize: 15,
    color: "#000000",
    fontWeight: "bold",
    flex: 1
  },
  price: {
    fontWeight: "bold",
    color: "#f26f21",
    fontSize: 22
  }
});
