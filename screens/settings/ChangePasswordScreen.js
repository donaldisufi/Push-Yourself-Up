import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
  AsyncStorage,
  StatusBar,
  Platform,
  ImageBackground

} from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-navigation';
import DataContext from '../../components/DataContext';
import ButtonHome from '../../components/ButtonHome';
import axios from 'axios';
import Input from '../../components/Input';
import deviceStorage from '../../components/service/deviceStorage';
export default class ChangePasswordScreen extends React.Component{
    static navigationOptions = {
        headerTransparent: true,
        title:"Change Password ",
       headerTintColor:'white',

        headerTitleStyle:{
            fontSize:25,
            color:'white'
           },
       
           headerStyle: {
            elevation: 0,
            shadowOpacity: 0,
            backgroundColor: 'transparent',
            zIndex: 100,
            elevation: 0,
            shadowOpacity: 0,
            borderBottomWidth: 0
    
          }
    }
    constructor(props){
        super(props);
        this.state = {
            OldPassword:"",
            NewPassword:"",
            loading:false,
            oldError:false,
            newError:false,
        }
    }
    render(){
        return(
         <DataContext.Consumer>{(data)=>(
           <TouchableWithoutFeedback onPress={()=>{Keyboard.dismiss()}}>
             <SafeAreaView style={style.container}>
                <ImageBackground source={data.gender==="Female"?require('../../assets/images/SettGirl.png'):require('../../assets/images/FittnesBack.png')} style={{ paddingTop: Platform.OS === 'ios' ? 60 : 80,}}>  
                    <View style={style.header}>
                        
                    </View>
                 </ImageBackground>
            <KeyboardAvoidingView behavior={"height"} style={{height:'70%',width:'100%'}}  enabled>
                <View style={style.posht}>

                      
                        <Input 
                            name={Platform.OS==='ios'?'ios-lock':'md-lock'}
                            styleView={{width:'100%'}}
                            placeholder="New Password"
                            value={this.state.NewPassword}
                            onChangeText={(NewPassword)=>{this.setState({NewPassword,newError:false})}}
                            secure={true}
                            
                            />
                         <Text style={{color:'red'}}>
                             {this.state.newError?"Please fill out all fields":null}
                         </Text>
                         <ButtonHome 
                           title="Done"
                           style={{borderRadius:7,backgroundColor:'black',height:50,width:'100%'}}
                           load={this.state.loading}
                           onPress={async ()=>{
                               this.setState({loading:true});
                              
                               if(this.state.NewPassword <1){
                                   this.setState({
                                       
                                       newError:this.state.NewPassword.length<1?true:false,
                                       loading:false,
                                    });
                                } else if(this.state.NewPassword.length <6){
                                    alert("Password must be at least 6 chars long!");
                                    this.setState({
                                        loading:false,
                                    });
                               
                                } else {
                                    let id = await deviceStorage.getItem('id');
                                    axios.put(`users/password/${id}`,{
                                        password : this.state.NewPassword
                                    }).then(success=>{
                                         
                                            alert("Password Changed successfully");
                                            console.log("Tdhanat Password",success);
                                            this.setState({loading:false});
                                            this.props.navigation.navigate('Settings');
                                      
                                       
                                    }).catch(error=>{
                                        this.setState({loading:false})
                                        
                                        alert("Something went wrong");
                                        console.log(error);
                                    })
                                }
                                
                            }}
                            />
                </View>
              </KeyboardAvoidingView>
            </SafeAreaView>
          </TouchableWithoutFeedback>
      )}</DataContext.Consumer>
        );
    }
}

const style = StyleSheet.create({
    container : {
        flex:1,
      
    },
    header : {
        height:'30%',
        width:'100%'
    },
    posht :{
        height:"100%",
        width:'100%',
        paddingTop:20,
        padding:15
    }
})
