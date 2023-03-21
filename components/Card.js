import React from 'react'
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native'
import Waste from '../assets/waste.png';

const Card = ({ item, price, onPress, id, isSelected, image }) => {


    const handleOnClick = () => {
        onPress(id)
    }


    return (

        <TouchableOpacity style={{ flex: 1 }} android_ripple={{ color: '#ccc' }}onPress={handleOnClick} >
            <View style={[styles.card, isSelected ? styles.selected : null]}>
                <Image source={Waste} style={styles.image} />
                <Text style={styles.text}>{item}</Text>
                <Text style={styles.price}>Rs. {price} / kg</Text>
            </View>
        </TouchableOpacity>

    )
}

export default Card


const styles = StyleSheet.create({
    card: {
        flex: 2,
        borderColor: '#383838',
        borderWidth: 2,
        marginHorizontal: 10,
        marginBottom: 10,
        paddingHorizontal: 15,
        borderRadius: 6,
        paddingVertical: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        marginBottom: 2,
        fontSize: 14,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    price: {
        fontSize: 12,
        marginBottom: 8,
    },
    image: {
        height: 100,
        width: 120,
    },
    selected: {
        borderColor: 'green',
    }
})