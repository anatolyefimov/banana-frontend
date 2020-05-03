import { SET_ACCESS_TOKEN } from '@/redux/actions'

const accessToken = (state = '', action) => {
    switch (action.type) {
        case SET_ACCESS_TOKEN:
            return action.accessToken
        default:
            return state
    }
}

export default accessToken;