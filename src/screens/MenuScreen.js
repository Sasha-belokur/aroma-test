import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Menu from '../components/Menu';

class MenuScreen extends Component {
    render() {
        return(
            <Menu navigation={this.props.navigation.navigate} />
        )
    }
}

export default MenuScreen;