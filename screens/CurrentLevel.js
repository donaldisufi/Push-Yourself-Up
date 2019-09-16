import React from 'react';
import {
    View,
    StyleSheet,
    Text,
    Vibration
 } from 'react-native';
import DataContext from '../'
import CircleBtn from '../components/CircleBtn';
import FinishedBtn from '../components/FinishedBtn';
import Sound from 'react-native-sound';


 export default  class CurrentLevel extends React.Component{
    static navigationOptions={
        title:'Level'
    }
    constructor(props){
         super(props);
         this.state={
           series:[7,8,6,9,8],
           currentSerie:0,
           restTime:false,
           timer:59,
           finished:false,
           goal:0,
           disabledButton:false,
           
         },
         this.ismounted=false;
       
     }
     componentWillUnmount=()=>{
        this.ismounted=false;
     }
    startTimer=()=>{
      setTimeout(()=>{
        if(this.state.timer >0){
          this.state.restTime &&  this.ismounted && this.setState({timer:this.state.timer-1})
          this.state.restTime &&  this.ismounted && this.startTimer();
        } else{
          this.ismounted && this.setState({restTime:false,goal:this.state.series[this.state.currentSerie],finished:false,timer:59,disabledButton:false});
        }
       },1000)
     }
    //  playSound=()=>{
    //   let hello = new Sound(require('../assets/sound/PushUpsSound.mp3') , Sound.MAIN_BUNDLE, (error) => {
    //     if (error) {
    //       console.log(error)
    //     }
    //   })
      
    //   hello.play((success) => {
    //     if (!success) {
    //       console.log('Sound did not play')
    //     }
    //   });

    //  }

     
     componentDidMount=()=>{
       this.ismounted=true;
       this.ismounted && this.setState({goal:this.state.series[this.state.currentSerie]})
     }
 
    renderButtons=(data)=>{
      return data.map((value,index)=>(
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
           <View style={style.container}>
                  <View style={style.nalt}>
                    {this.renderButtons(this.state.series)}
                  </View>
                  <View style={style.posht} >
                   <View style={{height:60,justifyContent:'center',alignItems:'center'}}>
                         {this.state.restTime?<Text style={{fontSize:22,color:'#2EA0D1'}}>
                           Rest Time 
                         </Text>:null}
                   </View>
                    <CircleBtn disabled={this.state.disabledButton} onPress={()=>{
                        // this.playSound();
                        this.setState({goal:this.state.goal<=0?0:this.state.goal-1,finished:this.state.goal<=0?true:false},function(){
                          if(this.state.goal<=0){
                            this.startTimer();
                           this.setState({restTime:true,finished:false,currentSerie:this.state.currentSerie+1,disabledButton:true})
                          }
                        });
                     
                    }}>
                       {this.state.restTime?<Text style={{fontSize:30,color:'white',fontWeight:'bold'}}>{"00 : " + this.state.timer}</Text>:<Text style={{fontSize:30,color:'white',fontWeight:'bold'}}>{this.state.goal}</Text>}
                    </CircleBtn>
                  </View> 
                  <View style={{height:'12%',justifyContent:'center',alignItems:'center',width:'100%'}}>
                    {this.state.restTime?
                     <FinishedBtn 
                       title="Continue"
                       style={{width:'100%'}}
                       onPress={()=>{
                        this.setState({restTime:false,goal:this.state.series[this.state.currentSerie],finished:false,timer:59,disabledButton:false});
                       }}
                     />: <FinishedBtn
                          style={{width:'100%'}}
                          title="Finish"
                          onPress={()=>{
                          this.startTimer();
                          this.setState({restTime:true,finished:false,currentSerie:this.state.currentSerie+1,disabledButton:true})
                        }}
                      />}
                  </View>
           </View>
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