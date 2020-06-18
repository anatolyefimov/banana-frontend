import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default StyleSheet.create({
    EmptyBasket: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: Constants.statusBarHeight,
        padding: 10
    },

    EmptyBasket__image: {
        fontSize: hp('25%'),
        color: 'gray'
    },

    EmptyBasket__text: {
        color: 'gray',
        fontSize: 17
    },

    Basket: {
        flex: 1,
        alignItems: 'center'
    },

    total: {
        flex: 1,
        alignItems: 'center',
        padding: 10
    },

    total__text: {
        fontSize: 16,
    },

    pay: {
        width: '90%'
    }
});
