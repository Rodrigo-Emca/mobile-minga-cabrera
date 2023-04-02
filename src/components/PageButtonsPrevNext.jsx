import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function PageButtonsPrevNext(props) {
    const { pageNumber, increasePageNumber, decreasePageNumber, mangas } = props;

    return (
        <View style={styles.btnContainer}>
        {pageNumber === 1 ? null : (
            <TouchableOpacity style={styles.btnPrev} onPress={decreasePageNumber}>
            <Text>Prev</Text>
            </TouchableOpacity>
        )}
        {(mangas.length === 6 || mangas.length === 10) && (
            <TouchableOpacity style={styles.btnNext} onPress={increasePageNumber}>
            <Text>Next</Text>
            </TouchableOpacity>
        )}
        </View>
    );
}

const styles = StyleSheet.create({
    btnContainer: {
        width: 450,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    btnPrev: {
        marginTop: 5,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: 150,
        height: 60,
        backgroundColor: 'orange',
        borderRadius: 5000,
    },
    btnNext: {
        marginTop: 5,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: 150,
        height: 60,
        backgroundColor: 'orange',
        borderRadius: 5000,
    },
});
