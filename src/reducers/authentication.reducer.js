let user = localStorage.getItem('user');
const initialState = user ? { loggingIn: true, user } : {};

export function authentication(state = initialState, action) {
    switch (action.type) {
        default:
            return state;
            break;
    }
}
