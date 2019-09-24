import { AppLoading } from 'expo';
import { Asset } from 'expo-asset';
import * as Font from 'expo-font';
import React, { useState } from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import DataContext from './components/DataContext';
import AppNavigator from './navigation/AppNavigator';
import deviceStorage from './components/service/deviceStorage';
import configAxios from './components/service/configAxios';
//const [isLoadingComplete, setLoadingComplete] = useState(false);



export default class App extends React.Component{

componentWillMount=()=>{
  deviceStorage.getJWT().then(res=>{
    configAxios(res);
  })
}
state ={
     setRecord:(val)=>{
       this.setState({
         record:val
       })
     },
    PractisePushUps:0,
    setPushUps:(val)=>{
     this.setState({PractisePushUps:val});
    },
    record:0,
    level1:false,
    level2:true,
    level3:true,
    level4:true,
    level5:true,
    level6:true,
    level7:true,
    level8:true,
    level9:true,
    level10:true,
    level11:true,
    level12:true,
    setLevel:(val,level)=>{
      switch(level){
        case 1 :
         this.setState({level1:val});
         break;
       case 2 :
           this.setState({level2:val});
           break;
       case 3 :
          this.setState({level3:val});
          break;
       case 4 :
           this.setState({level4:val});
           break;
       case 5 :
           this.setState({level5:val});
          break ;
       case 6 :
          this.setState({level6:val});
          break;
       case 7 :
          this.setState({level7:val});
          break;
       case 8 :
          this.setState({level8:val});
          break; 
       case 9 :
          this.setState({level9:val});
          break; 
       case 10 :
          this.setState({level10:val});
          break;
       case 11 :
         this.setState({level11:val});
         break;
       default:
         this.setState({level12:val});}
    },
    currentLevel:1,
    setCurrentLevel:(currentLevel)=>{
      this.setState({currentLevel});
    },
    series:[[5,5,6,6],[7,7,8,8],[10,10,11,11,],[13,13,14,14],[16,16,17,17],[19,19,20,20],[22,22,23,23],[24,24,25,25],[25,25,26,26],[28,28,29,29],[30,30,31,31],[32,32,33,33],[34,34,35,35]],
    setSeries:(series)=>{
     this.setState({series});
    }
    
}

render(){
  // if (!isLoadingComplete && !props.skipLoadingScreen) {
  //   return (
  //     <AppLoading
  //       startAsync={loadResourcesAsync}
  //       onError={handleLoadingError}
  //       onFinish={() => handleFinishLoading(setLoadingComplete)}
  //     />
  //   );
  // } else {
    return (
      <View style={styles.container}>
        <DataContext.Provider value={this.state}>
          {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
          <AppNavigator />
        </DataContext.Provider>
      </View>
    );
  
    }
}

async function loadResourcesAsync() {
  await Promise.all([
    Asset.loadAsync([
      require('./assets/images/robot-dev.png'),
      require('./assets/images/robot-prod.png'),
    ]),
    Font.loadAsync({
      // This is the font that we are using for our tab bar
      ...Ionicons.font,
      // We include SpaceMono because we use it in HomeScreen.js. Feel free to
      // remove this if you are not using it in your app
      'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
    }),
  ]);
}

function handleLoadingError(error) {
  // In this case, you might want to report the error to your error reporting
  // service, for example Sentry
  console.warn(error);
}

function handleFinishLoading(setLoadingComplete) {
  setLoadingComplete(true);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
