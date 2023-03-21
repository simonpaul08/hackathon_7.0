import React, { useState } from 'react'
import { View, StyleSheet, Text, TextInput, Pressable } from 'react-native'
import { Icon } from '@rneui/themed';
import Sidebar from './Sidebar';


const Navbar = ({ setSidebar }) => {


    const [search, setSearch] = useState('')

    const handleClose = () => {
        setSearch('')
    }

    const handleOpen = () => {
        setSidebar(true)
    }

    return (
        <View style={styles.container}>
            <View style={[styles.innerContainer, { marginBottom: 0 }]}>
                <Pressable>
                    <Icon name='bars' type='antdesign' style={styles.bars} color="#808080" onPress={handleOpen}/>
                </Pressable>
                <View style={styles.searchInputContainer}>
                    <Icon name='search' />
                    <TextInput placeholder='Search here...' style={styles.searchInput}
                        value={search}
                        onChangeText={(value) => setSearch(value)}
                    />
                    <Icon name='close' onPress={handleClose} />
                </View>
            </View>
        </View>
    )
}

export default Navbar

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10,
        paddingVertical: 10,
        paddingBottom: 0,
    },
    innerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    searchInputContainer: {
        flex: 1,
        marginHorizontal: 8,
        backgroundColor: '#DDDDDD',
        paddingHorizontal: 15,
        paddingVertical: 8,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 8,
    },
    searchInput: {
        flex: 1,
        marginHorizontal: 8,
    },
    bars: {
        paddingHorizontal: 6,
        paddingVertical: 6,
        borderWidth: 1,
        borderColor: '#808080',
        borderRadius: 6,
    }

})