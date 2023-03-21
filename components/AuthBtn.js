import React from 'react'
import { Text, View, StyleSheet, Pressable } from 'react-native'

const AuthBtn = ({ navigation }) => {

    const handleLogin = () => {
        navigation.navigate('Login')
    }

    const handleRegister = () => {
        navigation.navigate('Register')
    }

    return (
        <View>
            <Pressable style={styles.btn1} onPress={handleLogin}>
                <Text style={styles.btn1Text}>Login</Text>
            </Pressable>
            <Pressable style={styles.btn2} onPress={handleRegister}>
                <Text style={styles.btn2Text}>Register</Text>
            </Pressable>
        </View>

    )
}

export default AuthBtn

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