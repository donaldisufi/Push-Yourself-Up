import React from 'react';
import {
    View,
    AsyncStorage,
    Dimensions,
    StyleSheet,
    Text,
    Image,
    KeyboardAvoidingView,
    Keyboard,
    TouchableWithoutFeedback   

} from 'react-native';
import Input from '../components/Input';
import RadioButton from '../components/RadioButton';
import ButtonHome from '../components/ButtonHome';
import axios from 'axios';
import DataContext from '../components/DataContext';
import deviceStorage from '../components/service/deviceStorage';
import configAxios from '../components/service/configAxios';

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
            password:'',
            checked:'Male',
            errorName:false,
            errorKg:false,
            errorPassword:false,
            loadPost:false,
        }
    }
   
    render(){
        const {checked} = this.state;
        return(
            <TouchableWithoutFeedback onPress={()=>{Keyboard.dismiss()}}>
             <View style={style.container}>
                
                    <View style={style.nalt}>
                        <Image 
                        source={require('../assets/images/pushupMan.jpg')}
                        style={{height:'80%',width:'80%'}}
                        />
                    </View>
                    <KeyboardAvoidingView behavior="padding" enabled>
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
                        placeholder="Password"
                        value={this.state.password}
                        onChangeText={(password)=>{this.setState({password,errorPassword:false})}}
                        secure={true}
                        />
                        <Text style={{color:'red'}}>{this.state.errorPassword?"Please fill out the fields !":null}</Text>
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
                        <DataContext.Consumer>{(data)=>(
                            <ButtonHome
                                    title="Continue"
                                    load={this.state.loadPost}
                                    onPress={()=>{
                                        Keyboard.dismiss();
                                    if(this.state.name.length>=1 && this.state.kilogram.length >=1 && this.state.password.length >=1){
                                        this.setState({loadPost:true})
                                        axios({
                                            url:"/signup",
                                            method:'post',
                                            data:{
                                                    name:this.state.name,
                                                    gender:this.state.checked,
                                                    kg:this.state.kilogram,    
                                                    password:this.state.password   
                                                }
                                        }).then( response =>{
                                                let token = response.data.token;
                                                configAxios(token);
                                                deviceStorage.setItem('@token',token);
                                                deviceStorage.setItem("id",response.data.createdUser._id);  
                                                deviceStorage.setItem("username",this.state.username);
                                                deviceStorage.setItem("password",this.state.password);
                                                this.setState({loadPost:false});
                                                this.props.navigation.navigate('Main');

                                            }).catch( error=>{
                                               console.log(this.state.password);
                                                console.log(JSON.stringify(error.response.data))
                                                console.log(JSON.stringify(error.response.data.error))

                                                alert(JSON.stringify(error.response.data));
                                                this.setState({loadPost:false});

                                            });
                                        } else {
                                            if(this.state.name.length<1){
                                                this.setState({errorName:true});
                                            }
                                            if(this.state.kilogram.length<1){
                                                this.setState({errorKg:true})
                                            }
                                            if(this.state.password.length<1){
                                                this.setState({errorPassword:true})
                                            }
                                        }
                                        
                                    }}
                                    style={{marginBottom:10,width:width*0.8}}
                            />
                        )}</DataContext.Consumer>
                    </View>
                </KeyboardAvoidingView>
             </View>
          </TouchableWithoutFeedback>
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
      height:height*0.30,
      justifyContent:'center',
      alignItems:'center',
      paddingTop:20,


    },
    posht :{
        width:width,
        height:height*0.70,
        justifyContent:'center',
        alignItems:'center',  
 
    }
})