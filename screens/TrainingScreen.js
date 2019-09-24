import React from 'react';
import {
    View,
    StyleSheet,
    Text,

} from 'react-native';
import LevelBtn from '../components/LevelBtn';
import DataContext from '../components/DataContext';
import {Ionicons} from '@expo/vector-icons';
import axios from 'axios';

export default class TrainingScreen extends React.Component {
   static navigationOptions={
       title:"Training"
   }
    constructor(props){
    super(props);
    this.state={
        current:1,
    }
   }
   componentWillMount=()=>{
    console.log(DataContext);
    console.log("Propsat");
    console.log(this.props);
    let lvl2=this.props.navigation.state.params.level1?false:true;
    let lvl3 = this.props.navigation.state.params.level2?false:true;
    let lvl4 = this.props.navigation.state.params.level3?false:true;
    let lvl5 = this.props.navigation.state.params.level4?false:true;
    let lvl6 = this.props.navigation.state.params.level5?false:true;
    let lvl7 = this.props.navigation.state.params.level6?false:true;
    let lvl8 = this.props.navigation.state.params.level7?false:true;
    let lvl9 = this.props.navigation.state.params.level8?false:true;
    let lvl10 = this.props.navigation.state.params.level9?false:true;
    let lvl11 = this.props.navigation.state.params.level10?false:true;
    let lvl12 = this.props.navigation.state.params.level11?false:true;
    DataContext._currentValue.setLevel(lvl2,2);
    DataContext._currentValue.setLevel(lvl3,3);
    DataContext._currentValue.setLevel(lvl4,4);
    DataContext._currentValue.setLevel(lvl5,5);
    DataContext._currentValue.setLevel(lvl6,6);
    DataContext._currentValue.setLevel(lvl7,7);
    DataContext._currentValue.setLevel(lvl8,8);
    DataContext._currentValue.setLevel(lvl9,9);
    DataContext._currentValue.setLevel(lvl10,10);
    DataContext._currentValue.setLevel(lvl11,11);
    DataContext._currentValue.setLevel(lvl12,12);



   }
   componentWillMount=()=>{
  

   }
   render(){
       return(
           <DataContext.Consumer>{(data)=>(
            <View style={style.container}>
             <View style={style.first}>
                  <Text>
                      Select a level to Train
                  </Text>
             </View>
             <View style={style.LevelView}>
                 {/* View NMumer 1  */}
                <View style={style.levelItem}>
                    <LevelBtn 
                     level={1}
                     disabled={data.level1}
                     key={1}        
                     onPress={()=>{this.props.navigation.navigate('Current',{currentLevel:1,series:data.series})}}        
                    />
                </View>
                <View style={style.levelItem}>
                    <LevelBtn 
                     level={2}
                     disabled={data.level2}
                     key={2}  
                     onPress={ ()=>{
                         data.setCurrentLevel(2);
                         this.props.navigation.navigate('Current',{currentLevel:2,series:data.series})
                         
                     }}              
                    />
                 </View>
                 <View style={style.levelItem}>
                    <LevelBtn 
                     level={3}
                     disabled={data.level3}
                     key={3}                
                     onPress={()=>{
                        data.setCurrentLevel(3);
                        this.props.navigation.navigate('Current',{currentLevel:3,series:data.series})
                    }} 
                    />
                </View>
             </View>
             <View style={style.LevelView}>
               <View style={style.levelItem}>
                    <LevelBtn 
                       level={4}
                        disabled={data.level4}
                        key={4}    
                        onPress={()=>{
                            data.setCurrentLevel(4);
                            this.props.navigation.navigate('Current',{currentLevel:4,series:data.series})
                        }}                 
                    />
                </View>
                <View style={style.levelItem}>
                    <LevelBtn 
                      disabled={data.level5}
                      key={5}                
                      level={5}
                      onPress={()=>{
                        data.setCurrentLevel(5);
                        this.props.navigation.navigate('Current',{currentLevel:5,series:data.series})
                    }} 
                    />
                 </View>
                 <View style={style.levelItem}>
                    <LevelBtn 
                        disabled={data.level6}                   
                        key={6}       
                        level={6}
                        onPress={()=>{
                            data.setCurrentLevel(6);
                            this.props.navigation.navigate('Current',{currentLevel:6,series:data.series})
                        }} 
                    />
                 </View>
               
             </View>
             <View style={style.LevelView}>
               
                <View style={style.levelItem}>
                    <LevelBtn 
                        disabled={data.level7}
                        key={7}     
                        level={7}
                        onPress={()=>{
                            data.setCurrentLevel(7);
                            this.props.navigation.navigate('Current',{currentLevel:7,series:data.series})
                        }} 

                    />
                </View>
                <View style={style.levelItem}>
                    <LevelBtn
                        disabled={data.level8}
                        key={8}       
                        level={8}
                        onPress={()=>{
                            data.setCurrentLevel(8);
                            this.props.navigation.navigate('Current',{currentLevel:8,series:data.series})
                        }} 

                    />
                </View>
                <View style={style.levelItem}>
                    <LevelBtn
                        disabled={data.level9}                    
                        key={9}   
                        level={9}
                        onPress={()=>{
                            data.setCurrentLevel(9);
                            this.props.navigation.navigate('Current',{currentLevel:9,series:data.series})
                        }} 
                    />
                </View>
                
             </View>
             <View style={style.LevelView}>
                <View style={style.levelItem}>
                    <LevelBtn
                        disabled={data.level10}
                        key={10}     
                        level={10}
                        onPress={()=>{
                            data.setCurrentLevel(10);
                            this.props.navigation.navigate('Current',{currentLevel:10,series:data.series})
                        }} 
                    />
                 </View>
                 <View style={style.levelItem}>
                    <LevelBtn 
                         disabled={data.level11}
                         key={11}
                         level={11}
                         onPress={()=>{
                            data.setCurrentLevel(11);
                            this.props.navigation.navigate('Current',{currentLevel:11,series:data.series})
                        }} 
                     />
                  </View>
                  <View style={style.levelItem}>
                     <LevelBtn  
                        disabled={data.level12}
                        level={12}
                        key={12}
                        onPress={()=>{
                            data.setCurrentLevel(12);
                            this.props.navigation.navigate('Current',{currentLevel:12,series:data.series})
                        }} />
                  </View>
             </View>
           </View>
           )}</DataContext.Consumer>

       );
   }

}
const style = StyleSheet.create({
    container:{
        justifyContent:'center',
        alignItems:'center',
        flex:1
    },
    first:{
        height:'10%',
        justifyContent:'center',
        alignItems:'center'
    },
    LevelView:{
        height:'22%',
        flexDirection:'row',
        padding:10
    },
    levelItem:{
        width:'33%',
        justifyContent:'center',
        alignItems:'center',
      
    }
})