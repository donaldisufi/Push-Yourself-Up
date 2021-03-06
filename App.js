import { AppLoading } from 'expo';
import { Asset } from 'expo-asset';
import * as Font from 'expo-font';
import React, { useState } from 'react';
import { Platform, StatusBar, StyleSheet, View ,ImageBackground} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import DataContext from './components/DataContext';
import AppNavigator from './navigation/AppNavigator';
import deviceStorage from './components/service/deviceStorage';
import configAxios from './components/service/configAxios';
import axios from 'axios';



export default class App extends React.Component{
  loadResourcesAsync  = async()=> {
    await Promise.all([
      Asset.loadAsync([
        require('./assets/images/HomeBack.png'),
        require('./assets/images/TrainBack.png'),
        require('./assets/images/SettingsBack.png'),
        require('./assets/images/FittnesBack.png'),
        require('./assets/images/SettGirl.png'),
        require('./assets/images/TrainBack2.png'),
        require('./assets/images/welcome.jpg'),
        require('./assets/images/LogoApp.png'),
        require('./assets/videos/GifVideo.mp4'),
        require('./assets/images/clech.png'),
        require('./assets/images/deep.png'),
        require('./assets/images/doingpush.png'),
        require('./assets/images/gravity.png'),
        require('./assets/images/gripe.png'),
        require('./assets/images/posture.png'),
        require('./assets/images/push-up.png'),
        require('./assets/images/icon.png'),

     
         







        
  
  
  
      ]),
      Font.loadAsync({
        ...Ionicons.font,
       
        'regular': require('./assets/fonts/Roboto-Regular.ttf'),
        'thin':require('./assets/fonts/Roboto-Thin.ttf'),
        'bold':require('./assets/fonts/Roboto-Bold.ttf'),
        'bold-italic':require('./assets/fonts/Roboto-BoldItalic.ttf')

      }),
    ]);
  }

componentWillMount= async ()=>{
  await this.loadResourcesAsync();
  this.setState({isReady:true})

    deviceStorage.getJWT().then(res=>{
    configAxios(res);
    if(res){
      deviceStorage.getItem('id').then(id=>{
        axios.get(`users/${id}`).then((value)=>{

        })
      })
    }
  })

}
componentDidMount= async ()=>{
  let token = await deviceStorage.getJWT();
  if(token){
      configAxios(token);
    let id = await deviceStorage.getItem("id");

    axios.get(`/users/${id}`).then(value=>{
        
           
          this.setState({
            gender:value.data.user.gender,
            userName:value.data.user.name,
            level2:value.data.user.level1?false:true,
            level3:value.data.user.level2?false:true,
            level4:value.data.user.level3?false:true,
            level5:value.data.user.level4?false:true,
            level6:value.data.user.level5?false:true,
            level7:value.data.user.level6?false:true,
            level8:value.data.user.level7?false:true,
            level9:value.data.user.level8?false:true,
            level10:value.data.user.level9?false:true,
            level11:value.data.user.level10?false:true,
            level12:value.data.user.level11?false:true,
            record:value.data.user.record,
            kilogram:value.data.user.kg
          });
          
           
       })
       .catch((error)=>{
        console.log("Error geting levels in app.js" + error);
       })
  }
}
state ={
  isReady:false,
    kilogram:"",
    gender:'',
    userName:"",
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
    caloriesRender:'',
    PushUpsCalories:0,
    series:[[4,5,5,4],[8,9,9,8],[12,12,14,14],[15,15,17,15],[19,19,22,20],[22,22,24,24],[25,25,29,29],[33,33,35,35],[40,40,40,40],[43,43,46,46],[47,47,49,49],[50,50,50,50],[60,60,60,60]],
    setGender:(gender)=>{
       this.setState({gender});
    },
    setKilogram : (kilogram)=>{
       this.setState({kilogram})
    },
    setUsername:(value)=>{
      this.setState({userName:value});
    },
    setCaloriesRender:(value)=>{
      this.setState({
        caloriesRender:value,
      });
    },
    setRecord:(val)=>{
      this.setState({
        record:val
      })
    },
    setPushUps:(val)=>{
      this.setState({PushUpsCalories:val});
    },
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

  if(!this.state.isReady){
    return <AppLoading />
  }

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
      require('./assets/images/HomeBack.png'),
      require('./assets/videos/GifVideo.mp4'),
      require('./assets/images/icon.png'),



    ]),
    Font.loadAsync({
      ...Ionicons.font,
      'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
      'regular': require('./assets/fonts/Roboto-Regular.ttf')
    }),
    

  ]);
}

function handleLoadingError(error) {
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
