import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Main from "./components/Main"
import Users from "./components/Users"
import Details from "./components/Details"

const Stack = createStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Main' component={Main}/>
                <Stack.Screen name="Users" component={Users}  />  
                <Stack.Screen name="Details" component={Details}  /> 
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;