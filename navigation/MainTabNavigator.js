import React from 'react';
import {
  Platform  
} from 'react-native';
import {
  createStackNavigator,
  createBottomTabNavigator
} from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen';

import PractiseScreen from '../screens/PractiseScreen';
import TrainingScreen from '../screens/TrainingScreen';
import CurrentLevel from '../screens/CurrentLevel';
import AdviceScreen from '../screens/AdviceScreen';
import Advices from '../screens/AdviceScreen';
import RecordScreen from '../screens/RecordScreen'
import CaloriesScreen from '../screens/CaloriesScreen';
import SettingsContainer from '../screens/SettingsContainer';
import ChangePasswordScreen from '../screens/settings/ChangePasswordScreen';
import EditKgScreen from '../screens/settings/EditKgScreen';
import EditNameScreen from '../screens/settings/EditNameScreen';




const config = Platform.select({
  web: {
    headerMode: 'screen'
  },
  default: {},
});

const TopStack = createStackNavigator({
   TOPrECORD:RecordScreen,
});

TopStack.navigationOptions={
  tabBarLabel:"TOP HUSTLERS",
  tabBarIcon: ({
    focused
  }) => ( <
    TabBarIcon focused = {
      focused
    }
    name = {
      Platform.OS === 'ios' ?
      `ios-medal` :
        'md-medal'
    }
    />
  ),

}
const HomeStack = createStackNavigator({
    Home: HomeScreen,
    Practise: PractiseScreen,
    Train: {
      screen: TrainingScreen,
      
    },
    Current: CurrentLevel,
    Advices: AdviceScreen,
    Record: RecordScreen,
  },
  {   navigationOptions: {
    header: {
        style: {
            elevation: 0,       //remove shadow on Android
            shadowOpacity: 0,   //remove shadow on iOS
        }
    }
}},
  config
);

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({
    focused
  }) => ( <
   
    TabBarIcon focused = {
      focused
    }
    name = {
      Platform.OS === 'ios' ?
      `ios-home` :
        'md-home'
    }
  
    />
  ),
};

HomeStack.path = '';



const SettingsStack = createStackNavigator({
    Settings: SettingsContainer,
    EditName:EditNameScreen,
    ChangePassword:ChangePasswordScreen,
    EditKg:EditKgScreen,

  },
  config
);

SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({
    focused
  }) => ( <
    TabBarIcon focused = {
      focused
    }
    name = {
      Platform.OS === 'ios' ? 'ios-settings' : 'md-settings'
    }
    />
  ),
};

SettingsStack.path = '';


const tabNavigator = createBottomTabNavigator({
  HomeStack,
  TopStack,
  SettingsStack,

},{

  tabBarOptions:{
    tabStyle:{
      backgroundColor:'#000000',
      borderColor:'#000000',
      borderWidth:1,
      
      
    
    },
    labelStyle:{
      fontFamily:'bold'
    }
    
  },

});



const mainStack = createStackNavigator({
  tabNavigator,
  Calories: CaloriesScreen,

}, {
  defaultNavigationOptions: {
    header: null
  }
});


tabNavigator.path = '';

export default mainStack;