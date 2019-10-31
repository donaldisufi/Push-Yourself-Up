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
    TouchableWithoutFeedback,
    SafeAreaView,
    StatusBar,
    Platform
} from 'react-native';
import Input from '../components/Input';
import RadioButton from '../components/RadioButton';
import ButtonHome from '../components/ButtonHome';
import axios from 'axios';
import DataContext from '../components/DataContext';
import deviceStorage from '../components/service/deviceStorage';
import configAxios from '../components/service/configAxios';
import NetInfo from '@react-native-community/netinfo';
 

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
            conected:false,
            nameMessage:"",
            kgMessage:"",
            passwordMessage:""


        };
        this.mounted=false;

    }
    componentDidMount=()=>{
        this.mounted=true;
        NetInfo.fetch().then(status=>{
          this.setState({conected:status.isConnected});
    
        });
    }
    componentWillUnmount=()=>{
          this.mounted=false;
    }
    render(){
        const {checked} = this.state;
        return(
          <DataContext.Consumer>{(data)=>(
            <TouchableWithoutFeedback onPress={()=>{Keyboard.dismiss()}}>
             <SafeAreaView style={style.container}>
                  <KeyboardAvoidingView behavior="position" enabled style={{height:'90%',width:'100%'}}>
                    <View style={style.nalt}>
                          
                        <Text style={{fontFamily:'bold',fontSize:25}}>
                            Sign Up to 
                        </Text>
                        <Text style={{fontFamily:'bold',fontSize:50,color:'#FFE4C4'}}>
                           Become a BEAST 
                        </Text>
                    </View>
                    <View style={style.posht}>
                        <Input
                           name={Platform.OS==='ios'?'ios-contact':'md-contact'}                            
                            styleView={{width:'100%'}}
                            placeholder="Name"
                            value={this.state.name}
                            onChangeText={(name)=>{this.setState({name,errorName:false})}}
                            />
                        <Text style={{color:'red'}}>{this.state.errorName?this.state.nameMessage:null}</Text>
                        <Input 
                            name={Platform.OS==='ios'?'ios-lock':'md-lock'}                            
                            styleView={{width:'100%'}}
                            placeholder="Password"
                            value={this.state.password}
                            onChangeText={(password)=>{this.setState({password,errorPassword:false})}}
                            secure={true}
                        />
                        <Text style={{color:'red'}}>{this.state.errorPassword?this.state.passwordMessage:null}</Text>
                        <Input
                            name={Platform.OS==='ios'?'ios-lock':'md-lock'}
                            styleView={{width:'100%',marginBottom:10}}
                            placeholder="Kilogram"
                            keyboard="numeric"
                            value={this.state.kilogram}
                            name={Platform.OS==='ios'?'ios-card':'md-card'}                            
                            onChangeText={(kilogram)=>{this.setState({kilogram,errorKg:false}) }}
                        />
                        <Text style={{color:'red'}}>{this.state.errorKg?this.state.kgMessage:null}</Text>
                          <View style={{height:50,flexDirection:'row',width:'100%',marginBottom:10}}>
                            <RadioButton 
                                gender="Male" 
                                checked={checked==='Male'?true:false}          
                                style={{width:'50%',marginBottom:5}}      
                                onPress={()=>{this.setState({checked:'Male'})}} 
                            />
                            <RadioButton 
                                gender="Female"
                                checked={checked==='Female'?true:false}
                                style={{width:'50%',marginBottom:5}}      
                                onPress={()=>{this.setState({checked:'Female'})}}
                            
                            />
                        </View>
                        
                            <ButtonHome
                                    title="Continue"
                                    load={this.state.loadPost}
                                    style={{marginBottom:10,borderRadius:7,backgroundColor:'black',height:50,width:'100%'}}                                    
                                    onPress={()=>{
                                        Keyboard.dismiss();
                                        this.setState({loadPost:true});
                                        this.setState({
                                            name:this.state.name.trim(),
                                            password:this.state.password.trim(),
                                        },function(){

                                      if(!this.state.conected)
                                       {
                                             alert("Please Check your internet connection");
                                             this.setState({loadPost:false})
                                       }
                                       else if(this.state.name.length < 1 || this.state.password <1  || this.state.kilogram < 1){
                                         this.setState({
                                             errorName:this.state.name.length<1?true:false,
                                             errorPassword:this.state.password.length<1?true:false,
                                             errorKg:this.state.kilogram.length<1?true:false,
                                             kgMessage:"Please fill out the fields!",
                                             passwordMessage:"Please fill out the fields!",
                                             nameMessage:"Please fill out the fields!",
                                             loadPost:false
                                            });

                                       } else if(this.state.name.length < 2){
                                          this.setState({loadPost:false,errorName:true,nameMessage:"Please write your name correctly!"});

                                        } else if (this.state.password.length<6){
                                            this.setState({loadPost:false,errorPassword:true,passwordMessage:"Password should be at least 6 characters!"});

                                        }
                                        else if (this.state.kilogram.length <2){

                                            this.setState({loadPost:false,kgMessage:"Please write your kilograms correctly!",errorKg:true});
                                        }
                                        else if (this.state.kilogram < 19 || this.state.kilogram > 350){
                                            this.setState({loadPost:false,kgMessage:"Please write your kilograms correctly!",errorKg:true});

                                        }else {
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
                                                        deviceStorage.setItem('@token',token);
                                                        deviceStorage.setItem("id",response.data.createdUser._id);  
                                                        deviceStorage.setItem("username",response.data.createdUser.name);
                                                        deviceStorage.setItem("password",response.data.createdUser.password);
                                                        deviceStorage.setItem("kg",response.data.createdUser.kg);
                                                        deviceStorage.setItem("gender",response.data.createdUser.gender);
                                                        configAxios(token);
                                                        data.setKilogram(response.data.createdUser.kg);
                                                        data.setGender(response.data.createdUser.gender);
                                                        data.setUsername(response.data.createdUser.name);
                                                        data.setLevel(false,1);
                                                        data.setLevel(true,2);
                                                        data.setLevel(true,3);
                                                        data.setLevel(true,4);
                                                        data.setLevel(true,5);
                                                        data.setLevel(true,6);
                                                        data.setLevel(true,7);
                                                        data.setLevel(true,8);
                                                        data.setLevel(true,9);
                                                        data.setLevel(true,10);
                                                        data.setLevel(true,11);
                                                        data.setLevel(true,12);
                                                        data.setRecord(0);
                                                        
                                                        

                                                    }).then(()=>{
                                                        this.setState({loadPost:false});
                                                        this.props.navigation.navigate('VideoGif');

                                                    })
                                                    .catch( error=>{

                                                        // console.log(JSON.stringify(error))
                                                        // console.log(JSON.stringify(error.response.data.error))

                                                        this.setState({loadPost:false,errorName:true,nameMessage:"This name is already taken"});

                                                    });
                                       
                                     }    
                                    });
                                    }}
                            />
                    </View>
                        </KeyboardAvoidingView>
                    <View style={style.bottom}>
                        <Text style={{justifyContent:'center',alignItems:'center',flexDirection:'row',fontSize:15,fontFamily:'regular',color:'black'}}onPress={()=>{
                            this.props.navigation.navigate('Login');
                        }}>
                        Already have account? <Text style={{fontFamily:'bold',color:'black'}}>Log in</Text>
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
      height:'40%',
      width:'100%',
      flexDirection:'column',
      justifyContent:'center',
      alignItems:'flex-start',
      padding:15
    
    


    },
    posht :{
        height:'60%',
        width:'100%',
        justifyContent:'center',
        alignItems:'center', 
        padding:15 
 
    },
    bottom:{
        width:'100%',
        justifyContent:'center',
        alignItems:'center',
        height:'10%',
       
   
     }
})