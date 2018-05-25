import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableWithoutFeedback, Alert } from 'react-native';

export default class MenuItem extends Component {
    render() {
        const {image, title, index, onPress} = this.props;
        const colors = ['#F26F21', '#00B8F0', '#533019'];
        const backgroundColor = colors[index % colors.length];
        const isEven = index % 2 === 0;
        const flexDirection = isEven ? 'row' : 'row-reverse';

        return(
            <TouchableWithoutFeedback onPress={onPress}>
                <View style={[styles.menuItem, {backgroundColor, flexDirection}]}>
                    <View>
                        <Image source={image} style={styles.image}/>
                    </View>
                    <View style={styles.titleContainer}>
                        <Text style={styles.title}>{title}</Text>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        )
    }
}

const styles = StyleSheet.create({
    image: {
        width: 100,
        height: '100%'
    },
    menuItem: {
        height: 150,
        justifyContent: 'flex-start'
    },
    titleContainer: {
        justifyContent: 'center',
        padding: 10
    },
    title: {
        fontSize: 20,
        color: '#ffffff'
    }
})