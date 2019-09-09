import React from 'react';
import {
    View,
    ActivityIndicator
} from 'react-native';

export default class AuthloadingScreen extends React.Component{
    constructor(props){
        super(props);
       this.loadApp();
    }
    loadApp=()=>{
        setTimeout(()=>{
         this.props.navigation.navigate('Main');
        },0);
    }
    render(){
        return(
            <View>
                <ActivityIndicator />
            </View>
        )
    }
}