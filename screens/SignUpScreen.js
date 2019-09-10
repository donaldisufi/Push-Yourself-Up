import React from 'react';
import {
    View,
    AsyncStorage,
    Dimensions,
    StyleSheet,
    Text,
    Image,
    KeyboardAvoidingView
    
} from 'react-native';
import Input from '../components/Input';
import RadioButton from '../components/RadioButton';
import ButtonHome from '../components/ButtonHome';


let {height,width}  = Dimensions.get('window');

export default class SignUpScreen extends React.Component{
   static navigationOptions={
       header:null
   }
    constructor(props){
        super(props);
        this.state={
            name:'',
            kilogram:'',
            confirmPassword:'',
            checked:'Male',
            errorName:false,
            errorKg:false
        }
    }
    render(){
        const {checked} = this.state;
        return(
            <View style={style.container}>
                <KeyboardAvoidingView behavior="padding" enabled>
                    <View style={style.nalt}>
                    <Image 
                    source={require('../assets/images/pushupMan.jpg')}
                    style={{height:'80%',width:'80%'}}
                    />
                    </View>
                    <View style={style.posht}>
                    <Input
                        style={{width:width*0.83,marginBottom:10}}
                        placeholder="Name"
                        value={this.state.name}
                        onChangeText={(name)=>{this.setState({name,errorName:false})}}
                    />
                    <Text style={{color:'red'}}>{this.state.errorName?"Please fill out the fields !":null}</Text>
                    <Input
                        style={{width:width*0.83,marginBottom:10}}
                        placeholder="Kilogram"
                        keyboard="numeric"
                        value={this.state.kilogram}
                        onChangeText={(kilogram)=>{this.setState({kilogram,errorKg:false}) }}
                    />
                    <Text style={{color:'red'}}>{this.state.errorKg?"Please fill out the fields !":null}</Text>

                    <RadioButton 
                        gender="Male" 
                        checked={checked==='Male'?true:false}          
                        style={{width:width*0.83,marginBottom:5}}      
                        onPress={()=>{this.setState({checked:'Male'})}}
                    />
                    <RadioButton 
                        gender="Female"
                        checked={checked==='Female'?true:false}
                        style={{width:width*0.83,marginBottom:5}}      
                        onPress={()=>{this.setState({checked:'Female'})}}
                    
                    />
                    <ButtonHome
                            title="Continue"
                            onPress={()=>{

                               if(this.state.name.length>=1 && this.state.kilogram.length >=1){
                                this.props.navigation.navigate('Main')
                                } else {
                                    if(this.state.name.length<1){
                                        this.setState({errorName:true});
                                    }
                                    if(this.state.kilogram.length<1){
                                        this.setState({errorKg:true})
                                    }
                                }
                                
                               }}
                            style={{marginBottom:10,width:width*0.8}}
                    />
                    </View>
                </KeyboardAvoidingView>
            </View>
        );
    }
}
const style = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    nalt:{
        width:width,
      height:height*0.38,
      justifyContent:'center',
      alignItems:'center',
      paddingTop:20,


    },
    posht :{
        width:width,
        height:height*0.62,
        justifyContent:'center',
        alignItems:'center',  
 
    }
})