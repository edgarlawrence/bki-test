import axios from 'axios';
import React, {useState, useEffect} from 'react'
import { Text, Button, View, StyleSheet, TextInput, Alert, TouchableOpacity } from 'react-native'
import Axios from 'axios';
import ViewFiles from './ViewFiles'
/// import { RadioButton } from 'react-native-paper';
/// import {Picker} from '@react-native-picker/picker';
//// import { TouchableOpacity } from 'react-native-gesture-handler';

 const Add = () => {
    const [name, setName] = useState("");
    const [umur, setUmur] = useState("")
    const [telp, setTelp] = useState("")
    const [alamat, setAlamat] = useState("")

 const submit = () => {
        const data = {
            name,
            umur,
            telp,
            alamat
        }
        
        Axios.post('http://10.0.2.2:3000/users', data)
            .then(res => {
                console.log('res', res);
                setName("");
                setUmur("");
                setTelp("");
                setAlamat("");
            })
    }

    return (
        <View style={styles.container}>
            <Text style={styles.texted}> Nama </Text>
            <TextInput style={styles.inputText} 
                value={name}
                onChangeText={(value) => setName(value)}
            />     

            <Text style={styles.texted}> Umur </Text>
            <TextInput
             style={styles.inputText}
             keyboardType='numeric'
             value={umur}
             onChangeText={(value) => setUmur(value)}
                 /> 

            <Text style={styles.texted}> No Telepon </Text>
            <TextInput
                style={styles.inputText}
                keyboardType='numeric'
                value={telp}
                onChangeText={(value) => setTelp(value)}               
             /> 

            <Text style={styles.texted}> Alamat </Text>
            <TextInput style={styles.inputText}
                value={alamat}
                onChangeText={(value) => setAlamat(value)}
                 /> 

            <TouchableOpacity
                onPress={submit}
            >
                <View style={styles.buttonOpacity}>
                    <Text> Submit </Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: '#909CC2'
    },  
    inputText: {
        backgroundColor: '#F7F5FB',
        borderColor: 'black',
        borderRadius: 20,
        height: 40,
        width: 300,
    },
    texted: {
        paddingBottom: 20,
        paddingTop: 20
    },
    radioGrup: {
        flexDirection: "row",
        flexWrap: "wrap",
    },
    radioText: {
        marginTop: 5
    },
    dropdowns: {
        width: 100,
        height: 100
    },
    buttonOpacity: {
        width:100,
        height:40,
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        borderRadius: 50,
        borderWidth: 2,
        justifyContent: 'center',
        paddingLeft: 22,
        marginTop: 50
    }
})

export default Add;