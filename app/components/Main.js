import { ThemeProvider } from '@react-navigation/native';
import React from 'react'
import { Component } from 'react'
import { StyleSheet, TextInput, View} from 'react-native';
import MyButton from './MyButton'
import { vh, vw } from 'react-native-expo-viewport-units';
import * as data from '../settings.json';
const address = data.address;

class Main extends Component{
    constructor(){
      super()
      this.state = {
        login: '',
        pass: '',
        tab: ''
        
      }
    }
    async sendToServer(){
      const body = {login: this.state.login, pass: this.state.pass}
      const response = await fetch(
        address,
        {
         method: 'POST',
         body: JSON.stringify(body),
         headers: {'Content-type': 'application/json'}
        }
      )
      const jsonResponse =  await response.json()
      if (jsonResponse == 'error'){
        alert('User exist')
      } else {
        this.setState({
          tab: jsonResponse
        })
        this.props.navigation.navigate("Users")
      }
    }
    render(){
        return(
            <View style={styles.main}>
                <TextInput
                  ref = {(el) => {this.login = el}}
                  style={styles.input}
                  onChangeText={(login) => this.setState({login})}
                  placeholder= 'Login...'
                  value={this.state.login}
                />
                <TextInput
                  ref = {(el) => {this.pass = el}}
                  style={styles.input}
                  onChangeText={(pass) => this.setState({pass})}
                  placeholder= 'Password...'
                  value={this.state.pass}
                />
                <MyButton propTitle='Register' propPress={this.sendToServer.bind(this)}/>
            </View>
            );
    }
}

const styles = StyleSheet.create({
    main: {
      flex: 1, backgroundColor: 'lightblue', justifyContent: 'center', alignItems: 'center'
    },
    input: {
      width: vw(40), height: vh(8), borderColor: 'grey', borderWidth: 1, margin: 2
    }

})


export default Main;

