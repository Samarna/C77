import React,{Component} from 'react';
import {TouchableOpacity, TextInput, View, Text, StyleSheet, Alert} from 'react-native';
import firebase from 'firebase';
import db from '../config.js';
import bookAnimation from '../components/books.js';
import BookAnimation from '../components/books.js';

export default class WelcomeScreen extends Component {
    constructor(){
        super();
        this.state = {
            emailId : '',
            password : '',
        }
    }
    userSignup=(emailId,password)=>{
        firebase.auth().createUserWithEmailAndPassword(emailId,password)
        .then(()=>{
            return Alert.alert("User successfully created!");
        }).catch((error)=>{
            var errorMessage = error.message;
            console.log(errorMessage);
            return Alert.alert(errorMessage);
        })
    }
    userLogin=(emailId,password)=>{
        firebase.auth().signInWithEmailAndPassword(emailId,password)
        .then(()=>{
            return Alert.alert("User successfully logged in!");
        }).catch((error)=>{
            var errorMessage = error.message;
            console.log(errorMessage);
            return Alert.alert(errorMessage);
        })
    }
    render(){
        return(<View style = {styles.container}><View style = {styles.profileContainer}> 
            <BookAnimation></BookAnimation>
            <Text style = {styles.title}>Book Santa</Text>
        </View>
        <View style = {styles.buttonContainer}>
            <TextInput style = {styles.loginBox} 
            placeholder = "abc@example.com"
            keyboardType = "email-address"
            onChangeText = {(text)=>{
                this.setState({
                    emailId : text,
                })
            }}></TextInput>
            <TextInput style = {styles.loginBox}
            placeholder = "enter passcode"
            secureTextEntry = {true}
            onChangeText = {(text)=>{
                this.setState({
                    password : text,
                })
            }}>Password</TextInput>
            <TouchableOpacity style = {[styles.button,{marginTop : 20, marginBottom : 20}]}
            onPress = {()=>{
                this.userLogin(this.state.emailId,this.state.password)
            }}>
                <Text style = {styles.buttonText}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity style = {styles.button}
            onPress = {()=>{
                this.userSignup(this.state.emailId,this.state.password)
            }}>
                <Text style = {styles.buttonText}>Sign-up</Text>
            </TouchableOpacity>
        </View>
        </View>);
    }
}
const styles = StyleSheet.create({
    container: { 
        flex: 1,
        backgroundColor:'#F8BE40',
    }, 
    profileContainer:{
        flex:1, 
        justifyContent:'center', 
        alignItems:'center',
    },
    title : { 
        fontSize : 60, 
        fontWeight : "400", 
        paddingBottom:20, 
        color : '#df3d23', 
        marginTop: 20 
    }, 
    loginBox :{ 
        width : 300, 
        height : 20, 
        borderBottomWidth: 1.5, 
        borderColor : '#ff8a65', 
        fontSize: 20, 
        margin:10, 
        paddingLeft:10 , 
        alignItems : 'center' 
    }, 
    button : { 
        width:200, 
        height:50, 
        justifyContent:'center', 
        alignItems:'center', 
        borderRadius:25, 
        backgroundColor:"#ff9800", 
        shadowColor: "#000", 
        shadowOpacity: 0.30, 
        shadowRadius: 10.32, 
        elevation: 16, 
        shadowOffset: { width: 0, height: 8 }
    }, 
    buttonText:{ 
        color:'#ffff', 
        fontWeight:'200', 
        fontSize:20 
    }, 
    buttonContainer:{ 
        flex:1, 
        alignItems:'center' 
    } 
});