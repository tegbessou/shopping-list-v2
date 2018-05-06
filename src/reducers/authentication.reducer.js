import { userConstants } from '../constants/user.constants';

let user = localStorage.getItem('user');
const initialState = user ? { loggingIn: true, user } : {};

export function authentication(state = initialState, action) {
    switch (action.type) {
        case userConstants.REQUEST_LOGIN:
        console.log('hgues');
            return {
                loggingIn: true,
                user: action.user
            };
            break;
        default:
            return state;
            break;
    }
}
