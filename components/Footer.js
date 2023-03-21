import React from 'react'
import { Text, View, StyleSheet, Button, Alert, Pressable } from 'react-native'
import { useData } from '../context/DataContext'

const Footer = ({ navigation }) => {

    const { selectedItem } = useData()

    const handleContinue = () => {
        if(selectedItem){
            navigation.navigate('Checkout')
        }
    }

  return (
    <View style={styles.view}>
        <Pressable style={[styles.btn, !selectedItem ? styles.btnDisabled : null]} onPress={handleContinue}>
            <Text style={styles.btnText}>Continue</Text>
        </Pressable>
    </View>
  )
}

export default Footer

const styles = StyleSheet.create({
    view: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems:'center',
        paddingHorizontal: 18,
        paddingVertical: 9,
        alignItems: 'center',
        backgroundColor: '#fff',
        elevation: 2,
    },
    btn: {
        flex: 1,
        paddingHorizontal: 30,
        paddingVertical: 15,
        backgroundColor: '#539165',
        borderRadius: 30,
        color: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnText: {
        color: '#fff',
        fontSize: 18,
    },
    btnDisabled: {
        backgroundColor: '#ddd'
    }

})