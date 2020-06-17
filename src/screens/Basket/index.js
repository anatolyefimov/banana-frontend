import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import {View, Text, SafeAreaView, ScrollView, FlatList, TouchableNativeFeedbackBase} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import getProductsByIds from '@/api/getProductsByIds.js';
import Product from '@/components/Product';
import Button from '@/components/Button';

import style from './style.js';


function Basket({basket, navigation}) {
    
    if (Object.keys(basket).length === 0) {
        return (
            <SafeAreaView style={style.EmptyBasket}>
                <Ionicons name='md-basket' style={style.EmptyBasket__image} />
                <Text style={style.EmptyBasket__text}>Корзина пуста</Text>
                <Button 
                    text='Перейти в каталог' 
                    style={{
                        marginTop: 10,
                        color: 'white',
                        width: '90%'
                    }}
                    onPress={() => navigation.navigate('Каталог')}
                />
            </SafeAreaView>
        );
    }

    let sum = 0;

    const [isLoaded, setIsLoaded] = useState(false);
    const [products, setProducts] = useState([]);
    const [summary, setSummary] = useState(0);
    const [amount, setAmount] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            let prods = await getProductsByIds(Object.keys(basket))
            let prodsMap = prods.reduce((acc, prod) => {
                acc[prod.id] = prod;
                return acc
            }, {})
            let sum = Object.keys(basket).reduce((sum, id) => {
                return sum + prodsMap[id].price * basket[id]
            }, 0)
            let amnt = Object.keys(basket).reduce((amnt, id) => {
                return  amnt + basket[id]
            }, 0)
            setAmount(amnt)
            setSummary(sum)
            setProducts(prods)

        }
    
       fetchData()
    }, [basket])

    return (
         <SafeAreaView style={style.Basket}>
            <ScrollView>
                <View style={style.total}>
                    <Text style={style.total__summary}>
                        Заказ на сумму {summary} ₽
                    </Text>
                    <Text style={style.total__amount}>
                        В корзине {amount} товаров.
                    </Text>
                </View>

                { 
                    products.map(product => <Product 
                        data={{...product}} 
                        onPress={() => navigation.navigate('Details', {...product})} 
                        key={product.id}
                        horisontal
                    />) 
                }

            </ScrollView>
        </SafeAreaView>
        
    );


}

const mapStateToProps = (state) => ({
    basket: state.anonymousBasket
});

export default connect(mapStateToProps)(Basket);
