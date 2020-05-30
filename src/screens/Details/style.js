import {Dimensions, StyleSheet} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

const {width} = Dimensions.get('window');

export default StyleSheet.create({
    container_image: {
        width: width,
        height: hp('65%')
    },

    image: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'center'
    },
});
