import React, { useState } from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFocusEffect } from "@react-navigation/native";
import { useSelector } from 'react-redux';
import HomeScreen from "../screens/HomeScreen";
import MangasScreen from "../screens/MangasScreen";
import MangaDetailsScreen from "../screens/MangaDetailsScreen";
import ChapterScreen from "../screens/ChapterScreen";
import LogOutScreen from "../screens/LogOutScreen";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';


const MangasStackNavigator = createNativeStackNavigator();

function MangasStack() {
    return (
        <MangasStackNavigator.Navigator
            initialRouteName="MangasScreen"
        >
            
            <MangasStackNavigator.Screen
                name="MangasScreen"
                component={MangasScreen}
                options={{
                    headerShown: false,
                }}
            />
            <MangasStackNavigator.Screen
                name="Details"
                component={MangaDetailsScreen}
                options={{
                    headerBackTitleVisible: false,
                }}
            />
            <MangasStackNavigator.Screen
                name="Chapter"
                component={ChapterScreen}
                options={{
                    headerBackTitleVisible: false,
                }}
            />
        </MangasStackNavigator.Navigator>
    )
}


const Tab = createMaterialBottomTabNavigator();

function BottomTabsNavigator() {

    let [token, setToken] = useState(null)
    let state = useSelector(store => store.bottomTabsReducer.state)

    useFocusEffect(React.useCallback(() => {
        async function getToken() {
            try {
                const value = await AsyncStorage.getItem('token');
                setToken(value)
            } catch (error) {
                console.log(error);
            }
        }
        getToken();
    }, [state]));

    return (
        <Tab.Navigator
        initialRouteName="Home"
        activeColor="#f0edf6"
        inactiveColor="#3e2465"
        barStyle={{ backgroundColor: 'pink' }}
        >
        <Tab.Screen
            name="Home"
            component={HomeScreen}
            options={{
            tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons
                name="home"
                color={color}
                size={26}
                />
            ),
            }}
        />
        <Tab.Screen
            name="Mangas"
            component={MangasStack}
            options={{
            tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons
                name="book-open"
                color={color}
                size={26}
                />
            ),
            }}
        />
        {token && (
            <Tab.Screen
            name="LogOut"
            component={LogOutScreen}
            options={{
                tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons
                    name="logout"
                    color={color}
                    size={26}
                />
                ),
            }}
            />
        )}
        </Tab.Navigator>
    );
    }

export default BottomTabsNavigator; 