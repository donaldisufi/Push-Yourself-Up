import React from 'react';
import {Video} from 'expo-av';
import { 
    View,
    StatusBar,
    Dimensions,
    Text,
    ActivityIndicator
} from 'react-native';
import VideoPlayer from 'expo-video-player';
let {width,height } = Dimensions.get('window');

export default class VideoGif extends React.Component{
    constructor(props){
        super(props);
        this.state={
            loaded:false,
        }
    }
   componentWillMount=()=>{
    
   }
 


static navigationOptions= {
    title:"How to Use App",
    headerTintColor:'white',
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
    
          },
          headerTransparent: true,
     
}

 
    render(){
           

        return(
               
                //     videoProps={{
                    //         shouldPlay:true,
                    //         resizeMode:Video.RESIZE_MODE_STRETCH,
                //         source:{
                    //             localUri:"../assets/videos/GifVideo.mp4"
                    //         },
                        
                    //     }}
                    //     inFullscreen={true}
                //  />
                // ref={this._handleVideoRef}
           <View style={{flex:1,paddingTop:StatusBar.currentHeight}}>
              <View style={{width,height:'15%',justifyContent:'center',alignItems:"flex-start",padding:20,backgroundColor:'#2F3B61'}}>
                  <Text style={{color:'#F5F5F5',fontFamily:'bold',fontSize:25}}>
                       How to use App
                  </Text>
             </View>
              
                <Video
                     
                    source={require('../assets/videos/GifVideo.mp4')}
                    rate={1.0}    
                    volume={1.0}
                    isMuted={false}
                        resizeMode="cover"
                        shouldPlay
                        style={{ height:'85%',width:width ,borderColor:"#2F3B61"}}
                        onError={(e)=>{
                            console.log(e);
                            this.props.navigation.navigate("Main");

                        }}
                       
                        onPlaybackStatusUpdate={(playbackStatus)=>{
                            if(playbackStatus.didJustFinish){
                                this.props.navigation.navigate("Main");
                            }
                            
                        }}
                        onReadyForDisplay={()=>{
                            this.setState({loaded:true})
                        }}
                        
                    
                        
                    
                    />
                    
                        
              
           </View>
        );  
    }
}