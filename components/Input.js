import React from 'react';
import { 
    TextInput,
    StyleSheet
} from 'react-native';

export default class Input extends React.Component{
    render(){
        return(
            <TextInput 
              secureTextEntry={this.props.secure}
              placeholder={this.props.placeholder}
              value={this.props.value}
              onChangeText={this.props.onChangeText}
              style={[style.conatiner,this.props.style]}     
              keyboardType={this.props.keyboard}      
            />
        );
    }
}
const style = StyleSheet.create({
    conatiner:{
        height:50,
        justifyContent:'center',
        borderBottomColor:'#2EA0D1',
        borderBottomWidth:2,
        borderRadius:5,
        padding:10

    }
})