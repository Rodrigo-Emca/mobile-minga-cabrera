import React, { useState } from 'react'
import axios from 'axios'
import { View, TextInput, Text, TouchableOpacity, StyleSheet, Image, Alert } from 'react-native'

import imgGoogle from '../images/imgGoogle.png';
import emailIcon from '../images/emailIcon.png';
import passwordIcon from '../images/lockIcon.png';

function SignInFormulario() {
    const [mail, setMail] = useState('');
    const [password, setPassword] = useState('');
    
    async function handleSubmit() {
        let data ={
            mail: mail,
            password: password
        }
        console.log(data)
        setMail('')
        setPassword('')
    
        let url_signIn = 'https://minga-back-446z.onrender.com/auth/signin';

        try {
        await axios.post(url_signIn, data).then((res) => {
            console.log('funcionó');
            Alert.alert('¡Usuario creado!', 'Bienvenido', [
                {
                    text: 'Cancel',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel',
                },
                {text: 'OK', onPress: () => console.log('OK Pressed')},
            ]);
        });
        } catch (error) {
        let err = error.response.data.message;
            console.log('Ocurrió un error: ' + err);
            Alert.alert('Ooops, something went wrong!', 'Credenciales incorrectas', [
                {
                    text: 'Cancel',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel',
                },
                {text: 'OK', onPress: () => console.log('OK Pressed')},
            ]);
        }
    }

    return (
        <View style={styles.formularioSignIn}>
            <View style={styles.contentForm}>
                <View style={styles.innerFormulario}> 
                    <Image source={emailIcon} alt="emailIcon" />
                    <Text style={styles.legend}>Email</Text>
                </View>
                <TextInput
                    placeholder='Example@gmail.com'
                    style={styles.input}
                    value={mail}
                    onChangeText={(text) => setMail(text)}
                />
            </View>

            <View style={styles.contentForm}>
                <View style={styles.innerFormulario}> 
                    <Image source={passwordIcon} alt="passwordIcon" />
                    <Text style={styles.legend}>Password</Text>
                </View>
                <TextInput
                    placeholder='Password'
                    style={styles.input}
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                    secureTextEntry={true}
                />
            </View>

            <View style={styles.contenedorFinal}>

                <View style={styles.contenedorButton}>
                    <TouchableOpacity style={styles.btnSingIn} onPress={handleSubmit}>
                        <Text style={styles.btnTextSingin}>Sign In</Text>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity style={styles.buttonSignGoogle}>
                    <Image source={imgGoogle} />
                    <Text style={styles.textButtonSignGoogle}>SignUp with Google</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    formularioSignIn: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        height: 420,
    },
    gralCont: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    innerFormulario: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
    },
    contentForm: {
        width: '70%',
        height: 100,
        alignSelf: 'center',
        justifyContent: 'space-evenly',
    },
    legend: {
        flex: 1,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 10,
        padding: 10,
        marginBottom: 10,
        width: '100%',
    },
    contenedorFinal: {
        alignItems: 'center',
        justifyContent: 'space-around',
        width: 400,
        height: 150,
        paddingTop: 10,
    },
    contenedorButton: {
        width: 300,
        alignSelf: 'center',
    }, 
    btnSingIn: {
        backgroundColor: '#F9A8D4',
        borderRadius: 10,
        padding: 15,
        alignItems: 'center',
    },
    btnTextSingin: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
    },
    buttonSignGoogle: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: 300,
    },
})

export default SignInFormulario