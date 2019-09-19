import React from 'react';
import {
  View,
  Text,
  Dimensions,
  AsyncStorage,
  StyleSheet
} from 'react-native';
import axios from 'axios';

let {height,width} = Dimensions.get('window');
import Input from '../components/Input';
import ButtonHome from '../components/ButtonHome';
import configAxios from '../components/service/configAxios';
import deviceStorage from '../components/service/deviceStorage';


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
      <View style={style.container}>
         <View style={style.top}>

         </View>
         <View style={style.nalt}>
                <Image 
                    source={require('../assets/images/pushupMan.jpg')}
                    style={{height:'80%',width:'80%'}}
                 />
         </View>
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
             onChangeText={(password)=>{this.setState({password})}}
             secure={true}
             
           />
            <Text style={{color:'red'}}>{this.state.errorPassword?"Please fill out all fields !":null}</Text>
           <ButtonHome 
                  style={{marginBottom:10,width:width*0.8}}
                  title="Login"
                  load={this.state.loadPost}
                  onPress={()=>{
                    if(this.state.name.length>=1 && this.state.password.length >=1){
                      axios({
                        url:'/login',
                        method:'post',
                        data:{
                          name:this.state.name,
                          password:this.state.password
                        }

                      }).then(response=>{
                             let token = response.data.token;
                             configAxios(token);
                             deviceStorage.setItem('@token',token);
                             this.setState({loadPost:false});
                             this.props.navigation.navigate('Main');
                      }).catch(error =>{
                             let message = error.response.data;
                             
                        console.log(JSON.stringify(error.response.data));
                        alert(JSON.stringify(error.response.data.error));
                        this.setState({loadPost:false});
                      })
                    }else{
                      this.setState({errorPassword:this.state.password.length<1?true:false,errorName:this.state.name.length<1?true:false});
                    }
                  }}
           />
         </View>
      </View>
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
  },
  posht:{
    height:height*0.55,
  },
  top:{
    height:height*0.10
  }
})