import React from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';
import ButtonHome from '../components/ButtonHome';

export default class SettingsScreen extends React.Component{
    render(){
        return(
            <View style={style.container}>
               <ButtonHome 
                 title="Log out"
                 onPress={()=>{this.props.navigation.navigate('Register')}}
               />
            </View>
        );
    }
}
const style = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})