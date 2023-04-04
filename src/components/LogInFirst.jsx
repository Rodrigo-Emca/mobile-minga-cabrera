import React from 'react';
import { View, Text, Image, StyleSheet, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import LogoMain from '../images/Logo.png';
import SignInFirst from '../images/SignInFirst.png'
import Footer from '../images/footer.png'

export default function LogInFirst() {
    const navigation = useNavigation();

return (
<View style={styles.EncabezadoFormulario}>
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
            <Text style={styles.text}>Already have an account? </Text>
            <Text style={styles.textLogIn} onPress={() => navigation.navigate('Home')}>Log in</Text>
        </View>
        <View style={styles.textContainer}>
            <Text style={styles.text}>You don´t have an account? </Text>
            <Text style={styles.textLogIn} onPress={() => navigation.navigate('Home')}>Sign up</Text>
        </View>
    </View>
    {/* <Image source={Footer} style={styles.footerImagen}/> */}
</View>
);
}

const styles = StyleSheet.create({
    EncabezadoFormulario: {
        flex: 1,
        height: 900,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        paddingTop: 30,
        paddingBottom: 30,
    },
    backgroundImage: {
        flex: 1,
        justifyContent: 'center',
        width: '100%',
        height: '100%'
    },
    containerLogo: {
        height: 225,
        justifyContent: 'center',
        alignItems: 'center',
    },
    LogoMain: {
        width: 200,
        height: 200,
    },
    logoFormulario: {
        width: 200,
        height: 200,
    },
    SignImage: {
        width: '100%',
        height: 300,
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
        height: 400,
        width: '90%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    textContainer: {
        padding: 25
    },
    textIntro: {
        fontSize: 24,
        textAlign: 'center'
    },
    text: {
        fontSize: 24,
    },
    textLogIn: {
        fontSize: 28,
        color: 'orange',
        textAlign: 'center',
    },
    footerImagen: {
        width: '100%',
        height: 115,
    }
});