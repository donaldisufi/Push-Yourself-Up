import React from 'react';
import {
    View,
    TouchableOpacity,
    StyleSheet,
    Text
} from 'react-native';

export default class RadioButton extends React.Component{
    render(){
        return(
              <TouchableOpacity  onPress={this.props.onPress} style={[style.container,this.props.style]}>
               <View style={style.viewRight}>
                    <View style={{height:30,width:30,borderRadius:15,borderColor:'#C0C0C0',borderWidth:1,justifyContent:'center',alignItems:'center'}}>
                      {this.props.checked?<View style={{height:26,width:26,borderColor:'#FEFEFE',borderWidth:2,borderRadius:13,backgroundColor:"black"}} />
                      :<View style={{height:26,width:26,borderRadius:13,borderWidth:2,borderColor:'white'}} />}
                    </View>
               </View>
               <View style={style.viewLeft}>
                <Text>
                    {this.props.gender}
                </Text>
               </View>
              </TouchableOpacity>
        );
    }
}
const style  = StyleSheet.create({
    container:{
     height:40,
     flexDirection:'row',
     justifyContent:'center',
     alignItems:'center',
    //  borderBottomColor:'#2EA0D1',
    //  borderBottomWidth:2,
    //  borderRadius:4
    
    },
     viewLeft:{
       width:'75%',
       justifyContent:'center',
       alignItems:'flex-start',
       padding:10,
     },
     viewRight:{
       width:'25%',
       justifyContent:'center',
       alignItems:'center'
     }
})