export const SET_ANONYMOUS_BASKET = 'SET_ANONYMOUS_BASKET';
export const SET_USER_DATA = 'SET_USER_DATA';

export const setUserData = (userData) => ({
    type: SET_USER_DATA,
    userData
});

export const setAnonymousBasket = (anonymousBasket) => ({
    type: SET_ANONYMOUS_BASKET,
    anonymousBasket
})


