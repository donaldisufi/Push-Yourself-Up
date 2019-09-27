import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

export default class RecordeItem extends Component {

    render() {
        return (
            <View style={styles.container}>

                <View style={{ height: 'auto', paddingRight: 330, backgroundColor: '#2EA0D1', marginLeft: 10, marginTop: 30 }}>
                    <Text style={{ fontSize: 17, marginTop: -35 }}   > {this.props.rank} </Text>
                </View>
                <View style={{ paddingLeft: 40, paddingRight: 40 }}>
                    <Text style={{ fontSize: 17, marginTop: -35 }}> {this.props.name} </Text>
                </View>
                <View style={{ paddingLeft: 330 }}>
                    <Text style={{ fontSize: 17, marginTop: -35 }}> {this.props.record} </Text>
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
        marginTop: 50,
        width: -1,
        backgroundColor: '#2EA0D1'

    },
})