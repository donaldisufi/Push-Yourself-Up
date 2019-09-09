import React from 'react';
import {
  View,
  Text,
  Dimensions,
  AsyncStorage,
  StyleSheet
} from 'react-native';

export default class LoginScreen extends React.Component{
  constructor(props){
    super(props);
    this.state={
      email:'',
      password:''
    }
  }
  render(){
    return(
      <View style={style.container}>
        <Text>
          Login
        </Text>
      </View>
    );
  }
}
const style = StyleSheet.create({
  container:{
    justifyContent:'center',
    alignItems:'center',
    flex:1
  }
})