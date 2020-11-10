import React from 'react'
import { Component } from 'react'
import {View,Text,StyleSheet,TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import { vh, vw, vmax, vmin } from 'react-native-expo-viewport-units';

class MyButton extends Component{
    render(){
        return(
            <TouchableOpacity style={styles.main} onPress={() => this.props.propPress()}>
                <Text style={styles.text}>{this.props.propTitle}</Text>
            </TouchableOpacity>
        )
    }
}

MyButton.propTypes = {
    propTitle: PropTypes.string.isRequired,
    propPress: PropTypes.func.isRequired,
}

const styles = StyleSheet.create({
    main: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: vh(1),
        width: vw(10),
        maxWidth: vw(20),
        maxHeight: vh(5),
        backgroundColor: 'grey',
        marginLeft: vh(0.5),
        alignSelf: 'center',
        minWidth: vw(20)
    },
    text: {
        fontSize: vh(2),
        color: 'lightblue'
    }
})
   

export default MyButton;