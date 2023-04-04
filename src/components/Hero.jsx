import React, {useState, useEffect, useCallback } from "react";
import { Image, Text, View, StyleSheet, ImageBackground , TouchableOpacity} from "react-native";
import { useNavigation } from '@react-navigation/native';
import { useFocusEffect } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import homeImage from '../images/home.png'
import logo from '../images/Logo.png'
import LogOutButton from "./LogOutButton";

function Hero() {
    const navigation = useNavigation();
    const [token, setToken] = useState(null);

    useFocusEffect(
        useCallback(() => {
            AsyncStorage.getItem('token')
            .then(token => {
                if (token) {
                    setToken(true);
                }
            })
            .catch(err => console.log(err))
        }, []
        )
    )

    return (
        <View  style={styles.container}>
            <ImageBackground source={homeImage} resizeMode="cover" style={styles.image}>
                <View style={styles.containerLogo}>
                    <Image source={logo} style={styles.logo}/>
                </View>
                <View style={styles.containerTexto}>
                    <Text style={styles.title}>Live the emotion of the manga</Text>
                    <Text style={styles.text}>Find the perfect manga for you</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('MangasScreen')} style={styles.btnCont}>
                        <Text style={styles.btnTexto}>Explore</Text>
                    </TouchableOpacity>
                    {token && <LogOutButton />}
                </View>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    containerLogo: {
        height: 200,
        justifyContent: 'center',
        alignItems: 'flex-end',
        paddingEnd: 15
    },
    logo: {
        width: 125,
        height: 125,
    },
    containerTexto: {
        flex: 0.6,
        height: 705,
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
        height: '100%'
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

export default Hero