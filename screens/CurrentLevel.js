import React from 'react';
import {
    View,
    StyleSheet,
    Text
 } from 'react-native';
import DataContext from '../'
import CircleBtn from '../components/CircleBtn';

 export default  class CurrentLevel extends React.Component{
    static navigationOptions={
        header:null
    }
    constructor(props){
         super(props);
     }
     render(){
       return(
           <View style={style.container}>
                  <View>

                  </View>
                  <View >
                    <CircleBtn>

                    </CircleBtn>
                  </View> 
           </View>
         );
     }
 }
 const style = StyleSheet.create({
     container:{
         justifyContent:'center',
         alignItems:'center',
         flex:1,
     },
     nalt:{
       height:'10%'
     },
     posht:{
      
     }
 })