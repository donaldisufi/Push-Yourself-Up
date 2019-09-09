import React from 'react';
import {
    View,
    AsyncStorage,
    Dimensions,
    StyleSheet,
    Text
} from 'react-native';

export default class SignUpScreen extends React.Component{
    constructor(props){
        super(props);
        this.state={
            name:'',
            email:'',
            password:'',
            confirmPassword:''
        }
    }
    render(){
        return(
            <View>
                <Text>
                    Sign up
                </Text>
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