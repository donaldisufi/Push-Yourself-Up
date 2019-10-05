import React from 'react';
import {
    View,
    StyleSheet,
    Text,
    DeviceEventEmitter,
    ImageBackground,
    Platform,
    Dimensions,
 
 } from 'react-native';

import CircleBtn from '../components/CircleBtn';
import FinishedBtn from '../components/FinishedBtn';
import { Audio } from 'expo-av';
import SoundBtn from '../components/SoundBtn';
import DataContext from '../components/DataContext';
import axios from 'axios';
import deviceStorage from '../components/service/deviceStorage';
import configAxios from '../components/service/configAxios';


let {height,width } = Dimensions.get('window');
 export default  class CurrentLevel extends React.Component{
    static navigationOptions={
      
    headerTransparent: true,
          
         title:"Current Level",
         headerTintColor:'white',
         headerTitleStyle:{
         fontSize:30,
         fontFamily:'bold',
         color:'white',
         
        },
      
    }
    constructor(props){
         super(props);
         this.state={
           currentSerie:0,
           restTime:false,
           timer:30,
           finished:false,
           goal:0,
           disabledButton:false,
           shouldPlay:true,
           lastIndex:0,
           series:[],
           pompa:0,
           level1:false,
           level2:false,
           level3:false,
           level4:false,
           level5:false,
           level6:false,
           level7:false,
           level8:false,
           level9:false,
           level10:false,
           level11:false,
           level12:false,
           record:0,
          
         },
         this.ismounted=false;
         this.series  = props.navigation.state.params.series[props.navigation.state.params.currentLevel-1];
       
     }
    //  startDetection=()=>{
    //    const zone1 = new RNEP.ProximityZone(10,'Sample1');
    //    zone1.onEnterAction = context =>{
    //        console.log("U afru ", context);

    //    };
    //    zone1.onExitAction = context => {
    //     console.log("zone1 onExit", context);
    //    };
    //   }
     componentWillMount =async ()=>{
       
       let id = await deviceStorage.getItem('id');
       axios.get(`/users/${id}`).then((value)=>{
        
         this.setState({
           level1: value.data.user.level1,
           level2: value.data.user.level2,
           level3: value.data.user.level3,
           level4: value.data.user.level4,
           level5: value.data.user.level5,
           level6: value.data.user.level6,
           level7: value.data.user.level7,
           level8: value.data.user.level8,
           level9: value.data.user.level9,
           level10: value.data.user.level10,
           level11: value.data.user.level11,
           level12: value.data.user.level12,
           record:value.data.user.record
         });  
        
       })
       .catch((error)=>{
         console.log("Error getting levels");
       })
     }
     componentWillUnmount=()=>{
        this.ismounted=false;
      
     }
     
     componentDidMount=()=>{
     
      // this.startDetection();
      this.ismounted=true;
      this.ismounted && this.setState({series:this.series},function(){
        
        this.setState({goal:this.state.series[this.state.currentSerie],lastIndex:this.state.series.length-1});
      })
     
    }
 
    finishedLevel= async (data)=>{
      
      data.setSeries(data.series);
      data.setPushUps(this.state.pompa);
      data.setLevel(false,data.currentLevel+1);
    
       let id = await deviceStorage.getItem("id");
       let level = data.currentLevel;
      
         
       if(this.state.pompa>data.record){
          data.setRecord(this.state.pompa);
          axios.put(`/users/record/${id}`,{
              record:this.state.pompa
          })
      }
      // var level = `level${data.currentLevel}`;
        axios.put(`/users/level/${id}`,{
          
            level1:1===level?true:this.state.level1,
            level2:2===level?true:this.state.level2,
            level3:3===level?true:this.state.level3,
            level4:4===level?true:this.state.level4,
            level5:5===level?true:this.state.level5,
            level6:6===level?true:this.state.level6,
            level7:7===level?true:this.state.level7,
            level8:8===level?true:this.state.level8,
            level9:9===level?true:this.state.level9,
            level10:10===level?true:this.state.level10,
            level11:11===level?true:this.state.level11,
            level12:12===level?true:this.state.level12,

        })
         .then((response)=>{
            console.log("Successfully updatet level");
           
          })
          .catch((error)=>{
              console.log("Error update");
              console.log(JSON.stringify(error));
          })
    
        
     
    }
    startTimer=()=>{
      setTimeout(()=>{
        if(this.state.timer >0){
          this.state.restTime &&  this.ismounted && this.setState({timer:this.state.timer-1})
          this.state.restTime &&  this.ismounted && this.startTimer();
        } else{
          this.ismounted && this.setState({restTime:false,currentSerie:this.state.currentSerie+1,finished:false,timer:30,disabledButton:false},function(){
             this.setState({goal:this.state.series[this.state.currentSerie]});
          });
        }
       },1000)
     }

     playSound = async ()=>{
     
      const sound = new Audio.Sound();
      try {
        this.ismounted && await sound.loadAsync(require('../assets/sound/PushUpsSound.mp3'),{shouldPlay:this.state.shouldPlay});
        
      }catch(error) {
       console.log(error);
      }
     }

     
   
    renderButtons=(array)=>{
      
      return array.map((value,index)=>(
          <View  style={[style.renderButton]} key={index}>
            <View style={{height:50,width:50,borderRadius:25,backgroundColor:this.state.currentSerie===index?'white':'transparent',justifyContent:'center',alignItems:'center',borderColor:'white',borderWidth:1}}>
              <Text style={{color:this.state.currentSerie===index?'black':'white',fontWeight:'bold',fontSize:25}}>
                {value}
              </Text>
            </View>
          </View>
        ));
     }
     render(){
   
       return(
        <ImageBackground source={require('../assets/images/TrainBack2.png')} style={{flex:1, paddingTop: Platform.OS === 'ios' ? 60 : 80,}} >
        <DataContext.Consumer>{(data)=>(
           <View style={style.container}>
                  <View style={style.nalt}>
                    {this.renderButtons(data.series[data.currentLevel-1])}
                  </View>
                  <View style={style.posht} >
                      <View style={{flexDirection:'row'}}>
                          <View style={{height:60,width:'25%'}}>
                            
                        </View>
                        <View style={{height:60,justifyContent:'center',alignItems:'center',width:'50%'}}>
                              {this.state.restTime?<Text style={{fontSize:30,color:'white',fontFamily:'bold'}}>
                              REST TIME 
                              </Text>:null}
                        </View>
                        <View style={{height:60,width:'25%',justifyContent:'center',alignItems:'center'}} >
                           
                          </View>
                        </View>
                        <CircleBtn disabled={this.state.disabledButton} onPress={()=>{
                            
                            this.state.shouldPlay && this.playSound();
                            this.setState({
                              goal:this.state.goal<=0?0:this.state.goal-1,
                              finished:this.state.goal<=0?true:false,
                              pompa:this.state.pompa+1
                                },function(){
                              if(this.state.goal<=0){
                                if(this.state.currentSerie===this.state.lastIndex){
                                      
                                      this.setState({ 
                                        currentSerie:0,
                                        restTime:false,
                                        timer:30,
                                        finished:false,
                                        goal:0,
                                        disabledButton:false,
                                        shouldPlay:true,
                                        lastIndex:0,
                                        lastIndex:this.state.series.length-1,
                                      },function(){
                                        
                                        this.finishedLevel(data);
                                        this.setState({ goal:this.state.series[this.state.currentSerie],});
                                        this.props.navigation.navigate('Calories');
                                      });
                                    
                                }else {
                                  this.startTimer();
                                  this.setState({restTime:true,finished:false,disabledButton:true})
                                }

                              }});

                            
                        
                        }}>
                        {this.state.lastIndex===this.state.currentSerie && this.state.goal<=0? <Text style={{fontSize:35,color:'black',fontFamily:'bold'}}>0</Text>:this.state.restTime?<Text style={{fontSize:35,color:'black',fontFamily:'bold'}}>{"00 : " + this.state.timer}</Text>:<Text style={{fontSize:35,color:'black',fontFamily:'bold'}}>{this.state.goal}</Text>}
                        </CircleBtn>
                  </View> 
                  <View style={{height:'18%',justifyContent:'center',alignItems:'center',width:'100%'}}>
                    {this.state.restTime?
                        <FinishedBtn 
                          title="Continue"
                          style={{width:width*0.83,marginBottom:5,borderRadius:5,backgroundColor:'transparent',borderColor:'white'}}
                          onPress={()=>{
                            this.setState({restTime:false,finished:false,timer:30,disabledButton:false,currentSerie:this.state.currentSerie+1,},function(){
                              this.setState({goal:this.state.series[this.state.currentSerie]},function(){
                              
                              });
                              
                            });
                          }}
                        />: <FinishedBtn
                            style={{width:width*0.83,marginBottom:5,borderRadius:5,backgroundColor:'transparent',borderColor:'white'}}
                            title="Finish"
                            onPress={()=>{
                              if(this.state.currentSerie===this.state.lastIndex){
                              
                                this.setState({ 
                                  currentSerie:0,
                                  restTime:false,
                                  timer:30,
                                  finished:false,
                                  goal:0,
                                  disabledButton:false,
                                  shouldPlay:true,
                                  lastIndex:0,
                                  lastIndex:this.state.series.length-1},function(){
                                    
                                    this.finishedLevel(data);
                                    this.setState({goal:this.state.series[this.state.currentSerie],})
                                    this.props.navigation.navigate('Calories');
                                  });
                              
                            }else{
                              this.startTimer();
                              this.setState({restTime:true,finished:false,disabledButton:true})
                            }
                        }} />}
                  </View>
                  <View style={{height:'12%',width:'100%',flexDirection:'row',}}>
                      <View style={{width:'30%',justifyContent:'center',alignItems:'center'}}>
                        <SoundBtn 
                              name={this.state.shouldPlay?'md-volume-high':'md-volume-off'}
                              onPress={()=>{this.setState({shouldPlay:!this.state.shouldPlay})}}
                            />
                      </View>
                      <View  style={{width:'70%'}}/>
                  </View>
           </View> )}</DataContext.Consumer>
           </ImageBackground>
         );
     }
 }
 const style = StyleSheet.create({
     container:{
         justifyContent:'center',
         alignItems:'center',
         flex:1,
     },
     nalt:{
       height:'15%',
       justifyContent:'center',
       alignItems:'center',
       flexDirection:'row',
       padding:5,
     },
     posht:{
      height:'55%',
       justifyContent:'center',
       alignItems:'center',
     
     },
     renderButton:{
       height:'100%',
       width:'20%',
       justifyContent:'center',
       alignItems:'center',
       borderRadius:20,
      
     }
 })