import React from 'react';
import { createAppContainer, createSwitchNavigator ,createStackNavigator} from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';

import WelcomeScreen from '../screens/WelcomeScreen';
import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';

import AuthloadingScreen from '../screens/AuthloadingScreen';


const WelcomeStack = createStackNavigator({
  Welcome:WelcomeScreen,
  Login:LoginScreen,
  SignUp:SignUpScreen
});


export default createAppContainer(
  createSwitchNavigator({
    Auth:AuthloadingScreen,
    Register:WelcomeStack,
    Main: MainTabNavigator,
  })
);
