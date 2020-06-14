import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import {View, Text, SafeAreaView, ScrollView, FlatList} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import getProductsByIds from '@/api/getProductsByIds.js';
import Product from '@/components/Product';

import style from './style.js';


function Basket({basket, navigation}) {
    
    if (Object.keys(basket).length === 0) {
        return (
            <SafeAreaView style={style.EmptyBasket}>
                <Ionicons name='md-basket' style={style.EmptyBasket__image} />
                <Text style={style.EmptyBasket__text}>Корзина пуста</Text>
            </SafeAreaView>
        );
    }

    const [isLoaded, setIsLoaded] = useState(false);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            let prods = await getProductsByIds(Object.keys(basket))
            console.log(prods)
            setProducts(prods)
        }
    
       fetchData()
    }, [basket])

    return (
         <SafeAreaView style={style.Basket}>
            <ScrollView>
                <View style={style.total}>
                    <Text style={style.total__summary}>
                        Заказ на сумму {} ₽
                    </Text>
                    <Text style={style.total__amount}>
                        В корзине {Object.keys(basket).length} товаров.
                    </Text>
                </View>

                {  products.map(product => <Product data={{...product}} onPress={() => navigation.navigate('Details', {...product})} key={product.id}/>) }

            </ScrollView>
        </SafeAreaView>
        
    );


}

const mapStateToProps = (state) => ({
    basket: state.anonymousBasket
});

export default connect(mapStateToProps)(Basket);
