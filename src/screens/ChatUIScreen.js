import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {Actions} from 'react-native-router-flux';
import { Container, Content, Footer, FooterTab, Button, Text, Form, Item, Label, Input, Left, Right, Body, Title, Header, Tabs, Tab, Picker, List, ListItem, View  } from 'native-base';
import { Alert, LogBox } from 'react-native';
import GlobalFont from 'react-native-global-font';
import Carousel from 'react-native-snap-carousel';
import Icon from 'react-native-vector-icons/Ionicons';
import firebase from '../database/firebase.js';
import { GiftedChat } from 'react-native-gifted-chat'; // 0.3.0

LogBox.ignoreLogs(['currentlyFocusedField is deprecated and will be removed in a future release. Use currentlyFocusedInput']);
LogBox.ignoreLogs(['VirtualizedLists should never be nested inside plain ScrollViews with the same orientation - use another VirtualizedList-backed container instead.']);
LogBox.ignoreLogs([' focusTextInput must be called with a host component. Passing a react tag is deprecated.']);


export default class ChatUIScreen extends Component {

    state = {
        messages: []
    };

    get uid() {
        return (firebase.auth().currentUser || {}).uid;
    }

    get ref() {
        return firebase.database().ref('Messages');
    }

    parse = snapshot => {
        const { timestamp: numberStamp, text, user } = snapshot.val();
        const { key: id } = snapshot;
        const { key: _id } = snapshot;
        const createdAt = new Date();

        const message = {
            id,
            _id,
            text,
            user,
            createdAt,
        };
        return message;
    };

    refOn = callback => {
        this.ref.limitToLast(20)
        .on('child_added', snapshot => callback(this.parse(snapshot)));
    }

    send = messages => {
        for (let i = 0; i < messages.length; i++) {
          const { text, user } = messages[i];
          const message = {
            text,
            user,
          };
          this.ref.push(message);
        }
    };

    refOff() {
        this.ref.off();
    }

    get user() {
        return {
            name: this.props.user,
            id: this.uid,
            _id: this.uid
        };
    }

    componentDidMount() {
        this.refOn(message =>
            this.setState(previousState => ({
              messages: GiftedChat.append(previousState.messages, message)
            }))
        );
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

    componentWillUnmount() {
        this.refOff();
    }

    render() {
        return (
            <Container style={{backgroundColor:'#F5F5F5'}}>

                <Header style={{backgroundColor:'white', height: 80}}>
                    <Body style={{paddingLeft:20}}>
                        <Text style={{fontFamily: "AirbnbCerealBlack", fontSize: 25}}>
                            {this.props.user}
                        </Text>
                    </Body>
                    <Right>
                        <Text style={{fontFamily: "AirbnbCerealLight", fontSize: 17}} onPress={()=>{Actions.ChatScreen()}}>
                            BACK
                        </Text>
                    </Right>
                </Header>

                <Content style={{flex: 1}} contentContainerStyle={{flex: 1}}>
                    <GiftedChat
                        messages={this.state.messages}
                        onSend={this.send}
                        user={this.user}
                    />
                </Content>

                
            </Container>
        );
    }
}