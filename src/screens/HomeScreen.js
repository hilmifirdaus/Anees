import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {Actions} from 'react-native-router-flux';
import { Container, Content, Footer, FooterTab, Button, Text, Form, Item, Label, Input, Left, Right, Body, Title, Header, Tabs, Tab } from 'native-base';
import { Alert, View, LogBox } from 'react-native';
import GlobalFont from 'react-native-global-font';
import Carousel from 'react-native-snap-carousel';
import Icon from 'react-native-vector-icons/Ionicons';
//import auth from '@react-native-firebase/auth';
import firebase from '../database/firebase.js';

LogBox.ignoreLogs(['currentlyFocusedField is deprecated and will be removed in a future release. Use currentlyFocusedInput']);
LogBox.ignoreLogs([' focusTextInput must be called with a host component. Passing a react tag is deprecated.']);

export default class HomeScreen extends Component {

    constructor(props){
        super(props);
        this.state = {
            activeIndex:0,
            carouselItems: [
                {
                    title: "Step 1",
                    text: "Select your level of studies."
                },
                {
                    title: "Step 2",
                    text: "Select the subject that you wished to learn."
                },
                {
                    title: "Step 3",
                    text: "Chat or book your preferred tutor."
                },
                {
                    title: "Step 4",
                    text: "Have fun learning!"
                },
            ]
        }
    }

    signOut = () => {
        firebase.auth()
        .signOut()
        .then(() => {Actions.LoginScreen()})
    };

    _renderItem({item,index}){
        return (
          <View style={{
              backgroundColor:'#F7B2AD',
              borderRadius: 10,
              height: 350,
              padding: 50,
              }}>
                <Text style={{fontSize: 30, fontFamily:"AirbnbCerealExtraBold"}}>{item.title}</Text>
                <Text style={{fontFamily:"AirbnbCerealBook"}}>{item.text}</Text>
          </View>

        )
    }

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
            <Container style={{backgroundColor:'#F5F5F5'}}>
                <Header style={{backgroundColor:'white', height: 80}}>
                    <Body style={{paddingLeft:20}}>
                        <Text style={{fontFamily: "AirbnbCerealBlack", fontSize: 25}}>
                            Anees
                        </Text>
                    </Body>
                    <Right>
                        <Text style={{fontFamily: "AirbnbCerealLight", fontSize: 17}} onPress={()=>{Actions.LoginScreen()}}>
                            Sign out
                        </Text>
                    </Right>
                </Header>
                <Content padder>
                    <Text style={{textAlign: "center", height: 50, fontFamily: "AirbnbCerealBlack", fontSize: 40, marginTop: 20}}>
                        Welcome!
                    </Text>
                    <Text style={{textAlign: "center", height: 40, fontFamily: "AirbnbCerealBold", fontSize: 20, marginTop: 50}}>
                        Here's how to use the app
                    </Text>
                    <View style={{ flex: 1, flexDirection:'row', justifyContent: 'center', marginTop: 20 }}>
                        <Carousel
                            layout={"default"}
                            ref={ref => this.carousel = ref}
                            data={this.state.carouselItems}
                            sliderWidth={100}
                            itemWidth={300}
                            renderItem={this._renderItem}
                            onSnapToItem = { index => this.setState({activeIndex:index}) } />
                    </View>
                    <Button style={{justifyContent: 'center', marginTop: 30, backgroundColor:'#59C9A5'}} block last>
                            <Text style={{color:'black', fontFamily: "AirbnbCerealBlack", fontSize: 15}} onPress={()=>{Actions.BookScreen()}}>
                                Start Booking!
                            </Text>
                    </Button>
                </Content>
                
                <Footer style={{height: 80}}>
                    <FooterTab style={{backgroundColor:'white'}}>
                        <Button vertical onPress={()=>{Actions.HomeScreen();}}>
                            <Icon style={{color:'#F0736A', paddingBottom:7}} name="home-outline" size={25}/>
                            <Text style={{color:'#F0736A', fontFamily: "AirbnbCerealMedium", fontSize: 15}}>Home</Text>
                        </Button>
                        <Button vertical onPress={()=>{Actions.ChatScreen();}}>
                            <Icon style={{color:'grey', paddingBottom:7}} name="chatbubbles-outline" size={25}/>
                            <Text style={{color:'grey', fontFamily: "AirbnbCerealMedium", fontSize: 15}}>Chat</Text>
                        </Button>
                        <Button vertical onPress={()=>{Actions.BookStatusScreen();}}>
                            <Icon style={{color:'grey', paddingBottom:7}} name="notifications-outline" size={25}/>
                            <Text style={{color:'grey', fontFamily: "AirbnbCerealMedium", fontSize: 15}}>Status</Text>
                        </Button>
                        <Button vertical onPress={()=>{Actions.ProfileScreen();}}>
                            <Icon style={{color:'grey', paddingBottom:7}} name="person-outline" size={25}/>
                            <Text style={{color:'grey', fontFamily: "AirbnbCerealMedium", fontSize: 15}}>Profile</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            </Container>
        );
    }
}