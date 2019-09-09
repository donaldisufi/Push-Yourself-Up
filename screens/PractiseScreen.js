import React,{Fragment} from 'react';
import {
    StyleSheet,
    View,
    Dimensions,
    Text,
    ImageBackground,
    Modal
} from 'react-native';

import CircleBtn from '../components/CircleBtn'
import FinishedBtn from '../components/FinishedBtn';
import { TextInput } from 'react-native-gesture-handler';
import DataContext from '../components/DataContext';

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
       };
   }
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
                    <View style={{height:'15%',width:'100%',flexDirection:'row',top:0}}>
                        <View style={{width:'60%'}}>

                        </View>
                        <View style={{width:'40%',height:'100%',justifyContent:'center',alignItems:'center'}}>
                           <Text style={{fontSize:18,justifyContent:'center',alignItems:'center'}}>
                             Your Record :{data.record}
                           </Text>
                        </View>
                    </View> 
                    <View  style={{height:'25%',width:'100%',justifyContent:'center',alignItems:'center',marginBottom:50,flexDirection:'row'}}> 
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
                    <View style={{height:'60%',justifyContent:'center',alignItems:'center'}}>
                        <CircleBtn 
                            onPress={()=>{
                            
                            
                                this.setState({number:this.state.number+1,default:this.state.default<=0?0:this.state.default-1,visible:true,setgoalVisible:false});
                            
                            }}
                            number={this.state.number}
                        />
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
                           
                        }}
                    />:null}
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
        justifyContent:'center',
        alignItems:'center',
          
    },
    posht:{
        height:'10%',
        justifyContent:'center',
        alignItems:'center',
            
    }

})