import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function SignInFooter({ onPressSignUp }) {
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.text}>You don´t have an account? <Text style={styles.textLogIn} onPress={onPressSignUp}>Sign up</Text></Text>
            </View>
            <TouchableOpacity>
                <Text style={styles.text}>Go back to home page</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 140,
        backgroundColor: '#fff',
    },
    text: {
        fontSize: 20,
    },
    textLogIn: {
        fontSize: 20,
        color: 'orange',
        textAlign: 'center'
    }
})