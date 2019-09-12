import React from 'react';
import {
    TouchableOpacity,
    Text,
    StyleSheet,
    Dimensions
} from 'react-native';
import { whileStatement } from '@babel/types';

let {height,width} = Dimensions.get('window');

export default class CircleBtn extends React.Component{
    render(){
       return(
           <TouchableOpacity onPress={this.props.onPress} style={[style.container,this.props.style]}>
              {this.props.number? <Text style={style.text}>
                {this.props.number}
               </Text>:this.props.children}
           </TouchableOpacity>
       )
    }
}

const style = StyleSheet.create({
    container:{
        width:width*0.5,
        height:180,
        borderRadius:90,
        backgroundColor:'#2EA0D1',
        borderColor:'#2A7697',
        borderWidth:10,
        justifyContent:'center',
        alignItems:'center'
    },
    text:{
        color:'white',
        fontSize:50,

    }
})