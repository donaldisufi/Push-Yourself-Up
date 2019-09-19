import React from 'react';
import { View, StyleSheet,Text } from 'react-native';
import ButtonHome from '../components/ButtonHome';

export default class LinksScreen extends React.Component{
  
render(){

  return (
    <View style={styles.container}>
   
    <ButtonHome 
      onPress={()=>{this.props.navigation.navigate('SignUp')}}
      title="Sign Up"    
      style={{marginBottom:10}}
    />
    <ButtonHome 
      title="Home"
      onPress={()=>{this.props.navigation.navigate('Main')}}
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
