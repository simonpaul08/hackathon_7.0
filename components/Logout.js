import React from 'react'
import { Pressable } from 'react-native'
import { Text, StyleSheet } from 'react-native'
import { useData } from '../context/DataContext'

const Logout = ({ navigation }) => {

    const { logout } = useData()

    const handleLogout = async () => {
        await logout()
        navigation.navigate('Home')
    }
    

    return (
        <Pressable style={styles.btn1} onPress={handleLogout}>
            <Text style={styles.btn1Text}>Logout</Text>
        </Pressable>
    )
}

export default Logout

const styles = StyleSheet.create({
    btn1: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        textAlign: 'center',
        backgroundColor: '#333',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
    },
    btn1Text: {
        fontSize: 16,
        color: '#fff',
    },
    btn2: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        textAlign: 'center',
        backgroundColor: '#fff',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#333',
        borderWidth: 1,
    },
    btn2Text: {
        fontSize: 16,
        color: '#333',
    }
})