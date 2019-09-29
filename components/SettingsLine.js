import React from 'react';
import {
 View,
 StyleSheet,
 Text,
 Platform

} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import Colors from '../constants/Colors';

export default class SettinsLine extends React.Component {
    render(){
        return(
            <View style={[style.container,this.props.style]}>
              <View style={style.left}>
                <Ionicons 
                        name={this.props.name}
                        size={30}
                        color={Colors.gray}
                        
                />
                
              </View>
              <View style={style.mid}>
                <Text style={{fontFamily:'bold'}}>{this.props.title}</Text> 
              </View>
              <View style={style.right}>
                  <Ionicons
                   name={Platform.OS==='ios'?'ios-arrow-dropright':'md-arrow-dropright'}
                   size={30}
                   color={"#D3D3D3"}
                  />
              </View>
              
            </View>
        );
    }

}
const style= StyleSheet.create({
        container:{
            height:70,
            width:'100%',
            flexDirection:'row',
         
        },
        left:{
          width:'20%',
          justifyContent:'center',
          alignItems:'center',
        },
        mid:{
            width:'65%',
          justifyContent:'center',
          alignItems:'flex-start',
        },
        right:{
            width:'15%',
         justifyContent:'center',
         alignItems:'center',
        }
})