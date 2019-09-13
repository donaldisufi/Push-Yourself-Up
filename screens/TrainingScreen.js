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
                     onPress={()=>{this.props.navigation.navigate('Current')}}        
                    />
                </View>
                <View style={style.levelItem}>
                    <LevelBtn 
                     level={2}
                     disabled={data.level2}
                     key={2}                
                    />
                 </View>
                 <View style={style.levelItem}>
                    <LevelBtn 
                     level={3}
                     disabled={data.level3}
                     key={3}                
                    
                    />
                </View>
             </View>
             <View style={style.LevelView}>
               <View style={style.levelItem}>
                    <LevelBtn 
                       level={4}
                        disabled={data.level4}
                        key={4}                    
                    />
                </View>
                <View style={style.levelItem}>
                    <LevelBtn 
                      disabled={data.level5}
                      key={5}                
                     level={5}

                    />
                 </View>
                 <View style={style.levelItem}>
                    <LevelBtn 
                        disabled={data.level6}                   
                        key={6}       
                     level={6}

                    />
                 </View>
               
             </View>
             <View style={style.LevelView}>
               
                <View style={style.levelItem}>
                    <LevelBtn 
                        disabled={data.level7}
                        key={7}     
                        level={7}

                    />
                </View>
                <View style={style.levelItem}>
                    <LevelBtn
                        disabled={data.level8}
                        key={8}       
                        level={8}

                    />
                </View>
                <View style={style.levelItem}>
                    <LevelBtn
                        disabled={data.level9}                    
                        key={9}   
                        level={9}
                    />
                </View>
                
             </View>
             <View style={style.LevelView}>
                <View style={style.levelItem}>
                    <LevelBtn
                        disabled={data.level10}
                        key={10}     
                        level={10}
                    />
                 </View>
                 <View style={style.levelItem}>
                    <LevelBtn 
                         disabled={data.level11}
                         key={11}
                         level={11}
                     />
                  </View>
                  <View style={style.levelItem}>
                     <LevelBtn  
                        disabled={data.level12}
                        level={12}
                        key={12}/>
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