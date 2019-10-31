import React from 'react';
import {
    View,
    StyleSheet,
    Text,
    Image,
     
 } from 'react-native';
import DataContext from '../components/DataContext';
import ButtonHome from '../components/ButtonHome';
import CaloriesBtn from '../components/CaloriesBtn';

 export default class CaloriesScreen extends React.Component{
     constructor(props){
         super(props);
         this.state={
          calories:0,
          pushUps:0
         }
      }
  
     render(){
         return(
           <DataContext.Consumer>{(data)=>{
              const pushUps = data.PushUpsCalories;
              let calories = pushUps *0.18;
              calories = calories.toFixed(2);


            return <View style={style.container}>
               <View style={style.nalt}>

               </View>
               <View style={style.mid}>
                   <Text style={[style.UpperText,{marginBottom:20}]}>
                     CALORIES BURNED
                   </Text>
                  <View style={style.rrethi}>
                      <Text style={style.number}>
                          {calories}
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
                          {pushUps}
                      </Text>
                      
                  </View>
                  <View style={style.viewPushBottom}>
                    <CaloriesBtn 
                        title="Home"
                        onPress={()=>{
                          this.props.navigation.navigate('Home');
                        }}
                        style={{marginRight:10}}
                      />
                      
                      <CaloriesBtn 
                       title="Save"
                       onPress={()=>{
                         
                        this.props.navigation.navigate(data.caloriesRender==='Train'?'Train':'Practise');
                       }}
                       style={{marginLeft:10}}

                      />
                        

                    </View>
                  
               </View>
             </View>
           }}</DataContext.Consumer>
         );
     }
 }
 const style = StyleSheet.create({
   container:{
       flex:1,
       justifyContent:'center',
       alignItems:'center',
       backgroundColor:"black"
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
     height:'40%',
     width:'100%',
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
       color:'white',
       fontWeight:'200',
       fontSize:35,
   },
   Text:{
       fontSize:30,
       fontWeight:'300',
       color:'white'
   },
   UpperText:{
       fontSize:30,
       fontWeight:'400',
       color:'white',
       marginBottom:5
   },
   viewPush:{
       height:'25%',
       justifyContent:'center',
       alignItems:'center'
   },

   viewPushBottom:{
       height:'75%',
       width:'100%',
       flexDirection:'row',
       justifyContent:'center',
       alignItems:'center',
   }
 });