import React, { useState, useCallback } from "react";
import { ScrollView, StyleSheet, SafeAreaView, StatusBar, Text } from "react-native";
import { Provider } from 'react-redux';  
import { store } from '../../store/store'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from "@react-navigation/native";
import MangasAll from "../components/MangasAll";
import LogInFirst from "../components/LogInFirst";

export default function MangasScreen() {
    const [tokenExists, setTokenExists] = useState(false);

    useFocusEffect(
        useCallback(() => {
            AsyncStorage.getItem('token')
            .then(token => {
                if (token) {
                    console.log(token)
                    setTokenExists(true);
                }
            })
            .catch(err => console.log(err))
        }, []
        )
    )

    return (
        <Provider store={store}>
        <SafeAreaView style={styles.container}>
            <ScrollView>
            {tokenExists ? <MangasAll/> : <LogInFirst/>}
            </ScrollView>
        </SafeAreaView>
        </Provider>
    );
}

const styles = StyleSheet.create({
    container: { 
        flex: 1, 
        paddingTop: StatusBar.currentHeight,
        alignItems: 'center', 
        justifyContent: 'center',
    }
})
