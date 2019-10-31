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
import ButtonHome from '../../components/ButtonHome';
import axios from 'axios';
import deviceStorage from '../../components/service/deviceStorage';
import DataContext from '../../components/DataContext';
import Input from '../../components/Input';
import NetInfo from '@react-native-community/netinfo';


export default class EditKgScreen extends React.Component{
    static navigationOptions = {
        headerTransparent: true,
        title:"Edit Kg ",
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
    componentDidMount=()=>{
        NetInfo.fetch().then(status=>{
            this.setState({conected:status.isConnected});
      
          });
    }
    constructor(props){
        super(props);
        this.state = {
            kg:"",
            loading:false,
            error:false,
            conected:false,
            message:""
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
                                    {data.kilogram} Kg
                            </Text>
                    </View>
               </ImageBackground>          
               <View style={style.posht}>
                       <Input 
                            name={Platform.OS==='ios'?'ios-card':'md-card'}
                            styleView={{width:'100%'}}
                            placeholder="Write your Kilograms"
                            value={this.state.kg}
                            onChangeText={(kg)=>{this.setState({kg,error:false})}}
                            keyboard="numeric"
                            
                            />
                         <Text style={{color:'red'}}>
                             {this.state.error?this.state.message:null}
                         </Text>
                         <ButtonHome 
                           title="Done"
                           style={{borderRadius:7,backgroundColor:'black',height:50,width:'100%'}}
                           load={this.state.loading}
                           onPress={()=>{
                               Keyboard.dismiss();
                               NetInfo.addEventListener(status=>{
                                this.setState({conected:status.isConnected});
                                });

                               if(!this.state.conected)
                               {
                                    
                                    this.setState({loadPost:false,error:true,message:"Please Check Your internet Connection!"});

                               }  else  if(this.state.kg.length <1){
                                   this.setState({
                                      error:true,
                                      loading:false,
                                      message:"Please Fill out the field!"
                                   })
                               } else if (this.state.kg < 19 || this.state.kg > 350  || this.state.kg.length <2){
                                   this.setState({loading:false,error:true,message:"Please Write your kg correctly"});
                               } else {
                                   
                                   deviceStorage.getItem("id").then(id=>{
                                     axios.put(`users/updateProfile/${id}`,{
                                        name:data.userName,
                                        kg:parseInt(this.state.kg)

                                     }).then(response=>{
                                         data.setKilogram(JSON.parse(response.config.data).kg);
                                     }).then(()=>{
                                         this.setState({
                                             loading:false
                                         });
                                        this.props.navigation.navigate("Settings");
                                         
                                     })
                                     .catch(error=>{
                                         console.log(error);
                                         alert("Something Went wrong");
                                     })
                                   });
                               }

                           }}
                         />
               </View>      
              </SafeAreaView>
            </TouchableWithoutFeedback>
             )}</DataContext.Consumer>
        )
    }
}

const style = StyleSheet.create({
    container : {
        flex:1,
    },
    header : {
        height:'30%',
        width:'100%',
        justifyContent:"center",
        alignItems:'center'
    },
    posht :{
        height:"100%",
        width:'100%',
        paddingTop:20,
        padding:15
    }
})