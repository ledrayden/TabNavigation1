import React from 'react';
import { View, StyleSheet, Text } from 'react-native';



const ReviewScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Book Review</Text>
            <Text style={styles.desc}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi consectetur luctus diam, ut semper 
            tortor pharetra quis. In molestie consequat maximus. Mauris congue elit tellus, vel auctor nunc 
            venenatis ac. Fusce volutpat convallis tortor ac hendrerit. Aliquam ornare arcu non posuere 
            lacinia. Donec ut aliquet leo. 
            </Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        paddingTop: 10,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    desc: {
        fontSize: 16,
        lineHeight: 20,
        letterSpacing: 0.5,
    }
});

export default ReviewScreen;