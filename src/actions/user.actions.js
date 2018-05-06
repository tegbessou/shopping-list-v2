import { userConstants } from '../constants/user.constants';
import { history } from '../helpers';

export const userActions = {
    login
};

function login(username) {
    return dispatch => {
        dispatch(request({ username }))
    }

    function request(user) { return { type: userConstants.REQUEST_LOGIN, user } }
}
