import React from 'react';
import { 
   View,
   StatusBar,
   StyleSheet,
   TouchableWithoutFeedback,
   Text,
   Platform,
   ImageBackground,
   AsyncStorage,
   SafeAreaView,
   KeyboardAvoidingView,
   Keyboard
} from 'react-native';

export default class EditKgScreen extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            kg:null,
            loading:false,
        }
    }
    render(){
        return(
            <TouchableWithoutFeedback onPress={()=>{Keyboard.dismiss()}}>

            </TouchableWithoutFeedback>
        )
    }
}