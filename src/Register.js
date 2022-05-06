import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableHighlight, TextInput,Image } from 'react-native';

export default class Register extends Component {

    render() {
        return (
            <View style={styles.mainView}>
                <View style={styles.topView}>
                    <View style={{flex:5,justifyContent:'center',alignItems:'center'}}>
                        <Image source={require('../assets/inmakes_logo.png')}></Image>
                    </View>
                    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                        <Text style={{fontWeight:'500',color:'#000',fontSize:20}}>Enter your mobile number</Text>
                        <Text>We will send you an OTP to verify</Text>
                    </View>
                </View>
                <View style={styles.bottomView}>
                    <View style={{ paddingTop: 25,paddingHorizontal:25, flexDirection: 'row' }}>
                        <TextInput style={{ ...styles.inputText, flex: 1 }}>
                            <Text style={{ color: 'white' }}>+91</Text>
                        </TextInput>
                        <TextInput placeholderTextColor='#446270' placeholder='Mobile number' style={{ ...styles.inputText, flex: 9 }}></TextInput>
                    </View>
                  <View style={{paddingHorizontal:25,paddingTop:10}}>
                  <TouchableHighlight style={styles.touchButton}>
                        <Text style={{color:'#fff',paddingVertical:20}}>Continue</Text>
                    </TouchableHighlight>
                  </View>
                </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({

    mainView: {
        width: '100%',
        height: '100%',
        backgroundColor: '#fff',

    },
    topView: {
        flex: 3,
        backgroundColor: '#fff'
    },
    bottomView: {
        flex: 1,
        backgroundColor: '#002333',
        borderTopStartRadius: 25,
        borderTopEndRadius: 25
    },
    inputText: {
        paddingHorizontal: 20,
        paddingVertical:15,
        borderColor: '#072E40',
        borderWidth:1,
        backgroundColor: '#062E40',
        margin:2,
        borderRadius:5,
    },
    touchButton:{
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#00C458',
        borderRadius:5,
    }

})