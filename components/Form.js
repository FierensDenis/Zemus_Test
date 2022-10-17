import React, { useState } from 'react';
import { Alert, Button, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const Form = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const connected = () => {
        Alert.alert("Connected !")
    }

    return (
        <View style={styles.form_container}>
            
            <View style={styles.form_EmailPassword}>
                <TextInput 
                    style={styles.input}
                    placeholder='Email'
                    placeholderTextColor="#3f60a8"
                    onChangeText={(email) => setEmail(email)}
                />

                <TextInput 
                    style={styles.input}
                    placeholder='Mot de passe'
                    placeholderTextColor="#3f60a8"
                    secureTextEntry={true}
                    onChangeText={(password) => setPassword(password)}
                />
            </View>

            <TouchableOpacity>
                <Text style={styles.pwdForgot}>
                    Mot de passe oublié
                </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.connexion} onPress={connected}>
                <Text style={styles.connexion_text}>
                    Connexion
                </Text>
            </TouchableOpacity>

            <TouchableOpacity>
                <Text style={styles.register}>
                    Cliquez ici pour vous inscrire
                </Text>
            </TouchableOpacity>

        </View>
    );
};

const styles = StyleSheet.create({
    form_container:{
        width:'80%',
        height:270,

        flexDirection: "column",
        justifyContent: "space-between",
        alignItems:'center'
    },
    form_EmailPassword: {
        width:'100%'
    },
    pwdForgot:{
        color: "#3f60a8",
        fontSize:15
    },
    input: {
        borderBottomColor: "#707070",
        borderBottomWidth: 1,
        fontSize: 15,
        paddingVertical: 10,
        marginVertical: 10
    },
    connexion: {
        alignItems: "center",
        backgroundColor: "#3f60a8",
        width: 100,
        padding: 10,
        borderRadius: 50
    },
    connexion_text: {
        fontSize: 15,
        color: "white",
        textAlign: "center"
    },
    register: {
        fontSize: 11,
        textDecorationLine: 'underline',
        color: "#3f60a8"
    }
  });

export default Form;