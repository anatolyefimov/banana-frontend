import React, {useState, useEffect} from 'react';
import {FlatList, SafeAreaView } from 'react-native';

import Loading from '@/screens/Loading';
import Product from '@/components/Product';
import getCatalog from '@/api/getCatalog.js';


function CatalogScreen({route, navigation}) {
    const [isLoaded, setIsLoaded] = useState(false);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getCatalog(route.params.categoryName)
            .then((products) => {
                setProducts(products);
                setIsLoaded(true);
            });
    }, []);

    if (!isLoaded) {
        return <Loading />;
    }

    return (
        <SafeAreaView>
            <FlatList
                data={products}
                renderItem={({item}) =>
                    <Product
                        data={{...item}}
                        onPress={ () => navigation.navigate('Details', {...item}) }
                    />
                }
                keyExtractor={item => item.id}
                numColumns={2}
            />
        </SafeAreaView>
    );
}

export default CatalogScreen;
