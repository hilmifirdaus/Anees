import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {Actions} from 'react-native-router-flux';
import { Container, Content, Footer, FooterTab, Button, Text, Form, Item, Label, Input, Left, Right, Body, Title, Header, Tabs, Tab } from 'native-base';
import { Alert, View, LogBox } from 'react-native';
import GlobalFont from 'react-native-global-font';
import Carousel from 'react-native-snap-carousel';
import Icon from 'react-native-vector-icons/Ionicons';
//import * as firebase from 'firebase';
import firebase from '../database/firebase.js';
//import auth from '@react-native-firebase/auth';

LogBox.ignoreLogs(['currentlyFocusedField is deprecated and will be removed in a future release. Use currentlyFocusedInput']);
LogBox.ignoreLogs([' focusTextInput must be called with a host component. Passing a react tag is deprecated.']);

export default class SignupScreen extends Component {

    constructor() {
        super();
        this.state = {
            email: null,
            password: null
        };
    }

    setEmail = (value) => {
        this.setState({email: value});
    }

    setPassword = (value) => {
        this.setState({password: value});
    }

    signUp = () =>{
        try {
           if(this.state.email && this.state.password){
                firebase.auth()
                .createUserWithEmailAndPassword(this.state.email, this.state.password)
                .then(user => { 
                    console.log(user);
                    Alert.alert('Status','Sign Up Successful');
                    Actions.LoginScreen();
                })
                .catch(error => {
                  Alert.alert('Status',error.toString(error));
                });
            } else {
              Alert.alert('Status','Invalid Email or Password!');
            }
        } catch (error) {
              Alert.alert({ errorMessage: error.message });
            }
        
       
    };

    componentDidMount() {
        let fontName1 = 'AirbnbCerealBlack'
        let fontName2 = 'AirbnbCerealBold'
        let fontName3 = 'AirbnbCerealBook'
        let fontName4 = 'AirbnbCerealExtraBold'
        let fontName5 = 'AirbnbCerealLight'
        let fontName6 = 'AirbnbCerealMedium'
        GlobalFont.applyGlobal(fontName1)
        GlobalFont.applyGlobal(fontName2)
        GlobalFont.applyGlobal(fontName3)
        GlobalFont.applyGlobal(fontName4)
        GlobalFont.applyGlobal(fontName5)
        GlobalFont.applyGlobal(fontName6)   //<------- Added font family golbally 
     }

    render() {
        return (
            <Container style={{backgroundColor:'#F5F5F5', paddingTop: 80}}>
                <Content padder>
                    <Text style={{textAlign: "center", height: 50, fontFamily: "AirbnbCerealBlack", fontSize: 40, marginTop: 20}}>
                        Anees
                    </Text>
                    <Text style={{textAlign: "center", height: 60, fontFamily: "AirbnbCerealBold", fontSize: 20, marginTop: 50}}>
                        User Registration
                    </Text>
                    
                    <Form style={{ paddingTop: 60}}>
                    <Item rounded last style={{padding:10, backgroundColor: "#CFDCDD"}}>
                            <Input
                                placeholder='Email'
                                autoCapitalize="none"
                                autoCorrect={false}
                                onChangeText={this.setEmail}
                            />
                        </Item>
                        <Text></Text>
                        <Item rounded last style={{padding:10, backgroundColor: "#CFDCDD"}}>
                            <Input
                                placeholder='Password'
                                secureTextEntry={true}
                                autoCapitalize="none"
                                autoCorrect={false}
                                onChangeText={this.setPassword}
                            />
                        </Item>
                    </Form>
                        <Button rounded block last style={{marginTop: 50, backgroundColor: '#59C9A5'}} onPress={this.signUp}>
                        <Text style={{fontFamily:"AirbnbCerealBlack", color: 'black', fontSize: 15}}>sign up</Text>
                        </Button>
                        <Text style={{fontFamily:"AirbnbCerealBook", textAlign: "center", marginTop: 30}} onPress={()=>{Actions.LoginScreen()}} >Already have an account?</Text>
                </Content>
                
            </Container>
        );
    }
}