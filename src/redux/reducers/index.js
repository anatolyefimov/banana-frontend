import { combineReducers } from 'redux';

import userData from './userData.js';
import anonymousBasket from './anonymousBasket.js';


export default combineReducers({
    userData,
    anonymousBasket
});
