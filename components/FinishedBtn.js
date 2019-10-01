import React from 'react';
import {
    TouchableOpacity,
    Text,
    StyleSheet
} from 'react-native';
import Colors from '../constants/Colors';


export default class FinishedBtn extends React.Component{
    render(){
        return(<TouchableOpacity style={[style.container,this.props.style]} onPress={this.props.onPress}>
            <Text style={[{color:'white',fontSize:30,fontFamily:'regular'},this.props.styleText]}>
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
        borderWidth:2,
        borderColor:'white',
        backgroundColor:'transparent'
        


    }
})