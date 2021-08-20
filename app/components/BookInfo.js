// image title author and review star
import React from 'react';
import { View, StyleSheet, Image, Text, StatusBar } from 'react-native';

const BookInfo = () => {
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image 
                    source={require('../../assets/book.png')} 
                    style={styles.coverImage}
                    resizeMode='contain'
                />
            </View>
            <View style={styles.infoContainer}>
                <Text style={styles.title}>Title of the book that you can read.</Text>
                <Text style={styles.author}>By: Cloud Strife</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff800',
        paddingTop: StatusBar.currentHeight,
        height: 300,
        flexDirection: 'row',
        alignItems: 'center',
    },
    coverImage: {
        height: '80%',
        width: 180,
    },
    title: {
        fontSize: 21,
        fontWeight: 'bold',
    },
    author: {
        fontWeight: '600',
        marginVertical: 5,
    },
    infoContainer: {
        flex: 1,
    }
})

export default BookInfo;