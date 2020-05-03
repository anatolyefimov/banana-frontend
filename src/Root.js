import React from 'react';
import { Provider } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import store from '@/redux/store'

import Registration from '@/screens/Registration'
import Login from '@/screens/Login'

const Stack = createStackNavigator();

export default function Root() {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator screenOptions={{ headerShown: false}}>
                    <Stack.Screen name="Registration" component={Registration} />
                    <Stack.Screen name="Login" component={Login}/>
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    )
}


