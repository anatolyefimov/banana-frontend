import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {AsyncStorage} from 'react-native';
import {Ionicons } from '@expo/vector-icons';


import { setUserData, setAnonymousBasket } from '@/redux/actions';
import fetchUserData from '@/api/fetchUserData.js'
import User from '@/screens/User';
import Registration from '@/screens/Registration';
import Login from '@/screens/Login';
import Loading from '@/screens/Loading';
import MainScreen from '@/screens/Main';
import Basket from '@/screens/Basket';
import CatalogScreen from '@/screens/Catalog';
import Categories from '@/screens/Categories';
import Details from '@/screens/Details';
import BackImage from '@/components/BackImage'


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function Root({ dispatch, isLoggedIn }) {
    const [isLoaded, setIsLoaded] = useState(false);
    useEffect(() => {
        const fetchData = async () => {
            let token;
            let anonymousBasket;
            try {
                token = await AsyncStorage.getItem('accessToken');
                // await AsyncStorage.clear()
                anonymousBasket = await AsyncStorage.getItem('anonymousBasket');
                anonymousBasket = JSON.parse(anonymousBasket)
                anonymousBasket = anonymousBasket || {}
            } catch (error) {
                console.error(error);
            }

            if (token) {
                let userData;
                try {
                    userData = await fetchUserData(token);
                    userData.isLoggedIn = true;
                }
                catch(error) {
                    console.error(error);
                }
              
                dispatch(setUserData(userData))
            }
            dispatch(setAnonymousBasket(anonymousBasket))
            setIsLoaded(true);
        };

        fetchData();

    }, []);

    if (!isLoaded) {
        return <Loading/>;
    }

    function Profile() {
        return (
            <Stack.Navigator screenOptions={{headerShown: false}}>
                {isLoggedIn ? (
                    <Stack.Screen name="User" component={User}/>
                ) : (
                    <Stack.Screen name="Login" component={Login}/>
                )}
                <Stack.Screen name="Registration" component={Registration}/>
            </Stack.Navigator>
        );
    }

    function Catalog() {
        return (
            <Stack.Navigator screenOptions={{
                headerBackImage: () => <BackImage/>,
                headerBackTitleVisible: false,
                headerTitleAlign: 'left'
            }}>
                <Stack.Screen 
                    name="Categories"
                    component={Categories} 
                    options={{ title: 'Категории'}}
                />
                <Stack.Screen 
                    name="Catalog" 
                    component={CatalogScreen}
                    options={({ route }) => ({ title: route.params.categoryName })}
                />
                <Stack.Screen name="Details" component={Details}/>
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
    isLoggedIn : userData.isLoggedIn
})

export default connect()(Root);

