import React from 'react';
import {
    View,
    StyleSheet,
    Text,
  
 } from 'react-native';

import CircleBtn from '../components/CircleBtn';
import FinishedBtn from '../components/FinishedBtn';
import { Audio } from 'expo-av';
import SoundBtn from '../components/SoundBtn';
import DataContext from '../components/DataContext';
import axios from 'axios';
import deviceStorage from '../components/service/deviceStorage';


 export default  class CurrentLevel extends React.Component{
    static navigationOptions={
        title:'Level',
        headerTitleStyle: {
          fontWeight: "bold",
          fontSize: 25
        }
    }
    constructor(props){
         super(props);
         this.state={
          
           currentSerie:0,
           restTime:false,
           timer:10,
           finished:false,
           goal:0,
           disabledButton:false,
           shouldPlay:true,
           lastIndex:0,
           series:[],
           pompa:0,

         
         },
         this.ismounted=false;
        this.series  = props.navigation.state.params.series[props.navigation.state.params.currentLevel-1];
         console.log(props);
        
         
      
     }
   
     componentWillUnmount=()=>{
        this.ismounted=false;
      
     }

     componentDidMount=()=>{
      this.ismounted=true;
     
      this.ismounted && this.setState({series:this.series},function(){
        console.log(this.state.series);
        this.setState({goal:this.state.series[this.state.currentSerie],lastIndex:this.state.series.length-1});
      })
     
      
          
    }
 
    finishedLevel=(data)=>{
      
      data.setSeries(data.series);
      data.setPushUps(this.state.pompa);
      data.setLevel(false,data.currentLevel+1);
      let password = deviceStorage.getItem("password");
      let username = deviceStorage.getItem("username");
      let id = deviceStorage.getItem("id");
      var level = `level${data.currentLevel}`;
        
        axios.patch(`/users/${id}`,
          {
              name:username,
              password:password,
              record:50,
             [level]:true,
              
          }
        ).then((response)=>{
          console.log("Successfully updatet level");
          console.log(response);
        })
        .catch((error)=>{
            console.log("Error update");
            console.log(error.message);
        })
      
     
    }
    startTimer=()=>{
      setTimeout(()=>{
        if(this.state.timer >0){
          this.state.restTime &&  this.ismounted && this.setState({timer:this.state.timer-1})
          this.state.restTime &&  this.ismounted && this.startTimer();
        } else{
          this.ismounted && this.setState({restTime:false,currentSerie:this.state.currentSerie+1,finished:false,timer:10,disabledButton:false},function(){
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
            <View style={{height:40,width:40,borderRadius:20,backgroundColor:this.state.currentSerie===index?'#2EA0D1':'white',justifyContent:'center',alignItems:'center'}}>
              <Text style={{color:this.state.currentSerie===index?'white':'black',fontWeight:'bold',fontSize:20}}>
                {value}
              </Text>
            </View>
          </View>
        ));
     }
     render(){
       return(
        <DataContext.Consumer>{(data)=>(
           <View style={style.container}>
                  <View style={style.nalt}>
                    {this.renderButtons(data.series[data.currentLevel-1])}
                  </View>
                  <View style={style.posht} >
                   <View style={{flexDirection:'row'}}>
                      <View style={{height:70,width:'25%'}}>
                        
                    </View>
                    <View style={{height:70,justifyContent:'center',alignItems:'center',width:'50%'}}>
                          {this.state.restTime?<Text style={{fontSize:22,color:'#2EA0D1'}}>
                            Rest Time 
                          </Text>:null}
                    </View>
                    <View style={{height:70,width:'25%',justifyContent:'center',alignItems:'center'}} >
                        <SoundBtn 
                         name={this.state.shouldPlay?'md-volume-high':'md-volume-off'}
                         onPress={()=>{this.setState({shouldPlay:!this.state.shouldPlay})}}
                        />
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
                                    timer:10,
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
                    {this.state.lastIndex===this.state.currentSerie && this.state.goal<=0? <Text style={{fontSize:30,color:'white',fontWeight:'bold'}}>0</Text>:this.state.restTime?<Text style={{fontSize:30,color:'white',fontWeight:'bold'}}>{"00 : " + this.state.timer}</Text>:<Text style={{fontSize:30,color:'white',fontWeight:'bold'}}>{this.state.goal}</Text>}
                    </CircleBtn>
                  </View> 
                  <View style={{height:'12%',justifyContent:'center',alignItems:'center',width:'100%'}}>
                    {this.state.restTime?
                     <FinishedBtn 
                       title="Continue"
                       style={{width:'100%'}}
                       onPress={()=>{
                        this.setState({restTime:false,finished:false,timer:10,disabledButton:false,currentSerie:this.state.currentSerie+1,},function(){
                          this.setState({goal:this.state.series[this.state.currentSerie]},function(){
                            console.log(this.state.currentSerie);
                            console.log(this.state.goal);
                          });
                           
                        });
                       }}
                     />: <FinishedBtn
                          style={{width:'100%'}}
                          title="Finish"
                          onPress={()=>{
                            if(this.state.currentSerie===this.state.lastIndex){
                            
                              this.setState({ 
                                currentSerie:0,
                                restTime:false,
                                timer:10,
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
                        }}
                      />}
                  </View>
           </View> )}</DataContext.Consumer>
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
      height:'73%',
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