import React from 'react'
import { Pressable, ScrollView, StyleSheet } from 'react-native'
import { useData } from '../context/DataContext';
import CardItem from '../components/CardItem';
import { View } from 'react-native';
import { Text } from 'react-native';

const Checkout = ({ navigation }) => {

    const { data, selectedItem, handleRemove } = useData()

    const handleContinue = () => {
        if(selectedItem){
            navigation.navigate('Address')
        }
    }


    return (
        <View style={{ flex: 1, }}>
            <ScrollView style={styles.scollView}>
                {data.map(item => {
                    if (item.isSelected) {
                        return <CardItem item={item.name} price={item.price} key={item.id}
                            id={item.id} handleRemove={handleRemove}/>
                    }
                })}
            </ScrollView>
            <View style={styles.view}>
                <Pressable style={[styles.btn, !selectedItem ? styles.btnDisabled : null]} onPress={handleContinue}>
                    <Text style={styles.btnText}>Continue</Text>
                </Pressable>
            </View>
        </View>

    )
}

export default Checkout

const styles = StyleSheet.create({
    scollView: {
        flex: 1,
        paddingHorizontal: 20,
        paddingVertical: 20,
    },
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