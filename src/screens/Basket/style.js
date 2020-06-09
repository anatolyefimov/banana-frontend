import {StyleSheet} from 'react-native';
import Constants from 'expo-constants';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default StyleSheet.create({
    EmptyBasket: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: Constants.statusBarHeight,
    },

    EmptyBasket__image: {
        fontSize: hp('25%'),
        color: 'gray'
    },

    EmptyBasket__text: {
        color: 'gray',
        fontSize: 17
    }
});
