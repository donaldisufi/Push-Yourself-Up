import React from 'react';
import {
    TouchableOpacity,
    Text,
    StyleSheet
} from 'react-native';


export default class FinishedBtn extends React.Component{
    render(){
        return(<TouchableOpacity style={[style.container,this.props.style]} onPress={this.props.onPress}>
            <Text style={{color:'white',fontSize:20}}>
                {this.props.title}
            </Text>
        </TouchableOpacity>)
    }
}
const style =StyleSheet.create({
    container:{
        height:60,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#2A7697'

    }
})