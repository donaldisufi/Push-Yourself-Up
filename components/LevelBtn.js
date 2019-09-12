import React from 'react';
import {
    TouchableOpacity,
    Text,
    StyleSheet
} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import Colors from '../constants/Colors';


export default class LevelBtn extends React.Component{
    render(){
        return(
            <TouchableOpacity disabled={this.props.disabled} onPress={this.props.onPress} style={[style.container,{backgroundColor:this.props.disabled?'#847F7F':'#2EA0D1',borderColor:this.props.disabled?'#ACACAC':'#4FB2F4'}]}>
                {this.props.disabled?<Ionicons 
                 name="md-lock"
                 size={30}
                 color={Colors.tabIconDefault}
                 style={{justifyContent:'center',alignItems:'center'}}
                 >
                  
                 </Ionicons>
                :<Text style={style.text}>
                    {this.props.level}
                </Text>}
            </TouchableOpacity>
        )
    }
}
const style = StyleSheet.create({
    container:{
       height:60,
       width:60,
       justifyContent:'center',
       alignItems:'center',
       borderRadius:4,
       borderWidth:1
       
    },
    text:{
     color:'white',
     fontWeight:'bold',
     fontSize:19
    }
})