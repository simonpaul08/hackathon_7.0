import { Icon } from '@rneui/themed';
import React from 'react'
import { Image, Pressable, Text, View } from 'react-native'
import { StyleSheet } from 'react-native'
import Waste from '../assets/waste.png';

const CardItem = ({ item, price, id, handleRemove }) => {

    const handlePress = () => {
        handleRemove(id);
    }

  return (
    <Pressable style={styles.container}>
        <View >
            <Image source={Waste} style={styles.image}/>
        </View>

        <View style={styles.middle}>
            <Text style={styles.text}>{item}</Text>
            <Text style={styles.price}>Rs. {price} / kg</Text>
        </View>

        <View style={styles.closeContainer}>
            <Icon name='close' color="red" size={30} onPress={handlePress}/>
        </View>

    </Pressable>
  )
}

export default CardItem

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flex: 1,
        paddingHorizontal: 10,
        paddingVertical: 6,
        borderWidth: 1,
        borderColor: '#808080',
        backgroundColor: '#f8f8f8',
        marginBottom: 10,
        borderRadius: 8,
    },
    middle: {
        flex: 1,
        paddingHorizontal: 20,
        justifyContent: 'center',
    },
    image: {
        width: 100,
        height: 100,
    },
    closeContainer: {
        paddingHorizontal: 10,
        paddingVertical: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        marginBottom: 2,
        fontSize: 14,
        fontWeight: 'bold'
    },
    price: {
        fontSize: 12,
        marginBottom: 8,
    },
})