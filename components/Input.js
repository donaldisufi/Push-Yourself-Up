import React from 'react';
import { 
    TextInput,
    StyleSheet,
    View,
} from 'react-native';

import {Ionicons} from '@expo/vector-icons';
import Colors from '../constants/Colors';

export default class Input extends React.Component{
    render(){
        return(
            <View style={[style.view,this.props.styleView]}>
                <View style={{height:55,justifyContent:'center',alignItems:'flex-start',width:'12%',padding:3}}>
                  <Ionicons 
                    name={this.props.name}
                    size={20}
                    color="black"
                     
                    />
                </View>
                <TextInput 
                    placeholderTextColor="#C0C0C0"
                    secureTextEntry={this.props.secure}
                    placeholder={this.props.placeholder}
                    value={this.props.value}
                    onChangeText={this.props.onChangeText}
                    style={[style.conatiner,this.props.style]}     
                    keyboardType={this.props.keyboard}      
                />
            </View>
        );
    }
}
const style = StyleSheet.create({
    conatiner:{
        height:55,
        justifyContent:'center',
        alignItems:'center',
        width:'87%',
    

    },
    view:{
        height:55,
        flexDirection:'row',
        justifyContent:'center',
        borderBottomColor:'#8e8e8e',
        borderBottomWidth:1,
        
        

    }
})