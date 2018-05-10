import { userConstants } from '../constants/user.constants';

let user = localStorage.getItem('user');
const initialState = user ? { loggingIn: true, user } : {};

export function authentication(state = initialState, action) {
    switch (action.type) {
        case userConstants.REQUEST_LOGIN:
            return {
                loggingIn: true,
                user: action.user
            };
            break;
        case userConstants.SUCCESS_LOGIN:
            return {
                loggingIn: true,
                user: action.user
            }
            break;
        case userConstants.FAILURE_LOGIN:
            return {
                loggingIn: false,
                error: action.error,
                user: {}
            };
            break;
        case userConstants.LOGOUT:
            return {
                loggingIn: false,
                user: {}
            };
            break;
        default:
            return state;
            break;
    }
}
