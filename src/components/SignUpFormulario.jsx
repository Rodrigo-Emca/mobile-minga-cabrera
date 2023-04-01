import React, { useState } from 'react';
import axios from 'axios'
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Alert } from 'react-native';

import profileIcon from '../images/profileIcon.png';
import emailIcon from '../images/emailIcon.png';
import cameraIcon from '../images/cameraIcon.png';
import passwordIcon from '../images/lockIcon.png';
import imgGoogle from '../images/imgGoogle.png';

function SignUpFormulario() {
    const [name, setName] = useState('');
    const [mail, setMail] = useState('');
    const [photo, setPhoto] = useState('');
    const [password, setPassword] = useState('');

    async function handleSubmit() {
        let data ={
            name: name,
            mail: mail,
            password: password,
            photo: photo,
        }
        console.log(data)
        setName('')
        setMail('')
        setPhoto('')
        setPassword('')
    
        let url_signUp = 'https://minga-back-446z.onrender.com/auth/signup';

        try {
        await axios.post(url_signUp, data).then((res) => {
            console.log('funcionó' + res);
            Alert.alert('¡Usuario creado!', 'Bienvenido a Minga', [
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
            Alert.alert('Ooops, something went wrong!', 'Please, try again!', [
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
        <View style={styles.formularioRegistro}>

            <View style={styles.contentForm}>
                <View style={styles.innerFormulario}> 
                    <Image source={profileIcon} alt="profileIcon" />
                    <Text style={styles.legend}>Name</Text>
                </View>
                <TextInput
                    placeholder='Write your name'
                    style={styles.input}
                    value={name}
                    onChangeText={(text) => setName(text)}
                />
            </View>

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
                    <Image source={cameraIcon} alt="photoIcon" />
                    <Text style={styles.legend}>Photo</Text>
                </View>
                <TextInput
                    placeholder='Photo URL'
                    style={styles.input}
                    value={photo}
                    onChangeText={(text) => setPhoto(text)}
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
                        <Text style={styles.btnTextSingin}>Sign Up</Text>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity style={styles.buttonSignGoogle}>
                    <Image source={imgGoogle} />
                    <Text style={styles.textButtonSignGoogle}>SignUp with Google</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
    }

    const styles = StyleSheet.create({
        formularioRegistro: {
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#fff',
            height: 460
        },
        contentForm: {
            width: '70%',
            height: 80,
            alignSelf: 'center',
        },
        legend: {
            flex: 1,
        },
        innerFormulario: {
            flexDirection: 'row',
            alignItems: 'center',
            marginVertical: 10,
        },
        input: {
            borderWidth: 1,
            borderColor: '#ccc',
            borderRadius: 10,
            padding: 10,
            marginBottom: 10,
            width: '100%',
        },
        icon: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
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
    }
)

export default SignUpFormulario