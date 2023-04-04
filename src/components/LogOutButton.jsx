import React, { useState, useEffect, useCallback } from "react";
import { Text, View, TouchableOpacity, StyleSheet, Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from 'axios';
import { useFocusEffect } from "@react-navigation/native";
import { useNavigation } from '@react-navigation/native';

export default function LogOutButton() {
    const navigation = useNavigation();
    const [token, setTokenExists] = useState("");

    useFocusEffect(
        useCallback(() => {
            AsyncStorage.getItem('token')
            .then(token => {
                if (token) {
                setTokenExists(true);
                }
            })
            .catch(err => console.log(err))
        }, []
        )
    )

    // const handleLogout = async () => {
    //     const token = await AsyncStorage.getItem('token');
    //     const headers = {headers:{'Authorization':`Bearer ${token}`}};
    //     const url = 'https://minga-back-446z.onrender.com/auth/signout';

    //     try {
    //         await axios.post(url, "", headers);
    //         await AsyncStorage.removeItem('token');
    //         setTokenExists("");
    //         Alert.alert('User Offline!', 'Welcome back soon!', [
    //             {text: 'OK', onPress: () => console.log('OK Pressed')},
    //         ]);
    //     } catch (error) {
    //     const err = error.response.data.message;
    //     console.log('Ocurrió un error');
    //     console.log(err)
    //     Alert.alert('We´re sorry!', 'Something went wrong!', [
    //         {text: 'OK', onPress: () => console.log('OK Pressed')},
    //     ]);
    //     }
    //     }

    const handleLogout = async () => {
        await AsyncStorage.removeItem("token");
        setTokenExists("");
        Alert.alert('User Offline!', 'Welcome back soon!', [
            {text: 'OK', onPress: () => navigation.navigate('Home')},
        ]);
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate('MangasScreen')} style={styles.btnCont}>
                <Text style={styles.btnTexto}>Explore</Text>
            </TouchableOpacity>
            {token && (
                <TouchableOpacity onPress={handleLogout} style={styles.btnCont}>
                    <Text style={styles.btnTexto}>Log Out</Text>
                </TouchableOpacity>
            )}
        </View>
    );
}



const styles = StyleSheet.create({
    container: {
        justifyContent: 'flex-end',
        height: 300,
    }, 
    btnCont:{
        marginTop: 30,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: 363,
        height: 69,
        backgroundColor: '#F9A8D4',
        borderRadius: 5000,
    },
    btnTexto: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 500,
    }
})