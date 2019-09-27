import React from 'react';
import {
    TouchableHighlight,
    Text,
    StyleSheet
} from 'react-native';

export default class CaloriesBtn extends React.Component {
    render(){
        return(
            <TouchableHighlight onPress={this.props.onPress} style={[style.container,this.props.style]}>
                <Text style={style.text}>
                  {this.props.title}
                </Text>
            </TouchableHighlight>
        )
    }
}
const style = StyleSheet.create({
    container:{
        height:100,
        width:100,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#2EA0D1',
        borderRadius:50,
        borderColor:'#F0F8FF',
        borderWidth:5,

    },
    text :{
        color:'white',
        fontSize:20,
        fontWeight:'400',
    }
})