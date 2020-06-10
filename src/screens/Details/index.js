import React from 'react';
import {Image, ScrollView, Text,  View, AsyncStorage} from 'react-native';
import {connect} from 'react-redux';

import {setAnonymousBasket} from '@/redux/actions';
import Button from '@/components/Button';
import {FontAwesome5 } from '@expo/vector-icons';
import BackImage from '@/components/BackImage'

import style from './style.js';


function Details({
    route, 
    dispatch, 
    basket, 
    navigation
}) {
    const {id, title, price, image} = route.params;
    async function addToBasket() {
        console.log(id);
        basket[id] = basket[id] + 1 || 1;

        try {
            await AsyncStorage.setItem('anonymousBasket', JSON.stringify(basket));
            dispatch(setAnonymousBasket({...basket}));
        }
        catch (error) {
            console.error(error);
        }
        
        navigation.setOptions(({
            title: 'Товар добавлен в корзину',
            headerTintColor: 'white',
            headerStyle: {
                backgroundColor: 'limegreen',
            },
            headerTitleAlign: 'center',
            headerBackImage: () => null,
            headerRight: () => <FontAwesome5 
                name='arrow-right' 
                size={20}
                color='white'
                style={{
                    paddingRight: 15
                }}
                onPress={ () => navigation.navigate('Корзина')}
            />
        }));

        setTimeout(() => {
            navigation.setOptions(({
                title: 'Details',
                headerTintColor: 'black',
                headerStyle: {
                    backgroundColor: 'white',
                },
                headerTitleAlign: 'left',
                headerBackImage: () => <BackImage />,
                headerRight: () => null
                
            }));
    
        }, 2000)
        
    }

    return (
        <ScrollView>
            <View style={style.Details}>
                <Image source={{uri: image}} style={style.Details__image} />
                <Text style={style.Details__title}>{title}</Text>
                <Text style={style.Details__price}>{price} ₽</Text>
                <Button style={style.Details__toBasket} onPress={addToBasket} text='В корзину'/>
            </View>
        </ScrollView>
    );
}


const mapStateToProps = (state) => ({
    basket: state.anonymousBasket
});

export default connect(mapStateToProps)(Details);
