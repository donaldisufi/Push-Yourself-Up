import React from 'react';
import {
    View,
    ActivityIndicator,
    ImageBackground
} from 'react-native';
import deviceStorage from '../components/service/deviceStorage';


export default class AuthloadingScreen extends React.Component{
    constructor(props){
        super(props);
       this.loadApp();
    }
    loadApp=()=>{
        setTimeout(()=>{
          deviceStorage.getJWT().then(res=>{
              if(res){
                  this.props.navigation.navigate('Main');
                  
              }else{
                  this.props.navigation.navigate('Register');
              }
          })
        },1000);
    }
    render(){
        return(
            <ImageBackground style={{flex:1}} resizeMode="stretch" source={require('../assets/images/LogoApp.png')}>
               
            </ImageBackground>
        )
    }
}