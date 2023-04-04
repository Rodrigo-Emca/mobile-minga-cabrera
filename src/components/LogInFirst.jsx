import React from 'react';
import { View, Text, Image, StyleSheet, ImageBackground,  SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import SignInFormulario from './SignInFormulario';
import LogoMain from '../images/Logo.png';
import SignInFirst from '../images/SignInFirst.png'

export default function LogInFirst() {
    const navigation = useNavigation();

return (
    <SafeAreaView style={styles.container}>
        <ImageBackground source={SignInFirst} resizeMode="cover" style={styles.backgroundImage}>
            <View style={styles.containerLogo}>
                <Image source={LogoMain} style={styles.LogoMain}/>
            </View>
            <Text style={styles.titleg}>Welcome to Minga</Text>
            <Text style={styles.titleh}>
            Discover manga, manhua and manhwa, track your progress, have fun, read
            manga.
            </Text>
        </ImageBackground>
        <View style={styles.linksContainer}>
            <View style={styles.textContainer}>
                <Text style={styles.textIntro}>Do you want to enjoy manga?</Text>
                <Text style={styles.textIntro}>Please register and log in to enjoy the best manga!</Text>
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.textIntro}>Already have an account? </Text>
                <SignInFormulario/>
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.textIntro}>You don´t have an account? </Text>
                <Text style={styles.textLogIn} onPress={() => navigation.navigate('Home')}>Sign up</Text>
            </View>
        </View>
    </SafeAreaView>
);
}

const styles = StyleSheet.create({
    container: { 
        flex: 1, 

        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 30,
    },
    backgroundImage: {
        flex: 1,
        justifyContent: 'center',
        width: '100%',
        height: '100%'
    },
    containerLogo: {
        height: 200,
        justifyContent: 'center',
        alignItems: 'center',
    },
    LogoMain: {
        width: 180,
        height: 180,
    },
    titleg: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 20,
        color: 'white'
    },
    titleh: {
        fontSize: 20,
        textAlign: 'center',
        marginTop: 10,
        paddingHorizontal: 20,
        color: 'white'
    },
    linksContainer: {
        height: 600,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff'
    },
    textIntro: {
        fontSize: 24,
        textAlign: 'center',
        
    },
    textLogIn: {
        fontSize: 28,
        color: 'orange',
        textAlign: 'center',
    },
});