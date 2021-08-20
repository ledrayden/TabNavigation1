import React from 'react';
import { View, StyleSheet } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import DetailScreen from './DetailScreen';

const Tab = createMaterialTopTabNavigator()

const TabNavigator = () => {
    return <Tab.Navigator>
        <Tab.Screen name='Detail' component={DetailScreen}/>
    </Tab.Navigator>
}


const styles = StyleSheet.create({
    container: {},
})

export default TabNavigator;