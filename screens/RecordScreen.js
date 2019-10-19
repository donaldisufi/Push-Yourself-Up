import React, { Component } from 'react'
import { Text, View, StyleSheet, ScrollView ,ActivityIndicator} from 'react-native';
import axios from 'axios';
import RecordItem from '../components/RecordeItem';
import { MonoText } from '../components/StyledText';
export default class RecordScreen extends Component {
    static navigationOptions = {
        title: "Record",
        headerTintColor: 'black',
        headerTitleStyle: {
            fontSize: 20,
            fontFamily: 'bold',

        },

    }
    constructor(props) {
        super(props);
        this.state = {
            records: [],
            user: "",
            loading:false
        }
        this.mounted=false;
    }

    componentDidMount() {
        const didFocusSubscription = this.props.navigation.addListener(
            'didFocus',
            payload => {
                this.setState({loading:true});
              this.mounted=true;
            this.mounted && axios.get(`/records/`)
            .then(response => {
                const user = response.data;

                this.setState({ records: user },function(){
                    console.log("Tdhanaet e state : ")
                    console.log(this.state.records[0].name);
                    this.setState({loading:false})

                })


            })
            .catch(error =>{
                console.log(error);
                this.setState({loading:false})
                  
             } );
            console.debug('didBlur', payload);
          }

        );

           const didBlurSubscription = this.props.navigation.addListener(
          'didBlur',
          payload => {
             this.mounted=false;
             this.setState({
                records: [],
                user: "",
                loading:false
             })
            console.debug('didBlur', payload);
          }
        );
    
           
    }

    render() {
        if(this.state.loading){
            return(
                <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
                    <ActivityIndicator />
                </View>
            )
        }
        
        return (

            <ScrollView>


                <View style={styles.container}>
                    <View style={{
                        color: 'rgba(0,0,0,0.4)',
                        lineHeight: 24,
                        justifyContent: 'center',
                        alignItems: 'center',
                        textAlign:'center',
                        marginTop: -5,
                        height: 200,
                        borderBottomRightRadius: 100,
                        borderBottomLeftRadius: 100,

                        width: 400,
                        backgroundColor: 'rgb(240,240,240)',
                        shadowOpacity: 0.30,
                        shadowRadius: 10.00,
                        shadowColor: "#000",
                        elevation: 20,
                    }}>
                        <Text style={{
                            fontSize: 30,
                            textAlign: 'center',
                            lineHeight: 30,
                            marginTop: 20,
                            color: 'rgba(0,0,0,0.4)',
                            fontFamily: 'thin',









                        }}> MY RANK </Text><Text style={{fontFamily:'bold',fontSize:50,marginRight:20,padding:20,color:'rgba(0,0,0,0.4)'}}> {this.state.records.length !== 0 ? this.state.records[this.state.records.length-1].myRank:null}</Text>

                    </View >

                    {
                        this.state.records.length !== 0 ?

                            this.state.records.map((record, index) => {
                              if(index == 15 ){return null }else return  <RecordItem key={index} rank={record.rank} record={record.record} name={record.name} myRank={record.myRank} color={record.rank === 1 ? "gold" : record.rank === 2 ? "#868992" : record.rank === 3 ? '#cd7f32' : 'white'}  > </RecordItem>
                            
                            }
                            ) : null
                    }
                </View>

            </ScrollView >
        )
    }

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
          paddingBottom:20,


    },



});