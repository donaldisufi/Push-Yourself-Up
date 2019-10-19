import React from 'react';
import { createAppContainer, createSwitchNavigator ,createStackNavigator} from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';

import WelcomeScreen from '../screens/WelcomeScreen';
import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';
import VideoGif from '../screens/VideoGif';
import AuthloadingScreen from '../screens/AuthloadingScreen';


const WelcomeStack = createStackNavigator({
  Login:LoginScreen,
  SignUp:SignUpScreen,
});


export default createAppContainer(
  createSwitchNavigator({
    Auth:AuthloadingScreen,
    Register:WelcomeStack,
    Main: MainTabNavigator,
    VideoGif

  })
);
