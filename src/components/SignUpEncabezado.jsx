import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import LogoMain from '../images/Logo.png';

export default function SignUpEncabezado() {
return (
<View style={styles.EncabezadoFormulario}>
    <Image source={LogoMain} style={styles.logoFormulario} />
    <Text style={styles.titleg}>Welcome</Text>
    <Text style={styles.titleh}>
    Discover manga, manhua and manhwa, track your progress, have fun, read
    manga.
    </Text>
</View>
);
}

const styles = StyleSheet.create({
    EncabezadoFormulario: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        paddingTop: 30,
        paddingBottom: 30,
    },
    logoFormulario: {
        width: 200,
        height: 200,
    },
    titleg: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 20,
    },
    titleh: {
        fontSize: 16,
        textAlign: 'center',
        marginTop: 10,
        paddingHorizontal: 20,
    },
});