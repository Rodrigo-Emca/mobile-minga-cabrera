import React, { useState, useEffect } from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

function ReadChapter(props) {
    const navigation = useNavigation()
    const id = props.CHAPTER
    const [pageNumber, setPageNumber] = useState(0);

    function handleNext(){
        if (pageNumber > id.pages.length - 2) {
            navigation.goBack();
        } else {
            setPageNumber(pageNumber + 1)
        }
    }

    function handlePrev() {
        if (pageNumber > 0) {
            setPageNumber(pageNumber - 1);
        } else {
            navigation.goBack();
        }
    }

    return (
        <View>
            <View>
                <Text style={style.title}>{id.title_}</Text>
            </View>
            <Image style={style.img} source={{ uri: id.pages[pageNumber] }} />
            
            <View style={style.btnContainer}>
                <TouchableOpacity style={style.btn} onPress={handlePrev}>
                    <Text>Prev</Text>
                </TouchableOpacity>
                <TouchableOpacity style={style.btn} onPress={handleNext}>
                    <Text>Next</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        padding: 10,
        textAlign: 'center'
    },
    img: {
        width: 'auto',
        height: 730
    },
    btnContainer: {
        width: 485,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    btn:{
        marginTop: 5,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: 180,
        height: 60,
        backgroundColor: 'orange',
        borderRadius: 5000,
    },
})

export default ReadChapter