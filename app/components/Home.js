import React from 'react';
import { View, StyleSheet } from 'react-native';
import BookInfo from './BookInfo';
import { NavigationContainer } from '@react-navigation/native'
import TabNavigator from './TabNavigators';



const Home = () => {
    return <>
        <BookInfo/>
        <NavigationContainer>
            <TabNavigator/>
        </NavigationContainer>
    </>
        
    
}


const styles = StyleSheet.create({
    container: {},
})

export default Home;