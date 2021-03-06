import React from 'react';
import {
    TouchableOpacity,
    Text,
    StyleSheet,
    Dimensions,
    ActivityIndicator,
    Image
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import Colors from '../constants/Colors';

let {height,width} = Dimensions.get('window');

export default class ButtonHome extends React.Component{
    render(){
     return( <TouchableOpacity onPress={this.props.onPress} style={[style.container,this.props.style]}>
        {this.props.name?<Ionicons 
         name={this.props.name}
         size={35}
         color={Colors.tabIconDefault}
         style={{marginRight:10}}
        />:
        this.props.Image?
        <Image source={require('../assets/images/push-up.png')} style={{ height: 40, width: 40}} />
        :null
        }
        {this.props.load?<ActivityIndicator />:<Text style={[style.text,this.props.styleText]}>
            {this.props.title}
        </Text>}
    </TouchableOpacity>)
    }
}
const style = StyleSheet.create({
    container:{
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row',
        height:55,
        width:width*0.40,
        borderRadius:4,
        backgroundColor:'#2EA0D1',
        borderColor:'white',
        borderWidth:1
    },
    text:{
     fontSize:20,
     color:'white'
    }
})