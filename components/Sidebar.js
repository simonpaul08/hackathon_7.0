import React from 'react'
import { Text, View, StyleSheet, Pressable } from 'react-native';
import { Icon } from '@rneui/themed';
import AuthBtn from './AuthBtn';
import { useData } from '../context/DataContext';
import Logout from './Logout';

const Sidebar = ({ setSidebar, sidebar, navigation }) => {

    const { logout, currentUser } = useData()

    const handleClose = () => {
        setSidebar(false)
    }
    return (
        <View style={[styles.view, !sidebar ? styles.viewHide : null]}>
            <Pressable style={styles.innerContainer}>
                <Icon name='user' type='entypo' style={styles.icon} />
                <Text style={[styles.text, { flex: 1, }]}>Profile</Text>
                <Icon name='close' size={30} style={{ alignSelf: 'flex-end', fontWeight: 'bold' }} onPress={handleClose} />
            </Pressable>
            <View style={styles.navTab}>
                <Icon name='home' size={25} style={{ marginRight: 5 }} />
                <Text style={styles.text}>Home</Text>
            </View>
            <Pressable style={styles.navTab} onPress={() => navigation.navigate('Pickups')}>
                <Icon name='history' size={25} style={{ marginRight: 5 }} />
                <Text style={styles.text}>Pickups</Text>
            </Pressable>
            <View style={styles.navTab}>
                <Icon name='team' type='ant-design' size={25} style={{ marginRight: 5 }} />
                <Text style={styles.text}>Partner</Text>
            </View>
            <View style={styles.navTab}>
                <Icon name='book-open' type='feather' size={25} style={{ marginRight: 5 }} />
                <Text style={styles.text}>Learn</Text>
            </View>
            <View style={styles.navTab}>
                <Icon name='infocirlceo' type='ant-design' size={25} style={{ marginRight: 5 }} />
                <Text style={styles.text}>About Us</Text>
            </View>
            {currentUser ? <Logout /> :<AuthBtn navigation={navigation} />}


        </View>
    )
}

export default Sidebar

const styles = StyleSheet.create({
    view: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: 250,
        height: 1000,
        backgroundColor: '#fff',
        zIndex: 100,
        elevation: 4,
        paddingHorizontal: 10,
    },
    innerContainer: {
        paddingVertical: 30,
        paddingHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 0,
        marginTop: 20,
    },
    icon: {
        backgroundColor: '#eee',
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderRadius: 30,
        marginRight: 12,
    },
    text: {
        fontSize: 18,
    },
    navTab: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        marginBottom: 20,
        backgroundColor: '#f1f1f1',
        paddingVertical: 8,
        borderRadius: 6,
    },
    viewHide: {
        transform: [{ translateX: -250 }],
    },

})