import { Api } from './index';


export async function login(user) {
    return await Api.post('login', {
        email: user.email,
        password: user.password
    });
}

export function signup(user) {
    return Api.post('user/signup', {
        name: user.name,
        email: user.email,
        password: user.password
    });
}

export async function getAuthData() {
    return await Api.get('auth_data');
}

export function logout() {
    return Api.post('user/logout', {});
}
