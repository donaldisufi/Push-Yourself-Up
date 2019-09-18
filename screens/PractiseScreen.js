import React,{Fragment} from 'react';
import {
    StyleSheet,
    View,
    Dimensions,
    Text,
    ImageBackground,
    Modal,
    
} from 'react-native';

import CircleBtn from '../components/CircleBtn'
import FinishedBtn from '../components/FinishedBtn';
import { TextInput } from 'react-native-gesture-handler';
import DataContext from '../components/DataContext';
import SoundBtn from '../components/SoundBtn';
import { Audio } from 'expo-av';

//import  {Proximity}  from  'react-native-proximity';
   

let {height,width} = Dimensions.get('window');

export default class PractiseScreen extends React.Component{
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
//        Proximity.addListener(this._proximityListener);
    }
   componentWillUnmount=()=>{
       this.ismounted=false;
//      Proximity.removeListener(this._proximityListener);
     }
//    _proximityListener=(data)=>{
//      console.log(data);
//    }
    // modal=(modalVisible)=>{
    //   this.setState({modalVisible});
    // }
    
    modalVisible=()=>{
        this.setState({modalVisible:!this.state.modalVisible});
        setTimeout(()=>{
          this.setState({modalVisible:!this.state.modalVisible,visible:false,default:0,setgoalVisible:true,number:0});

        },1500)
        
    }
    setRecord=(data)=>{
      if(this.state.number>data.record){
          data.setRecord(this.state.number);
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
                                    Yes. You Did it , Go ahead.
                                </Text>
                        </ImageBackground>
                    </View>
                </Modal>

               <View style={style.nalt}>
                   {/* Pjesa nalt  */}
                   <View style={style.gjysaNalt}>
                        <View style={style.record}>
                            <View style={{width:'60%'}}>

                            </View>
                            <View style={{width:'40%',height:'100%',justifyContent:'center',alignItems:'center'}}>
                            <Text style={{fontSize:18,justifyContent:'center',alignItems:'center'}}>
                                Your Record :{data.record}
                            </Text>
                            </View>
                        </View> 
                        <View style={style.goal} > 
                            {this.state.setgoalVisible? 
                            <FinishedBtn 
                                    title="-"
                                    style={{width:60,borderRadius:5,marginRight:50}}
                                    onPress={()=>{this.setState({default:this.state.default===0?0:this.state.default-1})}}
                                />:<Fragment />}
                            <Text style={{fontSize:20}}>Goal : </Text><TextInput keyboardType={'numeric'} style={{height:60,width:60,textAlign:'center',fontSize:22}} onChangeText={(e)=>{this.setState({default:e})}} value={this.state.default.toString()} /> 
                            {this.state.setgoalVisible?  <FinishedBtn 
                                        title="+"
                                        style={{width:60,borderRadius:5,marginLeft:50}}
                                        onPress={()=>{this.setState({default:this.state.default+1})}}
                                />:<Fragment />}
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
                        
                           <CircleBtn disabled={this.state.disabled}
                                onPress={()=>{
                                    
                                    this.playSound();
                                    this.setState({number:this.state.number+1,default:this.state.default<=0?0:this.state.default-1,visible:true,setgoalVisible:false,disabled:true});
                                    setTimeout(()=>{
                                       this.setState({disabled:false})
                                    },1000)
                            }}>
                            <Text style={{fontSize:35,color:'white',fontWeight:'bold'}}>
                                {this.state.number}

                            </Text>
                        </CircleBtn>
                    </View>
               
               </View>
               <View style={style.posht}>
                 {this.state.visible?
                    <FinishedBtn 
                        style={{width:width}}
                        title="Complete"
                        onPress={()=>{
                            this.setRecord(data);
                            this.modalVisible();
                            this.props.navigation.navigate('Calories');
                           
                        }}
                    />:<Fragment />}
               </View>
            </View>)}
            </DataContext.Consumer>
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
        height:'10%',
        justifyContent:'center',
        alignItems:'center',
       

            
    },
    gjysaNalt:{
     height:'45%',

    },
    gjysaPosht:{
        height:'55%',
        justifyContent:'center',
        alignItems:'center',
       

    },
    record:{
      height:'30%',
      flexDirection:'row'
    },
    goal:{
       height:'40%',
       flexDirection:'row',
       justifyContent:'center',
       alignItems:'center'
    },
    audio:{
     height:'30%',
     flexDirection:'row',
     width:'100%'
    }

})