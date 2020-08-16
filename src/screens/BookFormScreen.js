import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {Actions} from 'react-native-router-flux';
import { Container, Content, Footer, FooterTab, Button, Text, Form, Item, Label, Input, Left, Right, Body, Title, Header, Tabs, Tab, Picker } from 'native-base';
import { Alert, View, LogBox } from 'react-native';
import GlobalFont from 'react-native-global-font';
import Carousel from 'react-native-snap-carousel';
import Icon from 'react-native-vector-icons/Ionicons';

LogBox.ignoreLogs(['currentlyFocusedField is deprecated and will be removed in a future release. Use currentlyFocusedInput']);
LogBox.ignoreLogs([' focusTextInput must be called with a host component. Passing a react tag is deprecated.']);

export default class BookFormScreen extends Component {

    constructor(){
        super();
        this.state={
           topic: null,
           date: null,
           location: null,
           time: null 
        }
    }

    setTopic = (value) =>{
        this.setState({topic: value});
    }
    setDate = (value) =>{
        this.setState({date: value});
    }
    setLocation = (value) =>{
        this.setState({location: value});
    }
    setTime = (value) =>{
        this.setState({time: value});
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
                        <Text style={{fontFamily: "AirbnbCerealLight", fontSize: 17}} onPress={()=>{Actions.BookSubjectScreen()}}>
                            BACK
                        </Text>
                    </Right>
                </Header>

                <Content padder>
                    <Text style={{textAlign: "center", height: 50, fontFamily: "AirbnbCerealBlack", fontSize: 40, marginTop: 20}}>
                        Booking Form
                    </Text>
                    <Text style={{textAlign: "center", height: 100, fontFamily: "AirbnbCerealBold", fontSize: 20, margin: 50}}>
                        Fill in the details, 
                        we will notify you if you got a matched with a Tutor
                    </Text>

                    <Form>
                        <Item fixedLabel last>
                            <Label style={{fontFamily: "AirbnbCerealMedium"}}>SUBJECT TOPIC</Label>
                            <Input onChangeText={this.setTopic} value={this.state.topic} />
                        </Item>
                        <Item fixedLabel last>
                            <Label style={{fontFamily: "AirbnbCerealMedium"}}>DATE</Label>
                            <Input onChangeText={this.setDate} value={this.state.date} />
                        </Item>
                        <Item fixedLabel last>
                            <Label style={{fontFamily: "AirbnbCerealMedium"}}>LOCATION</Label>
                            <Input onChangeText={this.setLocation} value={this.state.location} />
                        </Item>
                        <Item fixedLabel picker last>
                            <Label style={{fontFamily: "AirbnbCerealMedium"}}>TIME</Label>
                            <Picker 
                            mode="dropdown" 
                            style={{ width: undefined, fontFamily: "AirbnbCerealMedium" }}
                            placeholder="Select TIME"
                            placeholderStyle={{ color: "#bfc6ea" }}
                            placeholderIconColor="#007aff"
                            selectedValue={this.state.time}
                            onValueChange={this.setTime}
                            Title="TIME"
                            >
                                <Picker.Item label="08:00 AM" value="8" />
                                <Picker.Item label="10.00 AM" value="10" />
                                <Picker.Item label="2.00 PM" value="2" />
                                <Picker.Item label="4.00 PM" value="4" />
                            </Picker>
                        </Item>
                    </Form>

                    <Button block last style={{marginTop: 40, backgroundColor:'#59C9A5'}} onPress={()=>{Actions.BookStatusScreen();}}>
                        <Text style={{color:'black', fontFamily: "AirbnbCerealBlack", fontSize: 15}}>Book Session</Text>
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