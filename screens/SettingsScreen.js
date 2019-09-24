import React from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';
import ButtonHome from '../components/ButtonHome';
import deviceStorage from '../components/service/deviceStorage';

export default class SettingsScreen extends React.Component{
    render(){
        return(
            <View style={style.container}>
               <ButtonHome 
                 title="Log out"
                
                 onPress={()=>{
                     deviceStorage.removeItem('@token').then(res=>{
                     this.props.navigation.navigate('Register');
                     });
                    }}
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