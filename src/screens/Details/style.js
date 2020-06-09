import {Dimensions, StyleSheet} from 'react-native';


export default StyleSheet.create({
    Details: {
        padding: 20
    },

    Details__image: {
        width: '100%',
        height: Dimensions.get('window').height * 0.7,
        resizeMode: 'cover'
    },

    Details__title: {
        fontSize: 20,
        paddingTop: 15
    },

    Details__price: {
        fontSize: 20,
        paddingTop: 15,
        color: 'tomato'
    },

    Details__toBasket: {
        marginTop: 20,
        backgroundColor: 'tomato',
        color: 'white'
    }
});
