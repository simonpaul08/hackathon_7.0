import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Footer from '../components/Footer';
import ListView from '../components/ListView';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';



const Drawer = ({ navigation }) => {

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Sidebar />
            <Navbar />
            <ListView />
            <Footer navigation={navigation}/>
        </SafeAreaView>
    )
}

export default Drawer;