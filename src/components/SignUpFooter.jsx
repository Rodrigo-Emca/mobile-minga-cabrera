import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function SignUpFooter() {
    return (
        <View style={styles.container}>
            <TouchableOpacity>
                <Text style={styles.text}>Already have an account? Log in</Text>
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
        height: 100,
        backgroundColor: '#fff',
    },
    text: {
        fontSize: 20,
    }
})