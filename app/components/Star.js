import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';



const Star = ({starCount, halfStar}) => {
    if(!starCount || typeof starCount != 'number') return null

    const stars = [];

    for(let i = 0; i < starCount; i++) {
        stars.push(i);
    }

    console.log(stars);
    return (
        <View style={styles.container}>
            {stars.map(item => (
                <FontAwesome
                    key={item.toString()} 
                    style={styles.icon} 
                    name="star" size={15} 
                    color="black" 
                />
            ))}
            {halfStar && (
                <FontAwesome 
                    style={styles.icon} 
                    name="star-half" 
                    size={15} 
                    color="black" 
                />
            )}
            {/* <FontAwesome style={styles.icon} name="star" size={15} color="black" />
            <FontAwesome style={styles.icon} name="star" size={15} color="black" />
            <FontAwesome style={styles.icon} name="star" size={15} color="black" />
            <FontAwesome style={styles.icon} name="star-half" size={15} color="black" /> */}
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    icon: {
        marginRight: 5,
    }
    
});

export default Star;