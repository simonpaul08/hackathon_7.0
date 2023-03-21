import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable, Alert } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';


const Register = ({ navigation }) => {

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [fetchSuccess, setFetchSuccess] = useState(false)



    const handleRegister = async () => {

        try {
            const response = await fetch('http://10.10.4.114:5173/api/auth/register', {
                method: "POST",
                headers: {
                    Accept: 'application/json',
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    username,
                    email,
                    password
                })
            })
            const data = await response.json()
            if (response) {
                setFetchSuccess(data.message)
                setUsername('')
                setEmail('')
                setPassword('')
                setTimeout(() => {
                    navigation.navigate('Login')
                }, 1000)
            }
        } catch (e) {
            console.error(e)
        }
    }


    return (
        <SafeAreaView style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', paddingHorizontal: 30, }}>

            <View style={styles.view}>
                {fetchSuccess && <View style={styles.success}>
                    <Text style={styles.successText}>Successfully Registered</Text>
                </View>}
                <View style={styles.formGroup}>
                    <TextInput style={styles.formInput} placeholder="Username" value={username} onChangeText={(value) => setUsername(value)} />
                </View>
                <View style={styles.formGroup}>
                    <TextInput style={styles.formInput} placeholder="Email" value={email} onChangeText={(value) => setEmail(value)} />
                </View>
                <View style={[styles.formGroup, { marginBottom: 30 }]}>
                    <TextInput style={styles.formInput} secureTextEntry={true} placeholder="Password" value={password} onChangeText={(value) => setPassword(value)} />
                </View>
                <Pressable style={[styles.btn]} onPress={handleRegister}>
                    <Text style={styles.btnText}>Continue</Text>
                </Pressable>
            </View>
        </SafeAreaView>
    )
}

export default Register;

const styles = StyleSheet.create({
    view: {
        flex: 1,
    },
    formGroup: {
        marginBottom: 15,
    },
    formLabel: {
        fontSize: 16,
        marginBottom: 8
    },
    formInput: {
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        fontSize: 16,
    },
    btn: {
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
    success: {
        textAlign: 'center',
        marginBottom: 20,
        alignItems: 'center'
    },
    successText: {
        fontSize: 22,
    }
})