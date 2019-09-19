import React from 'react';
import {
    View,
    StyleSheet,
    Text,
    Image,
     
 } from 'react-native';
import DataContext from '../components/DataContext';

 export default class CaloriesScreen extends React.Component{
     constructor(props){
         super(props);
         this.state={
          calories:0,
          pushUps:0
         }
      }
      componentDidMount=()=>{
        console.log(this.props);
        const pushUps=this.props.navigation.state.params.number;
        let calories = pushUps*0.18;
        calories = calories.toFixed(2);
        this.setState({pushUps,calories});
      }
     render(){
         return(
           <DataContext.Consumer>{(data)=>(
             <View style={style.container}>
               <View style={style.nalt}>

               </View>
               <View style={style.mid}>
                   <Text style={style.UpperText}>
                     CALORIES BURNED
                   </Text>
                  <View style={style.rrethi}>
                      <Text style={style.number}>
                          {this.state.calories}
                      </Text>
                      <Text style={style.Text}>
                        kcal
                      </Text>
                  </View>
                  
               </View>
               <View style={style.posht}>
                  <View style={style.viewPush}>
                      <Text style={style.UpperText}>
                        PUSH UPS 
                      </Text>
                      <Text style={style.Text}>
                          {this.state.pushUps}
                      </Text>
                      
                  </View>
                  <View style={style.viewPushBottom}>

                  </View>
                  
               </View>
             </View>
             )}</DataContext.Consumer>
         );
     }
 }
 const style = StyleSheet.create({
   container:{
       flex:1,
       justifyContent:'center',
       alignItems:'center'
   },
   nalt:{
     height:'10%'
   },
   mid:{
     height:'50%',
     justifyContent:'center',
     alignItems:'center',
   },
   posht:{
     height:'40%'
   },
   rrethi : {
        height:200,
        width:200,
        justifyContent:'center',
        alignItems:'center',
        borderBottomWidth:15,
        borderBottomColor:'#2EA0D1',
        borderRightColor:'#2EA0D1',
        borderRightWidth:15,
        borderRadius:100,
        borderLeftWidth:15,
        borderTopWidth:15,
        borderTopColor:'#F0F8FF',
        borderLeftColor:'#F0F8FF'
        
   },
   number:{ 
       color:'black',
       fontWeight:'200',
       fontSize:35,
   },
   Text:{
       fontSize:20,
       fontWeight:'300',
       color:'black'
   },
   UpperText:{
       fontSize:30,
       fontWeight:'400',
       color:'#A9A9A9'
   },
   viewPush:{
       height:'25%',
       justifyContent:'center',
       alignItems:'center'
   },

   viewPushBottom:{
       height:'75%'
   }
 });