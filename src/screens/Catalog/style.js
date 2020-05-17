import {StyleSheet} from 'react-native';
import Constants from 'expo-constants';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

export default StyleSheet.create({
    container: {
        flex: 1,
        marginTop: Constants.statusBarHeight,
    },
    price_text: {
        fontSize: 14,
        fontWeight: 'bold'
    },
    price_view: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 5
    },
    title: {
        fontSize: 18,
        color: '#63CBA7',
        fontWeight: 'bold'
    },
    image: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'contain'
    },
    container_image: {
        width: wp('44%'),
        height: wp('55%'),
        marginBottom: 10
    },
    container_margin: {
        width: wp('44%'),
        marginHorizontal: 10,
        marginTop: 10
    },
});
