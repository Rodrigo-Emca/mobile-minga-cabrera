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
        height: 150,
        backgroundColor: '#fff',
        //borderWidth: 5,
    },
    text: {
        fontSize: 20,
    }
})

// import React from 'react';
// import { View, Text, TouchableOpacity } from 'react-native';
// import { createStackNavigator } from '@react-navigation/stack';

// const Stack = createStackNavigator();

// export default function SignUpFooter({ navigation }) {
//     return (
//         <View>
//             <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
//                 <Text>Already have an account? Log in</Text>
//             </TouchableOpacity>
//             <TouchableOpacity onPress={() => navigation.navigate('Home')}>
//                 <Text>Go back to home page</Text>
//             </TouchableOpacity>
//         </View>
//     );
// }

// function SignInScreen() {
//     return <Text>SignIn screen</Text>;
// }

// function HomeScreen() {
//     return <Text>Home screen</Text>;
// }

// function RegisterScreen() {
//     return (
//         <Stack.Navigator>
//             <Stack.Screen name="Register" component={Register} />
//             <Stack.Screen name="SignIn" component={SignInScreen} />
//             <Stack.Screen name="Home" component={HomeScreen} />
//         </Stack.Navigator>
//     );
// }

