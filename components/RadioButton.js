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
               <View style={style.viewLeft}>
                <Text>
                    {this.props.gender}
                </Text>
               </View>
               <View style={style.viewRight}>
                    <View style={{height:34,width:34,borderRadius:17,borderColor:'#AFAEAE',borderWidth:1,justifyContent:'center',alignItems:'center'}}>
                      {this.props.checked?<View style={{height:30,width:30,borderColor:'#FEFEFE',borderWidth:2,borderRadius:15,backgroundColor:"#2EA0D1"}} />
                      :<View style={{height:30,width:30,borderRadius:15,borderWidth:2,borderColor:'white'}} />}
                    </View>
               </View>
              </TouchableOpacity>
        );
    }
}
const style  = StyleSheet.create({
    container:{
     height:60,
     flexDirection:'row',
     justifyContent:'center',
     alignItems:'center',
    //  borderBottomColor:'#2EA0D1',
    //  borderBottomWidth:2,
    //  borderRadius:4
    
    },
     viewLeft:{
       width:'75%',
       justifyContent:'flex-start',
       alignItems:'flex-start',
       padding:10,
     },
     viewRight:{
       width:'25%',
       justifyContent:'center',
       alignItems:'center'
     }
})