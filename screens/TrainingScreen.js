import React from 'react';
import {
    View,
    StyleSheet,
    Text,

} from 'react-native';
import LevelBtn from '../components/LevelBtn';
import DataContext from '../components/DataContext';
import {Ionicons} from '@expo/vector-icons';


export default class TrainingScreen extends React.Component {
   static navigationOptions={
       title:"Training"
   }
    constructor(props){
    super(props);
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
                     onPress={()=>{this.props.navigation.navigate('Current',{data})}}        
                    />
                </View>
                <View style={style.levelItem}>
                    <LevelBtn 
                     level={2}
                     disabled={data.level2}
                     key={2}  
                     onPress={()=>{
                         data.setCurrentLevel(2);
                         this.props.navigation.navigate('Current')
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
                        this.props.navigation.navigate('Current')
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
                            this.props.navigation.navigate('Current')
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
                        this.props.navigation.navigate('Current')
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
                            this.props.navigation.navigate('Current')
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
                            this.props.navigation.navigate('Current')
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
                            this.props.navigation.navigate('Current')
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
                            this.props.navigation.navigate('Current')
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
                            this.props.navigation.navigate('Current')
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
                            this.props.navigation.navigate('Current')
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
                            this.props.navigation.navigate('Current')
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