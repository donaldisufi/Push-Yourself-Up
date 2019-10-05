import React from 'react';
import { 
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  AsyncStorage,
  Keyboard,
  StatusBar,
  ImageBackground
} from 'react-native';
import DataContext from '../../components/DataContext';
import Input from '../../components/Input';
import ButtonHome from '../../components/ButtonHome';
import axios from 'axios';

export default class EditName extends React.Component {
    static navigationOptions = {
        headerTransparent: true,
       headerTintColor:'white',

        title:"Edit Username",
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
        this.state={
            username:"",
            loading:false,
            error:false
        }
    }
    render(){
        return(
          <DataContext.Consumer>{(data)=>(
            <TouchableWithoutFeedback onPress={()=>{Keyboard.dismiss()}}>
              <SafeAreaView style={style.container}>
                <ImageBackground source={data.gender==="Female"?require('../../assets/images/SettGirl.png'):require('../../assets/images/FittnesBack.png')} style={{ paddingTop: Platform.OS === 'ios' ? 60 : 80,}}>                   
                    <View style={style.header}>
                          <Text style={{fontSize:40,fontFamily:'bold',color:'white',marginTop:30}}>
                            {data.userName}
                          </Text>
                    </View>
                 </ImageBackground>
                 <KeyboardAvoidingView behavior="padding" style={{height:'70%',width:'100%'}} enabled>
                    <View style={style.posht}>
                        <Input 
                            name={Platform.OS==='ios'?'ios-contact':'md-contact'}
                            styleView={{width:'100%'}}
                            placeholder="Username"
                            value={this.state.username}
                            onChangeText={(username)=>{this.setState({username})}}

                        />
                        <Text style={{color:'red'}}>
                            {this.state.error?"Please fill out the field!!":null}
                        </Text>
                        <ButtonHome 
                        title="Done"
                        style={{borderRadius:7,backgroundColor:'black',height:50,width:'100%'}}
                        load={this.state.loading}
                        onPress={()=>{
                            Keyboard.dismiss();
                            this.setState({loading:true});
                            if(this.state.username.length<1){
                                this.setState({error:true,loading:false});

                            } else if (this.state.username.length <2){
                                alert("Username must be at least 2 characters!");
                                this.setState({loading:false})
                            } else {
                                AsyncStorage.getItem("id").then(id=>{
                                    axios.put(`users/updateProfile/${id}`,{
                                        name:this.state.username,
                                        kg:data.kilogram

                                    }).then(res=>{
                                        console.log("Successfully updated profile");
                                        console.log(res);
                                        console.log(JSON.parse(res.config.data).name);

                                        data.setUsername(JSON.parse(res.config.data).name);
                                        console.log(data.userName);
                                        this.setState({loading:false})
                                        this.props.navigation.navigate("Settings");
                                        
                                    }).catch(error=>{
                                        this.setState({loading:false})
                                        console.log(JSON.stringify(error));
                                        alert("Something went wrong");
                                    })
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
    container:{
       flex:1,
     

    },
    header:{
       height:'30%',
       width:'100%',
       justifyContent:'center',
       alignItems:'center'
    },
    posht:{
       height:"100%",
       paddingTop:25,
       padding:15
    }
})