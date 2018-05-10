export const userServices = {
    login,
    logout,
    register
};

function login(login, password) {
    if ('Pedro' !== login) {
        return Promise.reject('Login failed');
    }

    //If you have an api to check login
    /*return fetch('/url/ressources', requestOptions)
        .then(response => {
            console.log(response);

            return response.json(); //Return user to the next step
        })
        .then(user => {
            console.log(user); //We see the user

            if (user) {
                //Save user in local storage
                localStorage.setItem('user', JSON.stringify(user));
            }

            return user;
        });
    */

    const user = { 
        login: login,
        password: password
    };

    localStorage.setItem('user', JSON.stringify(user));

    return Promise.resolve(user);
}

function logout() {
    localStorage.removeItem('user');
}

function register(user) {
    if ('Pedro' !== user.login) {
        return Promise.reject('Registration failed');
    }

    return Promise.resolve('OK');
}