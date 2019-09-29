import React from 'react';
import {
   Dimensions,
    View,
    StyleSheet
} from 'react-native';

let {height,width} = Dimensions.get('window');
export default class ContainerSett extends React.Component{
    render(){
        return(
            <View style={[style.container,this.props.style]}>
              {
                  this.props.children
              }
            </View>
        );
    }
}
const style = StyleSheet.create({
    container:{
        height:'auto',
        width:width*0.9,
        flexDirection:'column',
        backgroundColor:'white',
        borderColor:'white',
        borderRadius:20,
        borderWidth:1,
    

    }
})