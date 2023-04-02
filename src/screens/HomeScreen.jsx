import React, { useState } from "react";
import { StyleSheet, ScrollView, SafeAreaView, StatusBar } from "react-native";
import Hero from "../components/Hero";
import SignIn from "../components/SignIn";
import SignUp from '../components/SignUp'; 

function HomeScreen() {
    const [showSignUp, setShowSignUp] = useState(false);

    const onPressSignUp  = () => {
        setShowSignUp(true);
    }

    const onPressSignIn = () => {
        setShowSignUp(false);
    }

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView  style={styles.scrollView}>
                <Hero/>
                {showSignUp ? <SignUp onPressSignIn={onPressSignIn} /> : <SignIn onPressSignUp={onPressSignUp} />}
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: { 
        flex: 1, 
        paddingTop: StatusBar.currentHeight,
    },
    scrollView: {
    },
    text: {
        textAlign: 'center',
        height: 900,
        color: 'white'
    },
    image: {
        flex: 1,
        justifyContent: 'center',
        width: '100%'
        },
})

export default HomeScreen