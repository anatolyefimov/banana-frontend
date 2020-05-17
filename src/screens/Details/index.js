import * as React from 'react';
import {Button, Dimensions, Image, ScrollView, Text, View} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

const {width} = Dimensions.get('window');

function DetailsScreen({route, navigation}) {
    /* 2. Get the param */
    const {itemId} = route.params;
    const {title} = route.params;
    const {price} = route.params;
    const {image} = route.params;

    return (
        <View style={{flex: 1}}>
            <ScrollView>
                <View
                    style={{
                        width: width,
                        height: hp('65%')
                    }}
                >
                    <Image
                        source={{uri: image,}}
                        style={{
                            flex: 1,
                            width: null,
                            height: null,
                            resizeMode: 'center'
                        }}
                    />
                </View>
                <Text>id: {itemId}</Text>
                <Text>name: {title}</Text>
                <Text>price: ${price}</Text>
                <Text>image: {image}</Text>
                <Button title="Go to list of categories" onPress={() => navigation.navigate('CategoriesList')}/>
                <Button title="Go back" onPress={() => navigation.goBack()}/>
            </ScrollView>
        </View>
    );
}

export default DetailsScreen;
