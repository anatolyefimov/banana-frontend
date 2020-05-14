import React from 'react';
import { View, Text} from 'react-native';

function Catalog() {
    return (
        <View style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <Text>Каталог</Text>
            <Text>товары по категориям</Text>
        </View>
    );
}

export default Catalog;
