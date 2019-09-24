      import React,{Component} from 'react'
      import{View,StyleSheet,Text,Button,ScrollView,Image}from 'react-native'
      import { Ionicons } from '@expo/vector-icons';

      export default class Advices extends Component{
        static navigationOptions ={
        
          title:'Advices'
        
        }
          render(){
            return(
        <ScrollView>
        <View style={styles.container}>
        <Image style={{width:200,height:160,marginTop:25,marginBottom:-35,borderRadius:20}}
       
        source={require('../assets/images/Pushup.jpg')} />

          <View style={{height:100,marginTop:50,width:-1,borderRadius:20,backgroundColor:'white',marginRight:7,marginLeft:7}}>
                <Text style={{fontSize:19,marginLeft:9,marginTop:8}}>
                <Ionicons name="md-fitness" size={30} />
                If you have eaten well, then the exercises are done after 30 minutes .
                </Text>
          </View>
              


          <View style={{height:100,marginTop:50,width:-1,borderRadius:20,backgroundColor:'white',marginRight:7,marginLeft:7}}>
                <Text style={{fontSize:19,marginLeft:9,marginTop:8}}>
                <Ionicons name="md-clock" size={30} />
                If this is your first time doing only 2 series . </Text>
          </View>
        

        <View style={{height:100,marginTop:50,width:-1,borderRadius:20,backgroundColor:'white',marginRight:7,marginLeft:7}}>
              <Text style={{fontSize:19,marginLeft:9,marginTop:8}}>
              <Ionicons name="md-body" size={30} />
              Bend your body down and your hands should be straight with your shoulders
              </Text>
        </View>
        

        <View style={{height:100,marginTop:50,width:-1,borderRadius:20,backgroundColor:'white',marginRight:7,marginLeft:7}}>
              <Text style={{fontSize:19,marginLeft:9,marginTop:2}}>
              <Ionicons name="md-stats" size={30} />
              Salmon is a great choice for muscle building and overall health. Each 3-ounce (85-gram) serving of salmon contains about 17 grams of protein .
            </Text>
         </View>

       
</View>

 </ScrollView>
        )
       }
     }
     const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent:'center',
        alignItems:'center',
       backgroundColor:'#2EA0D1'
      },
      
    });
    