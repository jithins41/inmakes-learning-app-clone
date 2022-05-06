import React, { Component } from "react";
import { View, Image, TextInput, Text, StyleSheet, TouchableHighlight } from 'react-native';
import { Picker } from "@react-native-picker/picker";

export default class StudentDetails extends Component {
    render() {
        return (
            <View style={styles.mainView}>
                <View style={styles.topView}>
                    <View style={styles.imageView}>
                        <Image source={require('../assets/inmakes_logo.png')} />
                        <Image style={{ width: 200, height: 200 }} source={require('../assets/icon.png')} />
                    </View>
                    <View style={styles.textView}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#000' }}>Student Details </Text>
                    </View>
                </View>
                <View style={styles.bottomView}>
                    <View style={styles.inputContainer}>
                        <TextInput placeholder="Full name" placeholderTextColor="#446270" style={styles.inputText} />
                        <TextInput placeholder="Email" placeholderTextColor="#446270" style={styles.inputText} />
                        <TextInput placeholder="Select state" placeholderTextColor="#446270" style={styles.inputText} />
                        <TextInput placeholder="Pincode" placeholderTextColor="#446270" style={styles.inputText} />
                        {/* <Picker>
                            <Picker.Item label="one" value={1} />
                        </Picker> */}
                    </View>
                    <View style={styles.buttonContainer}>
                        <TouchableHighlight style={styles.touchButton}>
                            <Text style={{ color: '#fff' }}>Register</Text>
                        </TouchableHighlight>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        backgroundColor: '#fff',

    },
    topView: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'space-between',
        // borderColor: 'red',
        // borderWidth: 1
    },
    bottomView: {
        flex: 1,
        backgroundColor: '#002333',
        borderTopStartRadius: 25,
        borderTopEndRadius: 25,
        justifyContent:'space-between'
    },
    imageView: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 25,

    },
    textView: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 45
    },
    inputContainer: {
        flexDirection: 'column',
        paddingVertical: 30,
        justifyContent: 'center',
        paddingHorizontal: 20
    },
    buttonContainer:{
        paddingHorizontal:20,
        paddingBottom:30

    },
    inputText: {
        paddingHorizontal: 15,
        paddingTop: 15,
        borderColor: '#072E40',
        borderWidth: 1,
        backgroundColor: '#062E40',
        margin: 2,
        borderRadius: 5,
        color: '#fff',
        fontSize: 16,
        justifyContent: 'center',
        alignItems: 'center'
    },
    touchButton: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#00C458',
        borderRadius: 5,
        paddingVertical: 20,
        width: '100%'
    },
    contactText: {
        color: '#00C458',
        fontWeight: '500',
        fontSize: 21,
        marginTop: 20
    }
})
