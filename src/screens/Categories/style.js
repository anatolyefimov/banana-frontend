import {StyleSheet} from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        flex: 1,
        marginTop: Constants.statusBarHeight,
    },
    title: {
        fontSize: 18,
        color: '#63CBA7',
        fontWeight: 'bold'
    }
});
