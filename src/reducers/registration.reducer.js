import { userConstants } from '../constants/user.constants';

export function registration(state = {}, action) {
    switch (action.type) {
        case userConstants.REQUEST_REGISTER:
            return {};
            break;
        case userConstants.SUCCESS_REGISTER:
            return {};
            break;
        case userConstants.FAILURE_REGISTER:
            return { error: action.error };
            break;
        default:
            return {};
            break;
    }
}