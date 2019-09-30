import React from 'react';
import {
    TouchableOpacity,
    StyleSheet
} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import Colors from '../constants/Colors';

export default class SoundBtn extends React.Component{
    render(){
        return(
            <TouchableOpacity onPress={this.props.onPress} style={style.container}>
              <Ionicons 
                 name={this.props.name}
                 size={30}
                 color={Colors.black}
              />
            </TouchableOpacity>
        );
    }
}
const style = StyleSheet.create({
    container:{
      justifyContent:'center',
      alignItems:'center',
      height:50,
      width:50,
      borderColor:Colors.tabIconDefault,
      borderWidth:2,
      borderRadius:25,
      backgroundColor:'white'
    }
})