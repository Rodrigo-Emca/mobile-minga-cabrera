import React, { useState, useCallback } from "react";
import { StyleSheet, ScrollView, SafeAreaView, StatusBar } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Hero from "../components/Hero";
import SignIn from "../components/SignIn";
import SignUp from '../components/SignUp'; 

function HomeScreen() {
    const [showSignUp, setShowSignUp] = useState(true);
    const [tokenExists, setTokenExists] = useState(false);

    useFocusEffect(
        useCallback(() => {
            AsyncStorage.getItem('token')
            .then(token => {
                if (token) {
                    console.log(token)
                    setTokenExists(true);
                    setShowSignUp(false); // Oculta el componente de registro o inicio de sesión
                } else {
                    setShowSignUp(true); // Muestra el componente de registro o inicio de sesión
                }
            })
            .catch(err => console.log(err))
        }, [])
    )

    const onPressSignUp = () => {
        setShowSignUp(true);
    }

    const onPressSignIn = () => {
        setShowSignUp(false);
    }

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView  style={styles.scrollView}>
                {tokenExists ? <Hero /> : <Hero/>}
                {showSignUp && !tokenExists && <SignUp onPressSignIn={onPressSignIn} />}
                {!showSignUp && !tokenExists && <SignIn onPressSignUp={onPressSignUp} />}
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