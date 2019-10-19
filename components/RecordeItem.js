import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons';

export default class RecordeItem extends Component {

    render() {
        return (

            <View style={styles.container}>



                <View style={styles.blloki} >

                    <View>
                        <Ionicons Ionicons={this.props.Ionicons} name="md-trophy" size={60} color={this.props.color} style={{ marginRight: 250, marginTop: -10 }} />
                        <Text style={styles.tekstipare} Color={this.props.color}>{this.props.rank}</Text>

                    </View>


                    <Text style={styles.tekstidyt}> {this.props.name} </Text>


                    <Text style={styles.tekstitret}> {this.props.record} </Text>
                    <View>
                        <Text>{this.props.myRank}</Text>
                    </View>

                </View>

            </View>

        )
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,


    },
    blloki: {

        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 25,
        height: 80,
        borderRadius: 100,
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
        fontSize: 20,
        lineHeight: 24,
        marginRight: 250,
        marginTop: -50,
        color: 'black',
    },
    tekstidyt: {
        fontSize: 20,
        textAlign: 'center',
        fontSize: 20,
        lineHeight: 28,
        marginLeft: 30,
        marginTop: -20,
        color: 'rgba(0,0,0,0.4)',
    },
    tekstitret: {
        fontSize: 20,
        textAlign: 'center',
        fontSize: 20,
        lineHeight: 20,
        marginLeft: 250,
        marginTop: -20,
        color: 'rgba(0,0,0,0.4)',
    },





})