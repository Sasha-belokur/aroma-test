import React, { Component } from 'react';
import { ScrollView, Text, StyleSheet, Alert, Button } from 'react-native';

import MenuItem from './MenuItem';

import menuData from '../assets/menuData';

export default class Menu extends Component {
    render() {
        const {navigate} = this.props;
        return(
            <ScrollView style={styles.container}>
                {menuData.map((item, index) => (
                    <MenuItem 
                        onPress={()=> {
                            navigation.navigate('MenuSection', {

                            })
                        }}
                        key={item.id} 
                        image={item.image} 
                        title={item.title} 
                        index={index} 
                    />
                ))}
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})