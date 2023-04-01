import { Image, Text, View, StyleSheet, ImageBackground, ScrollView, SafeAreaView, StatusBar, Button, Alert, Pressable } from "react-native";
import homeImage from '../images/home.png'
import logo from '../images/Logo.png'

function Hero() {
    return (
        <View  style={styles.container}>
            <ImageBackground source={homeImage} resizeMode="cover" style={styles.image}>
                <View style={styles.containerLogo}>
                    <Image source={logo} style={styles.logo}/>
                </View>
                <View style={styles.containerTexto}>
                    <Text style={styles.title}>Live the emotion of the manga</Text>
                    <Text style={styles.text}>Find the perfect manga for you</Text>
                    {/* <View style={styles.contenedorButton}>
                        <Button style={styles.button}
                            title="Explore"
                            color= "#F9A8D4"
                            onPress={() => Alert.alert('Button with adjusted color pressed')}
                        />
                    </View> */}
                    <View style={styles.btnCont}>
                        <Text style={styles.btnTexto}>
                            Explore
                        </Text>
                    </View>
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
    contenedorButton: {
        width: 250,
        alignSelf: 'center',
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