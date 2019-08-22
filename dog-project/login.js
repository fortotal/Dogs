import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  Image,
  Alert
} from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation'; 
import ProfilePage from './profile.js';
import App from './App.js'

const navigationApp = ({ navigation }) => (<App navigation={navigation}/>);
  export default class LoginView extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
        email : "",
        password : "",
      };
    // this.showProfile = this.showProfile.bind(this);
  }
  // showProfile(){
  //   this.props.navigation.navigate('Profile');
  // } 

  set_email(em){
    this.email = em;

  }
  set_password(ps){
    this.password = ps;
  }

  register(){
    data = JSON.stringify({
      login: this.email,
      password: this.password
    });
    
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://192.168.0.14:8080/auth', true);
    xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    xhr.send(data);
    xhr.onload = function() {
      if(xhr.status != 200){
        Alert.alert("Что-то пошло не так...")
      }else{
        Alert.alert("Nam pizdec");
        navigationApp('Profile');
      }
    };
  }
  onClickListener = (viewId) => {
    Alert.alert("Alert", "Button pressed "+viewId);
  }
  onClickListenerLogin = (login, password) => {
    Alert.alert("login = " + login, "password = " + password)
  }


  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/message/ultraviolet/50/3498db'}}/>
          <TextInput style={styles.inputs}
              placeholder="Email"
              keyboardType="email-address"
              underlineColorAndroid='transparent'
              onChangeText={(email) => this.set_email(email)}
              />

        </View>
        
        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/key-2/ultraviolet/50/3498db'}}/>
          <TextInput style={styles.inputs}
              placeholder="Password"
              secureTextEntry={true}
              underlineColorAndroid='transparent'
              onChangeText={(password) => this.set_password(password)}
              />
              
        </View>



        <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={() => this.register()}>
          <Text style={styles.loginText}>Регистрация</Text>
        </TouchableHighlight>
      </View>
    );
  }
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DCDCDC',
  },
  inputContainer: {
      borderBottomColor: '#F5FCFF',
      backgroundColor: '#FFFFFF',
      borderRadius:30,
      borderBottomWidth: 1,
      width:250,
      height:45,
      marginBottom:20,
      flexDirection: 'row',
      alignItems:'center'
  },
  inputs:{
      height:45,
      marginLeft:16,
      borderBottomColor: '#FFFFFF',
      flex:1,
  },
  inputIcon:{
    width:30,
    height:30,
    marginLeft:15,
    justifyContent: 'center'
  },
  buttonContainer: {
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
  },
  loginButton: {
    backgroundColor: "#00b5ec",
  },
  loginText: {
    color: 'white',
  }
});