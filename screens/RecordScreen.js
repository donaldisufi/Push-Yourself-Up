import React from 'react';
import { FlatList, ActivityIndicator, Text, View ,StyleSheet } from 'react-native';
import axios from 'axios';

export default class RecordScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          records:'',
        }
      }
      componentDidMount() {
        axios.get('/records')
        .then(response=>{
          this.setState({record:response.data.message});
            console.log(response)
        })
        .catch(error => {
          console.log(error);
        });
     
    }
  render(){

    return(
      <View style={styles.container}>
       <Text >{this.props.records}</Text>
       <Text>{this.props.records}</Text>

      </View>
    );
  }
}

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      justifyContent:'center',
      alignItems:'center',
  
    },
    
  });
  