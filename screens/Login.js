import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useData } from '../context/DataContext';


const Login = ({ navigation }) => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const { handleLogin } = useData()

    const handleOnPress = async () => {
        await handleLogin(username, password);
        navigation.navigate('Home')
    }

    return (
        <SafeAreaView style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', paddingHorizontal: 30, }}>
            <View style={styles.view}>
                <View style={styles.formGroup}>
                    <TextInput style={styles.formInput} placeholder="Username" value={username} onChangeText={(value) => setUsername(value)}/>
                </View>
                <View style={[styles.formGroup, { marginBottom: 30 }]}>
                    <TextInput style={styles.formInput} secureTextEntry={true} placeholder="Password" value={password} onChangeText={(value) => setPassword(value)}/>
                </View>
                <Pressable style={[styles.btn]} onPress={handleOnPress}>
                    <Text style={styles.btnText}>Continue</Text>
                </Pressable>
            </View>
        </SafeAreaView>
    )
}

export default Login;


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
})