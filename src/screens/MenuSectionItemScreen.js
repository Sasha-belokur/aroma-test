import React, { Component } from "react";
import { ScrollView, Text, StyleSheet, Alert, Button, View, Image } from "react-native";

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

    return (
      <ScrollView style={styles.container}>
        <View style={styles.sectionItem}>
          <View style={styles.sizes}>
            <Text>13₴</Text>
          </View>
          <View style={styles.imageContainer}>
            <Image sourse={} style={styles.image}/>
          </View>
          <View>
            <Text>
              Какао - легкий шоколадный напиток на основе натурального какао-порошка. Вкусное и ароматное какао быстро согреет, улучшит настроение и заметно повысит работоспособность. Добавленная корица и ваниль лишь подчеркнут вкус. Но что действительно не станет лишним – дополнительная порция маршмеллоу (а лучше две)."
            </Text>
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
    height: 250,
  },
  image: {
    width: 70,
    height: 70
  }
});

export default MenuSectionItemScreen;
