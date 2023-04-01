import React, { useRef } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Button } from 'react-native';

import profileIcon from '../images/profileIcon.png';
import emailIcon from '../images/emailIcon.png';
import cameraIcon from '../images/cameraIcon.png';
import passwordIcon from '../images/lockIcon.png';
import imgGoogle from '../images/imgGoogle.png';

function SignUpFormulario() {
    const name = useRef(null);
    const mail = useRef(null);
    const photo = useRef(null);
    const password = useRef(null);

    const handleSubmit = () => {
        // Aquí iría la lógica para manejar el envío del formulario
    };

    return (
        <View style={styles.formularioRegistro}>
            <View style={styles.innerFormulario}>
                <Text style={styles.legend}>Name</Text>
                <TextInput ref={name} style={styles.input} name='name' required />
                <TouchableOpacity style={styles.icon}>
                <Image source={profileIcon} alt="profileIcon" />
                </TouchableOpacity>
            </View>

            <View style={styles.innerFormulario}>
                <Text style={styles.legend}>Email</Text>
                <TextInput ref={mail} style={styles.input} name='mail' required />
                <TouchableOpacity style={styles.icon}>
                <Image source={emailIcon} alt="emailIcon" />
                </TouchableOpacity>
            </View>

            <View style={styles.innerFormulario}>
                <Text style={styles.legend}>Photo</Text>
                <TextInput ref={photo} style={styles.input} name='photo' required />
                <TouchableOpacity style={styles.icon}>
                <Image source={cameraIcon} alt="photoIcon" />
                </TouchableOpacity>
            </View>

            <View style={styles.innerFormulario}>
                <Text style={styles.legend}>Password</Text>
                <TextInput ref={password} style={styles.input} name='password' required />
                <TouchableOpacity style={styles.icon}>
                <Image source={passwordIcon} alt="passwordIcon" />
                </TouchableOpacity>
            </View>
            <View style={styles.contenedorFinal}>
                <TouchableOpacity style={styles.pSendNotif}>
                    <View style={styles.checkSendNotif} />
                    <Text style={styles.textSendNotif}>Send me a notification to my email</Text>
                </TouchableOpacity>

                <View style={styles.contenedorButton}>
                        <Button style={styles.button}
                            title="Sign Up"
                            color= "#F9A8D4"
                            onPress={() => Alert.alert('Button with adjusted color pressed')}
                        />
                    </View>

                <TouchableOpacity style={styles.buttonSignGoogle}>
                    <Image source={imgGoogle} />
                    <Text style={styles.textButtonSignGoogle}>Sign with Google</Text>
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
            height: 400
        },
        innerFormulario: {
            flexDirection: 'row',
            alignItems: 'center',
            marginVertical: 10,
        },
        legend: {
            flex: 1,
            marginRight: 10,
            marginLeft: 25,
        },
        input: {
            flex: 3,
            height: 40,
            borderColor: 'gray',
            borderWidth: 1,
            paddingHorizontal: 10,
        },
        icon: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
        },
        pSendNotif: {
            flexDirection: 'row',
            alignItems: 'center'
        },
        contenedorFinal: {
            alignItems: 'center',
            justifyContent: 'space-around',
            width: 400,
            height: 150,
            //borderWidth: 5,
            paddingTop: 10
        },
        contenedorButton: {
            width: 300,
            alignSelf: 'center',
        }, 
        buttonSignGoogle: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            width: 300,
            // borderWidth: 5,

        }
    }
)

export default SignUpFormulario