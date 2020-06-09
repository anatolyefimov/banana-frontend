import { SET_ANONYMOUS_BASKET } from '@/redux/actions';

const anonymousBasket = (state = {}, action) => {
    switch (action.type) {
    case SET_ANONYMOUS_BASKET :
        return action.anonymousBasket;
    default:
        return state;
    }
};

export default anonymousBasket;
