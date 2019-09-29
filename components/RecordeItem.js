import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
export default class RecordeItem extends Component {

    render() {
        return (

            <View style={styles.container}>


                <View style={styles.blloki}>

                    <View style={{
                        marginRight: 250, marginLeft: 10, borderRadius: 20, height: 'auto', marginTop: 5

                    }}>


                        <Ionicons name="md-trophy" size={32} color="gold" />

                    </View>

                    <View style={{ paddingLeft: 40, paddingRight: 40, height: 'auto' }}>
                        <Text style={{
                            fontSize: 17, marginTop: -25, justifyContent: 'center', alignItems: 'center', color: 'white'
                        }}> {this.props.name} </Text>
                    </View>

                    <View style={{ marginLeft: 250, height: 'auto' }}>
                        <Text style={{
                            fontSize: 17, marginTop: -25, color: 'white'
                        }}> {this.props.record} </Text>
                    </View>

                    <View style={{ marginLeft: 40, height: 'auto' }}>
                        <Text style={{
                            fontSize: 50, marginTop: -1735, marginLeft: 70, color: 'white'
                        }}> {this.props.myRank} </Text>
                    </View>

                </View>
            </View >

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
        flex: 1,
        marginTop: 50,
        height: 50,
        backgroundColor: '#2EA0D1',
        borderRadius: 20,
        width: 300,



    },




})