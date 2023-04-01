import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function SignInFooter({ onPressSignUp }) {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={onPressSignUp}>
                <Text style={styles.text}>You don´t have an account? Sign up</Text>
            </TouchableOpacity>
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
    }
})