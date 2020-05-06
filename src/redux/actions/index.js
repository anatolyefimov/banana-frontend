export const SET_ACCESS_TOKEN = 'SET_ACCESS_TOKEN'
export const SET_USER_DATA = 'SET_USER_DATA'

export const setAccessToken = (accessToken) => ({
    type: SET_ACCESS_TOKEN,
    accessToken  
})

export const setUserData = (userData) => ({
    type: SET_USER_DATA,
    userData
})