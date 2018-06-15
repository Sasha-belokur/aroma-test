import React, { Component } from "react";
import {
  ScrollView,
  Text,
  StyleSheet,
  View,
  Image
} from "react-native";

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
      uri: "http://web.aromakava.ua:30082" + uri
    };

    return (
      <ScrollView style={styles.container}>
        <View style={styles.sectionItem}>
          <View style={styles.sizes}>
            <Text style={styles.price}>{price + "₴"}</Text>
          </View>
          <View style={styles.imageContainer}>
            <Image source={image} style={styles.image} />
          </View>
          <View style={styles.descriptionContainer}>
            <Text style={styles.description}>{description}</Text>
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
  },
  sectionItem: {
    alignItems: "center",
  },
  imageContainer: {
    height: 350,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
    backgroundColor: "#FFFFFF",
  },
  image: {
    width: 250,
    height: 250,
  },
  sizes: {
    position: "absolute",
    top: 15,
    justifyContent: "center",
    alignItems: "center",
    width: 120,
    height: 80,
    backgroundColor: "#F86D28",
    zIndex: 10,
    borderColor: "#FFFFFF",
    borderWidth: 4,
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.1,
    shadowRadius: 12
  },
  price: {
    color: "#FFFFFF",
    fontSize: 20,
  },
  descriptionContainer: {
    marginTop: 15,
    paddingHorizontal: 30,
    marginBottom: 25,
  },
  description: {
    color: "#FFFFFF",
    fontSize: 14,
    textAlign: "center",
  }
});

export default MenuSectionItemScreen;
