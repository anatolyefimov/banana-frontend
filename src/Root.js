import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {AsyncStorage} from 'react-native';

import {setAccessToken} from '@/redux/actions';

import User from '@/screens/User';
import Registration from '@/screens/Registration';
import Login from '@/screens/Login';
import Loading from '@/screens/Loading';
import MainScreen from '@/screens/Main';
import Catalog from '@/screens/Catalog';
import Basket from '@/screens/Basket';

import {Ionicons} from '@expo/vector-icons';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function Root({dispatch, accessToken}) {
    const [isLoaded, setIsLoaded] = useState(false);
    useEffect(() => {
        const fetchToken = async () => {
            let token;
            try {
                token = await AsyncStorage.getItem('accessToken');
            } catch (error) {
                console.error(error);
            }
            if (accessToken === '') {
                dispatch(setAccessToken(token));
                setIsLoaded(true);

            }

        };

        fetchToken();
    });

    if (!isLoaded) {
        return <Loading/>;
    }

    function Profile() {
        return (
            <Stack.Navigator screenOptions={{headerShown: false}}>
                {accessToken ? (
                    <Stack.Screen name="User" component={User}/>
                ) : (
                    <Stack.Screen name="Login" component={Login}/>
                )}
                <Stack.Screen name="Registration" component={Registration}/>
            </Stack.Navigator>
        );
    }


    return (
        <Tab.Navigator
            screenOptions={({route}) => ({

                tabBarIcon: ({color, size}) => {
                    let iconName;

                    if (route.name === 'Главная') {
                        iconName = 'ios-home';
                    } else if (route.name === 'Каталог') {
                        iconName = 'ios-list';
                    } else if (route.name === 'Корзина') {
                        iconName = 'md-basket';
                    } else if (route.name === 'Профиль') {
                        iconName = 'ios-person';
                    }

                    return <Ionicons name={iconName} size={size} color={color}/>;
                },
            })}
            tabBarOptions={{
                activeTintColor: 'tomato',
                inactiveTintColor: 'gray',
            }}
        >
            <Tab.Screen name="Главная" component={MainScreen}/>
            <Tab.Screen name="Каталог" component={Catalog}/>
            <Tab.Screen name="Корзина" component={Basket}/>
            <Tab.Screen name="Профиль" component={Profile}/>
        </Tab.Navigator>
    );

}

const mapStateToProps = (state) => ({
    accessToken: state.accessToken
});

export default connect(mapStateToProps)(Root);

