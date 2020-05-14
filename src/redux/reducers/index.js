import { combineReducers } from 'redux';

import accessToken from './accessToken.js';
import userData from './userData.js';


export default combineReducers({
    accessToken,
    userData
});
