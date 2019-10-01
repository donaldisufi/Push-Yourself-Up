import React,{Fragment} from 'react';
import {
  View,
  Text,
  Dimensions,
  AsyncStorage,
  StyleSheet,
  Image,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
  Platform,
  StatusBar
} from 'react-native';
import axios from 'axios';

let {height,width} = Dimensions.get('window');
import Input from '../components/Input';
import ButtonHome from '../components/ButtonHome';
import configAxios from '../components/service/configAxios';
import deviceStorage from '../components/service/deviceStorage';
import DataContext from '../components/DataContext';
import { SafeAreaView } from 'react-navigation';


export default class LoginScreen extends React.Component{
 static navigationOptions={
   header:null
 }
  constructor(props){
    super(props);
    this.state={
      name:'',
      password:'',
      errorName:false,
      errorPassword:false,
      loadPost:false
    }
  }
  render(){
    return(
      <DataContext.Consumer>{(data)=>(
        <TouchableWithoutFeedback onPress={()=>{Keyboard.dismiss()}} > 
           <SafeAreaView style={style.container} >
                 <KeyboardAvoidingView behavior="position" enabled style={{height:'90%',width:'100%'}}>
               <View style={style.nalt} >
                  {/* <Image 
                      source={require('../assets/images/pushupMan.jpg')}
                      style={{height:'80%',width:'80%'}}
                    /> */}
                  <Image style={{height:120,width:120,borderRadius:60}} source={require('../assets/images/welcome.jpg')} />
                  
                  <Text style={{fontFamily:'bold',fontSize:30,marginTop:20}}>
                    Welcome 
                  </Text>
               </View>
        
              <View style={style.posht}>
        
                <Input
                    name={Platform.OS==='ios'?'ios-contact':'md-contact'}
                    styleView={{width:'100%'}}
                    placeholder="Username"
                    value={this.state.name}
                    onChangeText={(name)=>{this.setState({name,errorName:false})}}
                    />
                    <Text style={{color:'red'}}>{this.state.errorName?"Please fill out all fields !":null}</Text>
                  <Input 
                    name={Platform.OS==='ios'?'ios-lock':'md-lock'}
                    
                    styleView={{width:'100%',marginBottom:10}}
                    placeholder="Password"
                    value={this.state.password}
                    onChangeText={(password)=>{this.setState({password,errorPassword:false})}}
                    secure={true}
                    
                    />
                    <Text style={{color:'red'}}>{this.state.errorPassword?"Please fill out all fields !":null}</Text>
                  <ButtonHome 
                          style={{marginBottom:10,borderRadius:7,backgroundColor:'black',height:50,width:'100%'}}
                          title="Login"
                          load={this.state.loadPost}
                          onPress={()=>{
                            Keyboard.dismiss();
                            this.setState({loadPost:true});
                             if(this.state.name.length<1 || this.state.password.length <1){
                              this.setState({
                                errorPassword:this.state.password.length<1?true:false,
                                errorName:this.state.name.length<1?true:false,loadPost:false
                              });
                              this.setState({loadPost:false});
                              
                             } else if(this.state.name.length<2){
                               alert("please write username correctly!");
                               this.setState({loadPost:false});

                             } else if (this.state.password.length<6){
                               alert("Password should be at least 6 chars!");
                               this.setState({loadPost:false});

                             } else {


                              axios({
                                url:'/login',
                                method:'post',
                                data:{
                                  name:this.state.name,
                                  password:this.state.password
                                }
                                
                              }).then(response=>{
                                
                                let token = response.data.useri.token;
                                configAxios(token);
                                deviceStorage.setItem('@token',token);
                                deviceStorage.setItem("id",response.data.useri.id);
                                deviceStorage.setItem("username",response.config.data.name);
                                deviceStorage.setItem("password",response.config.data.name);
                                data.setUsername(response.config.data.name);
                                data.setGender(response.config.data.gender);
                                axios.get(`/users/${response.data.useri.id}`).then((value)=>{
                                  
                                  
                                  data.setLevel(value.data.user.level1?false:true,2);
                                  data.setLevel(value.data.user.level2?false:true,3);
                                  data.setLevel(value.data.user.level3?false:true,4);
                                  data.setLevel(value.data.user.level4?false:true,5);
                                  data.setLevel(value.data.user.level5?false:true,6);
                                  data.setLevel(value.data.user.level6?false:true,7);
                                  data.setLevel(value.data.user.level7?false:true,8);
                                  data.setLevel(value.data.user.level8?false:true,9);
                                  data.setLevel(value.data.user.level9?false:true,10);
                                  data.setLevel(value.data.user.level10?false:true,11);
                                  data.setLevel(value.data.user.level11?false:true,12);
                                  data.setRecord(value.data.useri.record);
                                  
                                }).catch((error)=>{
                                  console.log("Error updating Data Context ", error);
                                });
                                
                                
                                this.setState({loadPost:false});
                                this.props.navigation.navigate('Main');
                           
                                
                              }).catch(error =>{
                                
                                console.log("Error "); 
                                alert(JSON.stringify(error.response.data.message));
                                this.setState({loadPost:false});
                              })
                             }
                           
                           
                           
                           
                           
                           
                          }}
                          />
                    
                    
               </View>
                 </KeyboardAvoidingView>
              <View style={style.bottom}>
                    <Text style={{justifyContent:'center',alignItems:'center',flexDirection:'row',fontSize:15,fontFamily:'regular',color:'black'}}onPress={()=>{
                        this.props.navigation.navigate('SignUp');
                    }}>
                    Don't have an account? <Text style={{fontFamily:'bold',color:'black'}}>Sign up!</Text>
                    </Text>
              </View>
         </SafeAreaView>
      </TouchableWithoutFeedback>
    )}</DataContext.Consumer>
    );
  }
}
const style = StyleSheet.create({
  container:{
     flex:1,
     justifyContent:'center',
     alignItems:'center',
     paddingTop:StatusBar.currentHeight,
    

 
  },
  nalt:{
   height:'50%',
   justifyContent:'center',
   alignItems:'center',
   width:'100%',

  },
  posht:{
   height:'50%',
    width:'100%',
    alignItems:'center',
    padding:12.5
  

  },
  bottom:{
     width:'100%',
     justifyContent:'center',
     alignItems:'center',
     height:'10%',
    

  }
});