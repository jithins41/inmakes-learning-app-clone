import React, { Component } from "react";
import { View, StyleSheet, Image, Text, TextInput, TouchableHighlight } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class Otp extends Component {
    render() {
        return (
            <View style={styles.mainView}>
                <View style={styles.topView}>
                    <View style={styles.imageView}>
                        <Image source={require('../assets/inmakes_logo.png')} />
                        <Image style={{ width: 200, height: 200 }} source={require('../assets/icon.png')} />
                    </View>
                    <View style={styles.textView}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#000' }}>Verification code</Text>
                        <Text style={{ fontSize: 16 }}>Please type the verification code sent to</Text>
                        <Text style={{ color: '#000', marginTop: 20, fontSize: 16 }}>+91 9876543210</Text>
                    </View>
                </View>
                <View style={styles.bottomView}>
                    <View style={styles.otpContainer}>
                        <TextInput style={styles.otpTextBox} />
                        <TextInput style={styles.otpTextBox} />
                        <TextInput style={styles.otpTextBox} />
                        <TextInput style={styles.otpTextBox} />
                        <TextInput style={styles.otpTextBox} />
                        <TextInput style={styles.otpTextBox} />
                    </View>
                    <View style={{ paddingHorizontal: 30, justifyContent: 'center', alignItems: 'center' }}>
                        <TouchableHighlight style={styles.touchButton}>
                            <Text style={{ color: '#fff' }}>Resend OTP</Text>
                        </TouchableHighlight>
                        <Text style={{ marginTop: 5, color: '#446270' }}>Resend after 28s</Text>
                        <Text style={styles.contactText}>
                            <Icon style={{fontSize:35,fontWeight:'500'}} name="call"></Icon>
                            Contact Us </Text>
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
        flex: 6,
        backgroundColor: '#fff',
        justifyContent: 'space-between',
        // borderColor: 'red',
        // borderWidth: 1
    },
    bottomView: {
        flex: 4,
        backgroundColor: '#002333',
        borderTopStartRadius: 25,
        borderTopEndRadius: 25
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
    otpContainer: {
        flexDirection: 'row',
        paddingVertical: 30,
        justifyContent: 'center'
        // paddingHorizontal:20
    },
    otpTextBox: {
        paddingHorizontal: 15,
        paddingTop: 15,
        borderColor: '#072E40',
        borderWidth: 1,
        backgroundColor: '#062E40',
        margin: 2,
        borderRadius: 5,
        color: '#fff',
        fontSize: 20,
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
