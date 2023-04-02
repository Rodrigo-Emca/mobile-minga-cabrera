import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function SignUpFooter({ onPressSignIn }) {
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.text}>Already have an account? <Text style={styles.textLogIn} onPress={onPressSignIn}>Log in</Text></Text>
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
        height: 100,
        backgroundColor: '#fff',
    },
    text: {
        fontSize: 20,
        textAlign: 'center'
    },
    textLogIn: {
        fontSize: 20,
        color: 'orange',
        textAlign: 'center'
    }
})