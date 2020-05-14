import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AsyncStorage, Text } from 'react-native';

import { setAccessToken } from '@/redux/actions';

import User from '@/screens/User';
import Registration from '@/screens/Registration';
import Login from '@/screens/Login';
import { set } from 'react-native-reanimated';

const Stack = createStackNavigator();

function Root({ dispatch, accessToken }) {
    const [isLoaded, setIsLoaded] = useState(false);
    useEffect(() => {
        const fetchToken = async () => {
            let token;
            try {
                token = await AsyncStorage.getItem('accessToken');
            }
            catch (error) {
                console.error(error);
            }
            if (accessToken === '') {
                dispatch(setAccessToken(token));
                // setIsLoaded(true);
                
            }
            
        };

        fetchToken();
    });
    console.log(isLoaded)
    // if (!isLoaded) {
    //     return <Text>Loading...</Text>
    // }
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
    );
}

const mapStateToProps = (state) => ({
    accessToken: state.accessToken
});

export default connect(mapStateToProps)(Root);







