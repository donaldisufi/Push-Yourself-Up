import React from 'react';
import { Text, View ,StyleSheet } from 'react-native';
import axios from 'axios';

export default class RecordScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          record:[],
          users:[],
        }
      }
   
      
      componentDidMount() {

        axios.get(`/users/record/id`)
        .then(response=>{
          this.setState({record:response.users.response});
            console.log(response)
        })
        .catch(error => {
          console.log(error);
        });
console.log(this.state.record.users)
    }




  render(){

    return(
      <View style={styles.container}>
        <Text style={{fontSize:25}}>
            {this.props.record}
            {this.props.users}
          </Text>       
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
  