import React from 'react';
import { 
 View,
 StyleSheet,
 ImageBackground,
 Platform,
 Text


} from 'react-native';
import { SafeAreaView } from 'react-navigation';
import Constants from 'expo-constants';
import ButtonHome from '../components/ButtonHome';
import deviceStorage from '../components/service/deviceStorage';
import ContainerSett from '../components/ContainerSett';
import SettinsLine from '../components/SettingsLine';
import { ScrollView } from 'react-native-gesture-handler';
import DataContext from '../components/DataContext';

export default class SettingsContainer extends React.Component{
    static navigationOptions = {
        headerTransparent: true,
        title:"Settings",
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
    render(){
        return(
            <DataContext.Consumer>{(data)=>(
                <View style={style.container}>
                     <ImageBackground source={require('../assets/images/SettingsBack.png')} style={{ paddingTop: Platform.OS === 'ios' ? 60 : 80,}}>
                        <View style={style.nalt}>
                            <Text style={{fontSize:40,fontFamily:'bold',color:'white'}}>
                               {data.userName}
                            </Text>
                        </View>
                    </ImageBackground>
                    <View style={style.posht}>
                        <ScrollView style={{marginTop:-30,paddingTop:10,paddingBottom:20}}>
                            <ContainerSett style={{}}>
                                <SettinsLine name={Platform.OS==='ios'?'ios-contact':'md-contact'} title="EDIT USERNAME" style={{borderBottomColor:'#D3D3D3',borderBottomWidth:1,borderRadius:5}} />
                                <SettinsLine name={Platform.OS==='ios'?'ios-lock':'md-lock'} title="CHANGE PASSWORD"style={{borderBottomColor:'#D3D3D3',borderBottomWidth:1,borderRadius:5}}/>
                                <SettinsLine name={Platform.OS==='ios'?'ios-contact':'md-contact'}  title="EDIT KILOGRAMS" />

                            </ContainerSett>
                            <ContainerSett style={{marginTop:20}}>
                                <SettinsLine name={Platform.OS==='ios'?'ios-lock':'md-lock'} title="CHANGE PASSWORD"style={{borderBottomColor:'#D3D3D3',borderBottomWidth:1,borderRadius:5}}/>
                                <SettinsLine name={Platform.OS==='ios'?'ios-lock':'md-lock'} title="CHANGE PASSWORD"style={{borderBottomColor:'#D3D3D3',borderBottomWidth:1,borderRadius:5}}/>
                                
                            </ContainerSett>
                            <ContainerSett style={{marginTop:20,marginBottom:100}}>
                                <SettinsLine name={Platform.OS==='ios'?'ios-lock':'md-lock'} title="CHANGE PASSWORD"style={{borderBottomColor:'#D3D3D3',borderBottomWidth:1,borderRadius:5}}/>
                                <SettinsLine onPress={()=>{
                                        deviceStorage.removeItem('@token').then(res=>{
                                        this.props.navigation.navigate('Register');});}} name={Platform.OS==='ios'?'ios-lock':'md-lock'} title="LOG OUT"/>
                                
                            </ContainerSett>
                       </ScrollView>
                    </View>
                </View>   
                )}</DataContext.Consumer>
        )
    }
}

const style = StyleSheet.create({
    container:{
     flex :1 ,
    },
    nalt:{
      height:'30%',
      alignItems:'center',
      width:'100%',
      paddingTop:50
      
    
    
    },
    posht:{
      height:'70%',
      backgroundColor:'#F3F1F1',
      alignItems:'center',
    
    },
    statusBar :{
        backgroundColor: "#C2185B",
        height: Constants.statusBarHeight,
    }
})