import React from 'react'
import { Component } from 'react'
import { FlatList, StyleSheet, SafeAreaView, Button, View, TextInput, Text, Alert } from 'react-native';
import ListItem from './ListItem'
import * as data from '../settings.json';
import { vw } from 'react-native-expo-viewport-units';
const address = data.address;

class Users extends Component{
    constructor(){
        super()
        this.state = {
            users: []
        }
    }
    componentDidMount(){
        this.getUsers()
    }
    async getUsers(){
        const response = await fetch(
          address + '/getUsers',
        )
        const jsonResponse =  await response.json()
        this.setState({
            users: jsonResponse
        })
    }
    userDeleted(jsonResponse){
       this.setState({
        users: jsonResponse
       })
    }
    render(){
        const data = this.state.users
        const renderItems = ({item}) => {
            return(
                <View style={{backgroundColor: 'lightblue', flex: 1, maxWidth: vw(100)}}>
                    <ListItem navigation = {this.props.navigation} item={item} userDeleted={this.userDeleted.bind(this)}/>
                </View>
            )
        } 
        return(
            <SafeAreaView>
            <FlatList
                data={data}
                renderItem={renderItems}
                keyExtractor={(item) => item.id.toString()}
            />
            </SafeAreaView>
        )
    }

}

export default Users;