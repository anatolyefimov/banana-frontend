import * as React from 'react';
import {FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Constants from 'expo-constants';

const CATEGORY_DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        name: 'Брюки',
    },
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb2sba',
        name: 'Футболки',
    },
];

function renderItem({item, navigation}) {
    return (
        <View style={styles.container}>
            <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate('Catalog', {categoryName: item.name})}>
                <View style={{marginHorizontal: 5}}>
                    <Text style={styles.title}>
                        {item.name}
                    </Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}

function WholeCategoryList({navigation}) {
    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={CATEGORY_DATA}
                renderItem={({item}) => renderItem({item, navigation})}
                keyExtractor={item => item.id}
            />
        </SafeAreaView>
    );
}

export default WholeCategoryList;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: Constants.statusBarHeight,
    },
    title: {
        fontSize: 18,
        color: '#63CBA7',
        fontWeight: 'bold'
    },
});
