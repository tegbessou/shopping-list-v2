import { alertConstants } from '../constants/alert.constants';

export const alertActions = {
    success,
    error,
    clear
};

function success() {
    return { type: alertConstants.SUCCESS };
}

function error(error) {
    return { type: alertConstants.ERROR, error };
}

function clear() {
    return { type: alertConstants.CLEAR }
}