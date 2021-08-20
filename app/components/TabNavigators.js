import React from 'react';
import { View, StyleSheet } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import DetailScreen from './DetailScreen';
import ReviewScreen from './ReviewScreen';
import RelatedScreen from './RelatedScreen';

const Tab = createMaterialTopTabNavigator()

const TabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarLabelStyle: { fontSize: 12 },
                tabBarItemStyle: { width: 100 },
                tabBarStyle: { backgroundColor: 'powderblue' },
            }}
            tabBarPosition='top'            
        >
            <Tab.Screen name='Detail' component={DetailScreen}/>
            <Tab.Screen name='Review' component={ReviewScreen}/>
            <Tab.Screen name='Related' component={RelatedScreen}/>
        </Tab.Navigator>
    )
}


const styles = StyleSheet.create({
    container: {},
})

export default TabNavigator;