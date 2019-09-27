import React from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import axios from 'axios';
import RecordeItem from '../components/RecordeItem';

export default class RecordScreen extends React.Component {
  static navigationOptions = {

    title: 'Top Record'

  }
  constructor(props) {
    super(props);
    this.state = {
      records: [],
      users: ""
    }
  }

  componentDidMount() {

    axios.get(`/records/`)
      .then(response => {
        const user = response.data;
        alert(JSON.stringify(user))

        this.setState({ records: user })


      })
      .catch(error =>
        console.log(error)
      );

  }

  render() {

    return (
      <ScrollView>
        <View style={styles.container}>
          {
            this.state.records.length !== 0 ?
              this.state.records.map((record, index) => (
                <RecordeItem key={index} rank={record.rank} name={record.name} record={record.record} > </RecordeItem>
              )
              ) : null
          }

        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',

  },

});
