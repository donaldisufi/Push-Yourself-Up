import React from 'react';
import { View, StyleSheet,Text,Button } from 'react-native';

export default class LinksScreen extends React.Component{
  
render(){

  return (
    <View style={styles.container}>
     <Button 
       onPress={()=>{this.props.navigation.navigate('Login')}}
       title="login"
       />
     <Button
       onPress={()=>{this.props.navigation.navigate('SignUp')}}     
       title="Signup"
       />

  </View>
  );
}
}

LinksScreen.navigationOptions = {
  title: 'Welcome',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent:'center',
    alignItems:'center',
  },
});
