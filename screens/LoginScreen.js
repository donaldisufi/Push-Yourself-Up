import React from 'react';
import {
  View,
  Text,
  Dimensions,
  AsyncStorage,
  StyleSheet,
  Image,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback
} from 'react-native';
import axios from 'axios';

let {height,width} = Dimensions.get('window');
import Input from '../components/Input';
import ButtonHome from '../components/ButtonHome';
import configAxios from '../components/service/configAxios';
import deviceStorage from '../components/service/deviceStorage';
import DataContext from '../components/DataContext';


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
      <TouchableWithoutFeedback onPress={()=>{Keyboard.dismiss()}}>
      <View style={style.container}>
         <View style={style.top}>

         </View>
         <View style={style.nalt}>
                <Image 
                    source={require('../assets/images/pushupMan.jpg')}
                    style={{height:'80%',width:'80%'}}
                 />
         </View>
        <DataContext.Consumer>{(data)=>(
          <KeyboardAvoidingView behavior="padding" enabled>

          <View style={style.posht}>
          <Input
              style={{width:width*0.83,marginBottom:10}}
              placeholder="Username"
              value={this.state.name}
              onChangeText={(name)=>{this.setState({name,errorName:false})}}
                          />
              <Text style={{color:'red'}}>{this.state.errorName?"Please fill out all fields !":null}</Text>
            <Input 
              style={{width:width*0.83,marginBottom:10}}
              placeholder="Password"
              value={this.state.password}
              onChangeText={(password)=>{this.setState({password,errorPassword:false})}}
              secure={true}
              
            />
              <Text style={{color:'red'}}>{this.state.errorPassword?"Please fill out all fields !":null}</Text>
            <ButtonHome 
                    style={{marginBottom:10,width:width*0.8}}
                    title="Login"
                    load={this.state.loadPost}
                    onPress={()=>{
                      Keyboard.dismiss();
                      this.setState({loadPost:true});
                      if(this.state.name.length>=1 && this.state.password.length >=1){
                        axios({
                          url:'/login',
                          method:'post',
                          data:{
                            name:this.state.name,
                            password:this.state.password
                          }

                        }).then(response=>{
                              console.log("Tdhaanat Sukssess");
                              console.log(response);

                              let token = response.data.useri.token;
                              configAxios(token);
                              deviceStorage.setItem('@token',token);
                              deviceStorage.setItem("id",response.data.useri.id);
                              deviceStorage.setItem("username",response.config.data.name);
                              deviceStorage.setItem("password",response.config.data.name);
                              data.setUsername(response.config.data.name);
                              axios.get(`/users/${response.data.useri.id}`).then((value)=>{
                                  
                               console.log("Successfully Updated DataContext");
                               console.log(value);
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
                              console.log(token);
                              
                        }).catch(error =>{
                              
                              console.log("Error "); 
                              console.log(error.message);
                              console.log(error.data.message);
                              console.log(error.response);

                              alert(JSON.stringify(error.response.data));
                              this.setState({loadPost:false});
                        })
                      }else{
                        this.setState({errorPassword:this.state.password.length<1?true:false,errorName:this.state.name.length<1?true:false,loadPost:false});
                      }
                    }}
            />
          </View>
        </KeyboardAvoidingView>
      )}</DataContext.Consumer>
      </View>
      </TouchableWithoutFeedback>
    );
  }
}
const style = StyleSheet.create({
  container:{
    justifyContent:'center',
    alignItems:'center',
    flex:1
  },
  nalt:{
   height:height*0.35,
   justifyContent:'center',
   alignItems:'center',
   width:width
  },
  posht:{
    height:height*0.55,
  },
  top:{
    height:height*0.10
  }
})