import React, { useState, useEffect } from "react";
import { View, ScrollView, Image, Text, StyleSheet, SafeAreaView, StatusBar, Button} from "react-native";
import { useNavigation , useRoute } from '@react-navigation/native';
import { Provider, useSelector,useDispatch  } from 'react-redux';  
import { store } from '../../store/store'
import Detail from "../components/Detail";

export default function MangaDetailsScreen() {
    const navigation = useNavigation();
    const route = useRoute();
    const { manga } = route.params;
    const id = manga._id
    console.log(id)

    return (
        <Provider store={store}>
            <SafeAreaView style={styles.container}>
                <ScrollView>
                    <Detail _id={id} />
                    {/* <Button
                        title="Back"
                        onPress={() => {
                            navigation.goBack();
                        }}
                        /> */}
                </ScrollView>
            </SafeAreaView>
        </Provider>
    );
}

const styles = StyleSheet.create({
    container: { 
        flex: 1, 
        paddingTop: StatusBar.currentHeight,
        alignItems: 'center', 
        justifyContent: 'center',
    },
    img: {
        width: 150,
        height: 200,
        borderTopRightRadius: 5,
        borderBottomRightRadius: 5,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
      },
})