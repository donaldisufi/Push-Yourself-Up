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
  StatusBar,
  
} from 'react-native';
import axios from 'axios';
import NetInfo from '@react-native-community/netinfo';

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
      loadPost:false,
      conected:false,
      nameMessage:"",
      passwordMessage:"",
      
    }
    this.mounted=false;
  }
  componentDidMount=()=>{
    this.mounted=true;
    NetInfo.fetch().then(status=>{
      console.log("Is conected ?" , status.isConnected );
      this.setState({conected:status.isConnected});

    });
  }
  componentWillUnmount=()=>{
    this.mounted = false;
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
                    <Text style={{color:'red'}}>{this.state.errorName?this.state.nameMessage:null}</Text>
                  <Input 
                    name={Platform.OS==='ios'?'ios-lock':'md-lock'}
                    
                    styleView={{width:'100%',marginBottom:10}}
                    placeholder="Password"
                    value={this.state.password}
                    onChangeText={(password)=>{this.setState({password,errorPassword:false})}}
                    secure={true}
                    
                    />
                    <Text style={{color:'red'}}>{this.state.errorPassword?this.state.passwordMessage:null}</Text>
                  <ButtonHome 
                          style={{marginBottom:10,borderRadius:7,backgroundColor:'black',height:50,width:'100%'}}
                          title="Login"
                          load={this.state.loadPost}
                          onPress={()=>{
                           
                            NetInfo.addEventListener(status=>{
                              console.log("Is connected?", status.isConnected);
                              this.setState({conected:status.isConnected});
                            })

                             Keyboard.dismiss();
                             this.setState({loadPost:true}); 
                             this.setState({
                               name:this.state.name.trim(),
                               password:this.state.name.trim()
                             },function(){
                             
                             if(!this.state.conected)
                             {
                                  alert("Please Check your internet connection");
                                  this.setState({loadPost:false,errorPassword:true,passwordMessage:"Please check your internet Connection!"})
                             }
                             else if(this.state.name.length<1 || this.state.password.length <1){
                              this.setState({
                                errorPassword:this.state.password.length<1?true:false,
                                errorName:this.state.name.length<1?true:false,loadPost:false,
                                nameMessage:"Please fill out the field ! ",
                                passwordMessage:"Please fill out the field !",
                                loadPost:false
                              });

                              
                             } else if(this.state.name.length<2){
                               this.setState({loadPost:false,errorName:true,nameMessage:"please write username correctly!"});

                             } else if (this.state.password.length<6){
                               this.setState({loadPost:false,errorPassword:true,passwordMessage:"Password should be at least 6 chars!"});

                             } else
                              {


                             axios({
                                url:'/login',
                                method:'POST',
                                data:{
                                  name:this.state.name,
                                  password:this.state.password
                                }
                                
                              }).then(response=>{
                                    console.log("Successfully",response);
                                    let token = response.data.useri.token;
                                    configAxios(token);
                                    deviceStorage.setItem('@token',token);
                                    deviceStorage.setItem("id",response.data.useri.id);
                                    this.setState({loadPost:false})
                                    
                                  
                                    axios.get(`/users/${response.data.useri.id}`).then(rezult=>{
                                      console.log("get tdhanat",rezult);

                                      data.setUsername(rezult.data.user.name);
                                      data.setGender(rezult.data.user.gender);
                                      data.setKilogram(rezult.data.user.kg); 
                                      data.setLevel(rezult.data.user.level1?false:true,2);
                                      data.setLevel(rezult.data.user.level2?false:true,3);
                                      data.setLevel(rezult.data.user.level3?false:true,4);
                                      data.setLevel(rezult.data.user.level4?false:true,5);
                                      data.setLevel(rezult.data.user.level5?false:true,6);
                                      data.setLevel(rezult.data.user.level6?false:true,7);
                                      data.setLevel(rezult.data.user.level7?false:true,8);
                                      data.setLevel(rezult.data.user.level8?false:true,9);
                                      data.setLevel(rezult.data.user.level9?false:true,10);
                                      data.setLevel(rezult.data.user.level10?false:true,11);
                                      data.setLevel(rezult.data.user.level11?false:true,12);
                                      data.setRecord(rezult.data.user.record);
                                      

                                    })
                                    .then(()=>{
                                      this.mounted &&this.setState({loadPost:false});
                                      this.props.navigation.navigate('Main');
                                    })
                                    .catch(err=>{
                                      console.log("Error Get" , err);
                                    })
                                
                                })
                                .catch(error =>{
                                  console.log(JSON.stringify(error))
                            
                                  this.mounted && this.setState({loadPost:false,errorPassword:true,passwordMessage:"Username or password is incorrect"});
                              })
                              }})
                           
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