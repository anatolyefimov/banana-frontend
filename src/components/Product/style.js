import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    Product: {
        padding: 15,
        width: '50%',
    },

    Product__title: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 6
    },

    Product__price: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'tomato'
    },  
    
    Product__image: {
        width: '100%',
        height: 250,
        resizeMode: 'cover'
    },
    
    Product__info: {
        paddingVertical: 10
    }
});
