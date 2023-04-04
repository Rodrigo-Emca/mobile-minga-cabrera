import React from "react";
import { View,Image, Text,ImageBackground, StyleSheet, SafeAreaView, StatusBar } from "react-native";
import LogOutButton from "../components/LogOutButton";

import LogOutBackground from '../images/LogOutBackground.png'
import logo from '../images/Logo.png'

export default function LogOutScreen() {

    return (
        <SafeAreaView style={styles.container}>
                <ImageBackground source={LogOutBackground} resizeMode="cover" style={styles.image}>
                    <View style={styles.containerLogo}>
                        <Image source={logo} style={styles.logo}/>
                    </View>
                    <View style={styles.containerTexto}>
                        <Text style={styles.title}>Need a break?</Text>
                        <Text style={styles.text}>Come back whenever you want!</Text>
                        <Text style={styles.text}>We´ll be waiting for you!</Text>
                    <LogOutButton/>

                    </View>
                </ImageBackground>
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    container: { 
        flex: 1, 
        paddingTop: StatusBar.currentHeight,
    },
    containerLogo: {
        height: 200,
        justifyContent: 'center',
        alignItems: 'flex-end',
        paddingEnd: 15,
        top: -150
    },
    logo: {
        width: 125,
        height: 125,
    },
    containerTexto: {
        flex: 0.6,
        height: 680,
        justifyContent: 'center',
        alignItems: 'center',
        top: -60
    },
    title: {
        textAlign: 'center',
        color: 'white',
        fontSize: 55,
        fontWeight: '900'
    },
    text: {
        textAlign: 'center',
        color: 'white',
        fontSize: 40,
        fontWeight: '200'
    },
    image: {
        flex: 1,
        justifyContent: 'center',
        width: '100%',
        },
})