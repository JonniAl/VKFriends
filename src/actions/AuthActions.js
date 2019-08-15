export const AUTH_SUCCESS = 'AUTH_SUCCESS';
export const AUTH_FAIL = 'AUTH_FAIL';

export function authSuccessAction(authData) {
    return {
        type: AUTH_SUCCESS,
        payload: authData
    }
}