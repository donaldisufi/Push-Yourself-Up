import React,{Component} from 'react'
import{View,StyleSheet,Text,TouchableOpacity,ScrollView}from 'react-native'

export default class Advices extends Component{
  static navigationOptions ={
    title:'Advices'
   
  }
    render(){
      return(
            
            <View style={styles.container}>
            

         
          <Text style={{fontSize:30, marginBottom:20, marginTop: '-100%',marginLeft: '-30%'}}>
          1) How to train 
         </Text>
        
        
        <Text style={{fontSize:30, marginBottom:20, marginTop: '-20%',marginLeft: '20%'}}>
        
          </Text>

         
       
      
        <Text style={{fontSize:30, marginBottom:20, marginTop: '-20%',marginLeft: '20%'}}>
       
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
    