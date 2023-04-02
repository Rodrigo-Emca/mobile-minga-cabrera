import React from "react";
import { View, StyleSheet } from "react-native";
import SignUpEncabezado from './SignUpEncabezado';
import SignInFormulario from './SignInFormulario';
import SignInFooter from "./SignInFooter";

export default function SignIn(props) {

    return (
        <View style={styles.container}>
            <SignUpEncabezado/>
            <SignInFormulario />
            <SignInFooter onPressSignUp={props.onPressSignUp} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
});
