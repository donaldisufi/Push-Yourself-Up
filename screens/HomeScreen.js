import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions
} from 'react-native';

import { MonoText } from '../components/StyledText';
import ButtonHome from '../components/ButtonHome';
import DataContext from '../components/DataContext';
import { TextInput } from 'react-native-gesture-handler';
import axios from 'axios';
import deviceStorage from '../components/service/deviceStorage';

let {height,width} = Dimensions.get('window');

export default class HomeScreen extends React.Component{
  mounted=false;
  constructor(props){
    super(props);
    this.state={
      data:null
    };
    this.data = null;
    
  }
  componentWillMount= async ()=>{
      let id;
      
    // deviceStorage.getItem("id").then(res=>{
      deviceStorage.getItem("id").then(res=>{
        id=res;
        console.log(" ID : "+id);

        axios.get(`/users/${id}`).then(value=>{
          this.setState({data:value.data.user});
        

           // level2 = value.data.user.level1.completed?false:true;
           // level3 = value.data.user.level2.completed?false:true;
           // level4 = value.data.user.level3.completed?false:true;
           // level5 = value.data.user.level5.completed?false:true;
           // level6 = value.data.user.level6.completed?false:true;
 
           //DataContext._currentValue.setLevel(level2,2);
           
           
        
         
       }).then(()=>{
         console.log("Kontexttttt");
         console.log(DataContext);
       })
       .catch(error=>{
         console.log(error);
       })

      }).catch((err)=>{
           console.log("Error geting id from async storage");
           

      });
     
  console.log("Tdhanate ");
  console.log(this.data);
     
    // }).catch(error=>{
    //   console.log("Erro getting token " + error.message);
    // });
    // // DataContext._currentValue.setLevel(level3,3);
    // // DataContext._currentValue.setLevel(level4,4);
    // // DataContext._currentValue.setLevel(level5,5);
    // // DataContext._currentValue.setLevel(level6,6);
    // // DataContext._currentValue.setLevel(level7,7);
    
    
       
  }
  
  componentDidMount=()=>{
    console.log(DataContext);
  //   
       
  //     axios.get(`/users/${res}`).then(value=>{
  //       this.setState({data:value});
  //        // level2 = value.data.user.level1.completed?false:true;
  //        // level3 = value.data.user.level2.completed?false:true;
  //        // level4 = value.data.user.level3.completed?false:true;
  //        // level5 = value.data.user.level5.completed?false:true;
  //        // level6 = value.data.user.level6.completed?false:true;

  //        //DataContext._currentValue.setLevel(level2,2);
  //        console.log("Contexti : ")
         
      
  //       console.log(this.data);
  //       return value;
  //    })
  //    .catch(error=>{
  //      console.log(error);
  //    })
  //  
  //  // DataContext._currentValue.setLevel(level3,3);
  //  // DataContext._currentValue.setLevel(level4,4);
  //  // DataContext._currentValue.setLevel(level5,5);
  //  // DataContext._currentValue.setLevel(level6,6);
  //  // DataContext._currentValue.setLevel(level7,7);
   }
 
 
  render(){
    return(
    <DataContext.Consumer>{(data)=>(
      <View style={style.container}>
        <View style={style.nalt}>
          <Text style={{fontSize:30}}>
            Your Pushup Record :
          </Text>
          <Text style={{fontSize:25}}>
            {data.record}
          </Text>
        </View>
        <ButtonHome 
            title="Record"
            
            onPress={()=>{this.props.navigation.navigate('Record')}}
            />
        <View style={style.posht}>
          <ButtonHome 
            style={{width:width*0.83}}
            onPress={()=>{
              this.props.navigation.navigate('Train',this.state.data);
              data.setCaloriesRender("Train");

            }}
            name="md-clock"
            title="Training"
            
            />
          <View style={{padding:10,marginTop:10,flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
          <ButtonHome 
            title="Practise"
            name="md-fitness" 
            onPress={()=>{
              this.props.navigation.navigate('Practise');
              data.setCaloriesRender("Practise");
            }}
            style={{marginRight:10}}
            />
          <ButtonHome 
            title="Advices"
            name="md-clipboard" 
            onPress={()=>{this.props.navigation.navigate('Advices')}}
            />
           
           
          </View>

        </View>
     </View>)}</DataContext.Consumer>
    );
  }
}

const style = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  nalt:{
    height:height*0.60,
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'column'
  },
  posht:{
    height:height*0.4,
    justifyContent:'center',
    alignItems:'center'
  }
})







HomeScreen.navigationOptions = {
  header: null,
};

function DevelopmentModeNotice() {
  if (__DEV__) {
    const learnMoreButton = (
      <Text onPress={handleLearnMorePress} style={styles.helpLinkText}>
        Learn more
      </Text>
    );

    return (
      <Text style={styles.developmentModeText}>
        Development mode is enabled: your app will be slower but you can use
        useful development tools. {learnMoreButton}
      </Text>
    );
  } else {
    return (
      <Text style={styles.developmentModeText}>
        You are not in development mode: your app will run at full speed.
      </Text>
    );
  }
}

function handleLearnMorePress() {
  WebBrowser.openBrowserAsync(
    'https://docs.expo.io/versions/latest/workflow/development-mode/'
  );
}

function handleHelpPress() {
  WebBrowser.openBrowserAsync(
    'https://docs.expo.io/versions/latest/workflow/up-and-running/#cant-see-your-changes'
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
