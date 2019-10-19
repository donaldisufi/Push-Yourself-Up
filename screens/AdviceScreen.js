import React, { Component } from 'react'
import { View, StyleSheet, Text, Button, ScrollView, Image } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { MonoText } from '../components/StyledText';

export default class Advices extends Component {
  static navigationOptions = {
 
    title: "Tips",
    headerTintColor: 'black',
    headerTitleStyle: {
      fontSize: 30,
      fontFamily: 'bold',
       
      
      

    },
    

  }


  render() {
    return (

      <ScrollView>

        <View style={styles.container}>
          <View style={{ marginTop: 40 }}>
            <Text style={{

              fontSize: 20,
              textAlign: 'center',
              color: 'rgba(0,0,0,0.4)',
              fontSize: 20,
              lineHeight: 24,
              marginTop: -12

            }}>7 tips for amazing push ups..</Text>
          </View>

          <View style={styles.cc}>
            <View>
              <Image source={require('../assets/images/gripe.png')} style={{ height: 40, width: 40, marginRight: 300, marginTop: -25 }} />
            </View>
            <Text style={styles.tekstipare}> Have a strong grip on the floor .</Text>
          </View>

          <View style={styles.cc}>
            <Image source={require('../assets/images/doingpush.png')} style={{ height: 40, width: 40, marginRight: 300, marginTop: -25 }} />

            <Text style={styles.tekstidyt}> Make sure your neck and spine are aligned .</Text>
          </View>

          <View style={styles.cc}>
            <Image source={require('../assets/images/push-up.png')} style={{ height: 40, width: 40, marginRight: 300, marginTop: -25 }} />

            <Text style={styles.tekstitret}>Don’t shrug your shoulders .</Text>
          </View>

          <View style={styles.cc}>
            <Image source={require('../assets/images/deep.png')} style={{ height: 40, width: 40, marginRight: 300, marginTop: -25 }} />

            <Text style={styles.tekstikatert}> Remember to breathe .</Text>
          </View>


          <View style={styles.cc}>
            <Image source={require('../assets/images/gravity.png')} style={{ height: 40, width: 40, marginRight: 300, marginTop: -25 }} />

            <Text style={styles.tekstipest}> Don’t let gravity do the work for you .</Text>
          </View>

          <View style={styles.cc}>
            <Image source={require('../assets/images/clech.png')} style={{ height: 40, width: 40, marginRight: 300, marginTop: -25 }} />

            <Text style={styles.tekstigjasht}>Clench your backside . </Text>
          </View>

          <View style={styles.cc}>
            <Image source={require('../assets/images/posture.png')} style={{ height: 40, width: 40, marginRight: 300, marginTop: -25 }} />

            <Text style={styles.tekstishtat}>Push the ground away from you .</Text>
          </View>




        </View>
      </ScrollView>




    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: ' rgb(211,211,211)',
    paddingBottom:20
  },
  cc: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 25,
    height: 100,
    borderRadius: 10,
    width: 350,
    backgroundColor: 'rgb(240,240,240)',
    shadowOpacity: 0.30,
    shadowRadius: 10.00,
    shadowColor: "#000",
    elevation: 10,


  },
  tekstipare: {
    fontSize: 20,
    textAlign: 'center',
    color: 'rgba(0,0,0,0.4)',
    fontSize: 20,
    lineHeight: 24,
    marginLeft: 50,
    marginTop: -30
  },
  tekstidyt: {
    fontSize: 20,
    textAlign: 'center',
    color: 'rgba(0,0,0,0.4)',
    fontSize: 20,
    lineHeight: 24,
    marginLeft: 50,
    marginTop: -30
  },
  tekstitret: {
    fontSize: 20,
    textAlign: 'center',
    color: 'rgba(0,0,0,0.4)',
    fontSize: 20,
    lineHeight: 24,
    marginLeft: 50,
    marginTop: -30
  },
  tekstikatert: {
    fontSize: 20,
    textAlign: 'center',
    color: 'rgba(0,0,0,0.4)',
    fontSize: 20,
    lineHeight: 24,
    marginLeft: 50,
    marginTop: -30
  },
  tekstipest: {
    fontSize: 20,
    textAlign: 'center',
    color: 'rgba(0,0,0,0.4)',
    fontSize: 20,
    lineHeight: 24,
    marginLeft: 50,
    marginTop: -30
  },
  tekstigjasht: {
    fontSize: 20,
    textAlign: 'center',
    color: 'rgba(0,0,0,0.4)',
    fontSize: 20,
    lineHeight: 24,
    marginLeft: 50,
    marginTop: -30
  },
  tekstishtat: {
    fontSize: 20,
    textAlign: 'center',
    color: 'rgba(0,0,0,0.4)',
    fontSize: 20,
    lineHeight: 24,
    marginLeft: 50,
    marginTop: -30
  }


});
