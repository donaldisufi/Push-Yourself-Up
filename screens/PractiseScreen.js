import React,{Fragment} from 'react';
import {
    StyleSheet,
    View,
    Dimensions,
    Text,
    ImageBackground,
    Modal,
    Platform
} from 'react-native';

import CircleBtn from '../components/CircleBtn'
import FinishedBtn from '../components/FinishedBtn';
import { TextInput } from 'react-native-gesture-handler';
import DataContext from '../components/DataContext';
import SoundBtn from '../components/SoundBtn';
import { Audio } from 'expo-av';
import axios from 'axios';
import deviceStorage from '../components/service/deviceStorage';
import Colors from '../constants/Colors';


let {height,width} = Dimensions.get('window');

export default class PractiseScreen extends React.Component{
   static navigationOptions ={
    headerTransparent: true,
     title:"Train",
     headerTintColor:'white',
     headerTitleStyle:{
     fontSize:30,
     fontFamily:'bold',
     color:'white',
     
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
       this.state ={
           number:0,
           modalVisible:false,
           visible:false,
           default:0,
           buttonVisible:false,
           setgoalVisible:true,
           shouldPlay:true,
           disabled:false,
       };
       this.ismounted=false;
   }
   componentDidMount=()=>{
          this.ismounted=true;

    }
    componentWillMount =()=>{
      

    }
   componentWillUnmount=()=>{
       this.ismounted=false;
       this.setState({   number:0,
        modalVisible:false,
        visible:false,
        default:0,
        buttonVisible:false,
        setgoalVisible:true,
        shouldPlay:true,
        disabled:false,})
         
       }
    modalVisible=()=>{
        this.setState({modalVisible:true});
        setTimeout(()=>{
          this.setState({modalVisible:false,visible:false,default:0,setgoalVisible:true,number:0});

        },2500)
        
    }
    setRecord= async (data)=>{
      if(this.state.number>data.record){
          data.setRecord(this.state.number);
           let id = await deviceStorage.getItem('id');
          axios.put(`/users/record/${id}`,{
              record:this.state.number
          }).then((response)=>{
             console.log("Successfully updated REcord");
             console.log("Tdhanat e recordit");
             console.log(response);
             this.setState({
                number:0,
                modalVisible:false,
                visible:false,
                default:0,
                buttonVisible:false,
                setgoalVisible:true,
                shouldPlay:true,
                disabled:false,
            })
          }).catch((error)=>{
             console.log("error Updating record " ,error );
          })

          this.modalVisible();

      }else{
      data.setRecord(data.record);
      this.setState({
        number:0,
        modalVisible:false,
        visible:false,
        default:0,
        buttonVisible:false,
        setgoalVisible:true,
        shouldPlay:true,
        disabled:false,
    })
      }
    }
    playSound=async ()=>{
     
        const sound = new Audio.Sound();
        try {
         this.ismounted && await sound.loadAsync(require('../assets/sound/PushUpsSound.mp3'),{shouldPlay:this.state.shouldPlay});
          
        }catch(error) {
         console.log(error);
        }
     }
    render(){
        return(
            <ImageBackground source={require('../assets/images/TrainBack.png')} style={{flex:1, paddingTop: Platform.OS === 'ios' ? 60 : 80,}} >
                <DataContext.Consumer>
                    {(data)=>(
                <View style={style.container}>               
                    <Modal 
                        visible={this.state.modalVisible}
                        transparent={true}
                        animated={true}
                        animationType="fade"    
                    >
                        <View style={{justifyContent:'center',alignItems:'center',height:'100%',width:'100%'}}>
                            <ImageBackground style={{height:200,width:300,justifyContent:'center',alignItems:'center',borderRadius:5}} source={require('../assets/images/youdidit.jpg')}>
                                    <Text style={{fontSize:20}}>
                                    Congrat's. You broke the Record.
                                    </Text>
                            </ImageBackground>
                        </View>
                    </Modal>

                <View style={style.nalt}>
                    {/* Pjesa nalt  */}
                    <View style={style.gjysaNalt}>
                            <View style={style.record}>
                                <View style={{width:'0%'}} />
                                <View style={{width:'100%',height:'100%',justifyContent:'center',alignItems:'center',flexDirection:'row'}}>
                                    <Text style={{fontSize:33,justifyContent:'center',alignItems:'center',color:'white',fontFamily:'regular',marginRight:5}}>
                                        MY SCORE 
                                    </Text>
                                    <Text style={{fontSize:33,justifyContent:'center',alignItems:'center',color:'white',fontFamily:'bold'}}>
                                       :  {data.record}
                                    </Text>
                                </View>
                            </View> 
                            <View style={style.goal} > 
                                {this.state.setgoalVisible? 
                                <View style={{width:'25%',justifyContent:'center',alignItems:'center'}}>
                                 <FinishedBtn 
                                        styleText={{fontFamily:'bold',fontSize:30,color:'black'}}
                                        title="-"
                                        style={{width:60,borderRadius:5,backgroundColor:'white',borderColor:Colors.tabIconDefault,borderWidth:2}}
                                        onPress={()=>{this.setState({default:this.state.default===0?0:this.state.default-1}) }}/>
                                    </View>:<Fragment />}<View style={{justifyContent:'center',alignItems:'center',flexDirection:'row',width:'50%'}}>
                                   <Text style={{fontSize:30,fontFamily:'thin',color:'white'}}>Goal : </Text><TextInput keyboardType={'numeric'} style={{height:60,width:60,textAlign:'center',fontSize:35,color:'white',fontFamily:'bold',}} onChangeText={(e)=>{this.setState({default:e})}} value={this.state.default.toString()} /> 
                                 </View>
                                {this.state.setgoalVisible?<View style={{justifyContent:'center',alignItems:'center',width:'25%'}} >
                                    <FinishedBtn 
                                            title="+"
                                            styleText={{fontFamily:'bold',fontSize:30,color:'black'}}
                                            style={{width:60,borderRadius:5,backgroundColor:'white',borderColor:Colors.tabIconDefault,borderWidth:1}}
                                            onPress={()=>{this.setState({default:this.state.default+1})}}
                                    />
                                    </View>:<Fragment />}
                            </View>
                            <View style={style.audio}>
                                <View style={{width:'70%'}}></View>
                                <View style={{width:'30%',justifyContent:'center',alignItems:'center'}}>
                                    <SoundBtn 
                                    name={this.state.shouldPlay?'md-volume-high':'md-volume-off'}
                                    onPress={()=>{this.setState({shouldPlay:!this.state.shouldPlay})}}
                                    />
                                </View>
                            </View>
                    </View>
                        {/* Pjesa posht   */}
                        <View style={style.gjysaPosht} >
                            
                            <CircleBtn disabled={this.state.disabled} style={{}}
                                    onPress={()=>{
                                        
                                    this.state.shouldPlay && this.playSound();
                                        this.setState({number:this.state.number+1,default:this.state.default<=0?0:this.state.default-1,visible:true,setgoalVisible:false,disabled:true});
                                        setTimeout(()=>{
                                        this.setState({disabled:false})
                                        },1000)
                                }}>
                                <Text style={{fontSize:35,color:'black',fontWeight:'bold'}}>
                                    {this.state.number}

                                </Text>
                            </CircleBtn>
                        </View>
                
                </View>
                <View style={style.posht}>
                    {this.state.visible?
                        <FinishedBtn 
                            style={{width:width,marginBottom:5}}
                            title="Complete"
                            onPress={()=>{
                                this.setRecord(data);
                                
                                data.setPushUps(this.state.number);
                                this.props.navigation.navigate('Calories');
                            
                            }}
                        />:<Fragment />}
                </View>
                </View>)}
                </DataContext.Consumer>
            </ImageBackground>
        );
    }
}
const style = StyleSheet.create({
    container:{
        flex:1,
       
    },
    nalt:{
        height:'90%',
    
      
    },
    posht:{
        height:'12%',
        justifyContent:'center',
        alignItems:'center',
       

            
    },
    gjysaNalt:{
     height:'48%',
     borderWidth:1,
     borderColor:'red'

    },
    gjysaPosht:{
        height:'52%',
        justifyContent:'center',
        alignItems:'center',
        borderWidth:1,
        borderColor:'blue'
       

    },
    record:{
      height:'30%',
      flexDirection:'row'
    },
    goal:{
       height:'40%',
       flexDirection:'row',
       justifyContent:'center',
       alignItems:'center',
       width:'100%'
    },
    audio:{
     height:'30%',
     flexDirection:'row',
     width:'100%'
    }

})