import React from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

export default class SettingsScreen extends React.Component{
    render(){
        return(
            <View>
                <Text>
                    Link
                </Text>
            </View>
        );
    }
}
const style = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})