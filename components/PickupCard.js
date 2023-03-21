import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

const PickupCard = ({ pincode, address }) => {
  return (
    <View style={styles.view}>
        <Text>
            {address}, {pincode}
        </Text>
        <Text style={{ color: '#539165' }}>
            Scheduled
        </Text>
    </View>
  )
}

export default PickupCard


const styles = StyleSheet.create({
    view: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 8,
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 8,
        backgroundColor: '#f6f6f6',
        borderWidth: 1,
        borderColor: '#539165',
    },
    text: {
        fontSize: 16,
    }
})