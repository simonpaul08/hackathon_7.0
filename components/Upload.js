import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Icon } from '@rneui/themed';

const Upload = () => {
    return (
        <View style={styles.container}>
            <Text style={{ marginBottom: 10, fontSize: 20 }}>Upload Photo</Text>
            <View style={styles.innerContainer}>
                <Icon name='camerao' size={32} type='antdesign' style={[styles.icon, { marginRight: 10}]} color="#539165" />
                <Icon name='picture' size={32} type='antdesign' color="#539165" style={styles.icon} />
            </View>
        </View>
    )
}

export default Upload

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 8,
        borderRadius: 8,
        paddingHorizontal: 20,
        paddingVertical: 15,
        backgroundColor: '#DDDDDD',
        marginBottom: 15,
    },
    innerContainer: {
        flexDirection: 'row',
    },
    icon: {
        alignSelf: 'flex-start',
        fontSize: 20,
    }
})