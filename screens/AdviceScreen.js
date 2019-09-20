import React,{Component} from 'react'
import{View,StyleSheet,Text,Button,ScrollView}from 'react-native'
import { Ionicons } from '@expo/vector-icons';

export default class Advices extends Component{
  static navigationOptions ={
   
    title:'Advices'
   
  }
    render(){
      return(
            
            <View style={styles.container}>
 
          <Text style={{fontSize:21,height:100,marginTop:-110, width:-1,marginLeft: '-0%'}}>
          <Ionicons name="md-fitness" size={30} />
          
             If you have eaten well, then the exercises are done after 30 minutes .
        

         </Text>
        
           
         <Text style={{fontSize:21,height:100, width:-1,marginLeft: '-0%'}}>
           <Ionicons name="md-clock" size={30} />
           If this is your first time doing only 2 series .


         </Text>

        
          <Text style={{fontSize:21,height:100, marginTop:-2,width:-1,marginLeft: '-0%'}}>
          <Ionicons name="md-body" size={30} />
          Bend your body down and your hands should be straight with your shoulders

         </Text>
      
        
         <Text style={{fontSize:21,height:100, width:-1,marginLeft: '-0%'}}>
          <Ionicons name="md-stats" size={30} />
          Salmon is a great choice for muscle building and overall health. Each 3-ounce (85-gram) serving of salmon contains about 17 grams of protein,
         approximately 2 grams of omega-3 fatty acids and several important B vitamins (5). 
        
         </Text>
       

 
                     </View>
                     
        )
       }
     }
 const styles = StyleSheet.create({
        container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'#2EA0D1'
        },
   
    


      


    })
    