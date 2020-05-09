import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AsyncStorage } from 'react-native'

import { setAccessToken } from '@/redux/actions'

import User from '@/screens/User'
import Registration from '@/screens/Registration'
import Login from '@/screens/Login'

const Stack = createStackNavigator();

function Root({ dispatch, accessToken }) {

    useEffect(() => {
        const fetchToken = async () => {
            let token
            try {
                token = await AsyncStorage.getItem('accessToken');
            }
            catch (error) {
                console.error(error)
            }
            dispatch(setAccessToken(token))
        };

        fetchToken();
    });

    return (
  
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                {accessToken ? (
                    <Stack.Screen name="User" component={User} />
                ) : (
                    <Stack.Screen name="Login" component={Login} />
                )}
                <Stack.Screen name="Registration" component={Registration}/>
            </Stack.Navigator>
        </NavigationContainer> 
    )
}

const mapStateToProps = (state) => ({
    accessToken: state.accessToken
})

export default connect(mapStateToProps)(Root);







