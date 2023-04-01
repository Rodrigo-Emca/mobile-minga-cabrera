import React from "react";
import { View, StyleSheet } from "react-native";
import SignUpEncabezado from './SignUpEncabezado';
import SignUpFormulario from './SignUpFormulario';
import SignUpFooter from './SignUpFooter';

export default function SignIn(props) {

    return (
        <View style={styles.container}>
            <SignUpEncabezado/>
            <SignUpFormulario />
            <SignUpFooter onPressSignIn={props.onPressSignIn} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
});