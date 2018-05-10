import { userConstants } from '../constants/user.constants';
import { history } from '../helpers';
import { userServices } from '../services/user.services';

export const userActions = {
    login,
    logout,
    register
};

function login(login, password) {
    return dispatch => {
        dispatch(request({ login }));

        userServices.login(login, password)
            .then(
                user => {
                    dispatch(success(user));
                },
                error => {
                    dispatch(failure(error));
                }
            );
    }

    function request(user) { return { type: userConstants.REQUEST_LOGIN, user } }
    function success(user) { return { type: userConstants.SUCCESS_LOGIN, user } }
    function failure(error) { return { type: userConstants.FAILURE_LOGIN, error } }
}

function logout() {
    userServices.logout();

    return { type: userConstants.LOGOUT }
}

function register(user) {
    return dispatch => {
        dispatch(request({ user }));

        userServices.register(user)
            .then(
                user => {
                    dispatch(success(user));
                },
                error => {
                    dispatch(failure(error))
                }
            )
    }

    function request(user) { return { type: userConstants.REQUEST_REGISTER, user } }
    function success(user) { return { type: userConstants.SUCCESS_REGISTER, user } }
    function failure(error) { return { type: userConstants.FAILURE_REGISTER, error } }
}
