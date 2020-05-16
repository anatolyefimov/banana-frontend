import * as React from 'react';
import {View, Text, FlatList, SafeAreaView, StyleSheet, TouchableOpacity, Button, Image} from 'react-native';
import Constants from 'expo-constants';

//
// function DetailsScreen() {
//     return (
//         <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//             <Text>Details Screen</Text>
//         </View>
//     );
// }

function DetailsScreen({ route, navigation }) {
    /* 2. Get the param */
    const { itemId } = route.params;
    const { title } = route.params;
    const { price } = route.params;
    const { image } = route.params;
    // const { title } = itemId.title;
    console.log({itemId});
    console.log(title);
    console.log(price);
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Details Screen</Text>
            <Text>id: {itemId}</Text>
            <Text>name: {title}</Text>
            <Text>price: {price}</Text>
            <Text>image: {image}</Text>
            <Image
                style={styles.tinyLogo}
                source={{
                    uri: image,
                }}
            />
            <Button
                title="Go to Details... again"
                onPress={() =>
                    navigation.push('Details', {
                        itemId: Math.floor(Math.random() * 100),
                    })
                }
            />
            <Button title="Go back" onPress={() => navigation.goBack()} />
        </View>
    );
}

export default DetailsScreen;

const styles = StyleSheet.create({
    tinyLogo: {
        width: 50,
        height: 50,
    },
});
