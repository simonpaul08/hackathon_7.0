import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Footer from '../components/Footer';
import ListView from '../components/ListView';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';


const Home = ({ navigation }) => {

    const [sidebar, setSidebar] = useState(false)

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Sidebar setSidebar={setSidebar} sidebar={sidebar} navigation={navigation}/>
            <Navbar setSidebar={setSidebar}/>
            <ListView />
            <Footer navigation={navigation}/>
        </SafeAreaView>
    )
}

export default Home;