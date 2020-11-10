import React from 'react'
import { Component } from 'react'
import {View,Text,StyleSheet} from 'react-native';
import { Image } from 'react-native-elements';
import { vw, vh, vmin, vmax } from 'react-native-expo-viewport-units';


class Details extends Component{
    render(){
        const data = this.props.route.params.currentUser
        return(
        <View style={styles.main}>
            <Image source = {{uri:'https://i.imgur.com/Q42acWo.png'}} style={styles.image}/>
        <Text style={styles.text}>Login: {data.login}</Text>
        <Text style={styles.text}>Password: {data.pass}</Text>
        <Text style={styles.textDate}>Date: {data.date}</Text>
        </View>
        )
    }

}

const styles = StyleSheet.create({
    main: {
        flex: 1, justifyContent: 'center', alignItems: 'center'
    },
    image: {
        width: vw(20), height: vh(24),resizeMode: 'center'
    },
    text: {
        fontSize: vh(5)
    },
    textDate: {
        fontSize: vh(3)
    }
})

export default Details;