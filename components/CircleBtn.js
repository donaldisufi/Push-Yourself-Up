import React from 'react';
import {
    TouchableOpacity,
    Text,
    StyleSheet,
    Dimensions
} from 'react-native';
import { whileStatement } from '@babel/types';
import Colors from '../constants/Colors';

let {height,width} = Dimensions.get('window');

export default class CircleBtn extends React.Component{
    render(){
       return(
           <TouchableOpacity disabled={this.props.disabled} onPress={this.props.onPress} style={[style.container,this.props.style]}>
              {this.props.number? <Text style={style.text}>
                {this.props.number}
               </Text>:this.props.children}
           </TouchableOpacity>
       )
    }
}

const style = StyleSheet.create({
    container:{
        width:200,
        height:200,
        borderRadius:100,
        backgroundColor:'white',
        borderColor:Colors.tabIconDefault,
        borderWidth:6,
        justifyContent:'center',
        alignItems:'center'
    },
    text:{
        color:Colors.black,
        fontSize:50,
        fontFamily:'bold'

    }
})