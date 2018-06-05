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
  render() {
    const { uri, title, price, description, isFirst } = this.props;
    const borderTop = isFirst ? undefined : styles.borderTop;
    const image = {
      uri: "http://web.aromakava.ua:30082/" + uri
    };

    menuSectionItemPressHandler = () => {
      
    }

    return (
      <TouchableWithoutFeedback onPress={this.menuItemPressHandler}>
        <View style={styles.menuItem}>
          <View style={styles.imageContainer}>
            <Image source={image} style={styles.image} />
          </View>
          <View style={[styles.titleContainer, borderTop]}>
            <Text adjustsFontSizeToFit={true} style={styles.title}>{title}</Text>
            <Text style={styles.price}>{price + '₴'}</Text>
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
    resizeMode: Image.resizeMode.contain
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
    flexDirection: 'row',
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
    fontWeight: 'bold',
    flex: 1
  }, 
  price: {
    fontWeight: 'bold',
    color: "#f26f21",
    fontSize: 22,
  }
});
