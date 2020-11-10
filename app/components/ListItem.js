import React from 'react'
import { Component } from 'react'
import {View,Text,Button, StyleSheet} from 'react-native';
import { Image } from 'react-native-elements';
import { vw, vh, vmin, vmax } from 'react-native-expo-viewport-units';
import MyButton from './MyButton'
import * as data from '../settings.json';
const address = data.address;

class ListItem extends Component{
    async deleteUser(){
        const body = {item: this.props.item}
        const response = await fetch(
          address + '/delete',
          {
           method: 'POST',
           body: JSON.stringify(body),
           headers: {'Content-type': 'application/json'}
          }
        )
        const jsonResponse =  await response.json()
        this.props.userDeleted(jsonResponse)
    }
    render(){
        return(
        <View style={styles.main}>
            <Image source = {{uri:'https://i.imgur.com/Q42acWo.png'}} style={styles.image}/>
            <Text style={styles.text}>
            {this.props.item.id}: {this.props.item.login} {this.props.item.pass}
            </Text>
            <MyButton propTitle='Delete' propPress={() => this.deleteUser(this.props.item.id)} style={{float: 'right'}}/>
            <MyButton propTitle='Info' propPress={() => this.props.navigation.navigate("Details",{currentUser: this.props.item})} style={{float: 'right'}}/>
        </View>
        )
    }

}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        alignItems: 'flex-start',
        flexDirection:'row',
        margin: vh(3),
        backgroundColor: 'lightblue',
        maxWidth: vw(100)
    },
    image: {
        resizeMode: "center",
        width: vw(10),
        height: vh(12)
    },
    text: {
        fontSize: vh(3),
        alignSelf: 'center',
        marginLeft: vw(1)
    },
})

export default ListItem;