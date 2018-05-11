import { alertConstants } from '../constants/alert.constants';

export function alert(state = {}, action) {
    switch (action.type) {
        case alertConstants.ERROR:
            return {
                show: true,
                error: action.error
            };
            break;
        case alertConstants.SUCCESS:
            return {
                show: false,
                error: ''
            }
            break;
        case alertConstants.CLEAR:
            return {
                show: false,
                error: ''
            }
        default:
            return state;
            break;
    }
}
