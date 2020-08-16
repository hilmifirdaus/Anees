import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Stack, Router, Scene, Actions} from 'react-native-router-flux';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from './src/screens/LoginScreen';
import SignupScreen from './src/screens/SignupScreen';
import HomeScreen from './src/screens/HomeScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import EditProfileScreen from './src/screens/EditProfileScreen';
import ChatScreen from './src/screens/ChatScreen';
import ChatUIScreen from './src/screens/ChatUIScreen';
import BookScreen from './src/screens/BookScreen';
import BookStatusScreen from './src/screens/BookStatusScreen';
import BookSubjectScreen from './src/screens/BookSubjectScreen';
import BookTutorScreen from './src/screens/BookTutorScreen';
import TutorProfileScreen from './src/screens/TutorProfileScreen';
import BookFormScreen from './src/screens/BookFormScreen';
import SessionScreen from './src/screens/SessionScreen';
//import firebase from './src/database/firebase';

export default class App extends Component {

  render() {
    return (
      <Router>
        <Stack key="root">
          <Scene 
            key="HomeScreen"
            component={HomeScreen}
            //initial={true}
            hideNavBar={true}
          />
          <Scene 
            key="LoginScreen"
            component={LoginScreen}
            initial={true}
            hideNavBar={true}
          />
          <Scene 
            key="SignupScreen"
            component={SignupScreen}
            //initial={true}
            hideNavBar={true}
          />
          <Scene 
            key="BookScreen"
            component={BookScreen}
            //initial={true}
            hideNavBar={true}
            back={true}
          />
          <Scene 
            key="BookSubjectScreen"
            component={BookSubjectScreen}
            //initial={true}
            hideNavBar={true}
            back={true}
          />
          <Scene 
            key="BookTutorScreen"
            component={BookTutorScreen}
            //initial={true}
            hideNavBar={true}
            back={true}
          />
          <Scene 
            key="TutorProfileScreen"
            component={TutorProfileScreen}
            //initial={true}
            hideNavBar={true}
            back={true}
          />
          <Scene 
            key="BookFormScreen"
            component={BookFormScreen}
            //initial={true}
            hideNavBar={true}
            back={true}
          />
          <Scene 
            key="BookStatusScreen"
            component={BookStatusScreen}
            //initial={true}
            hideNavBar={true}
            back={true}
          />
          <Scene 
            key="SessionScreen"
            component={SessionScreen}
            //initial={true}
            hideNavBar={true}
            back={true}
          />
          <Scene 
            key="ChatScreen"
            component={ChatScreen}
            //initial={true}
            hideNavBar={true}
            back={true}
          />
          <Scene 
            key="ChatUIScreen"
            component={ChatUIScreen}
            //initial={true}
            hideNavBar={true}
            back={true}
          />
          <Scene 
            key="ProfileScreen"
            component={ProfileScreen}
            //initial={true}
            hideNavBar={true}
            back={true}
          />
          <Scene 
            key="EditProfileScreen"
            component={EditProfileScreen}
            //initial={true}
            hideNavBar={true}
            back={true}
          />
        </Stack>
      </Router>
    );
  }
}