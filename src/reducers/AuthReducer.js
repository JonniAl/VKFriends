import { AUTH_SUCCESS, AUTH_FAIL } from "../actions/AuthActions";


const initialState = {
    access_token: '',
    expires_in: 0,
    user_id: 0,
};

export function authReducer(state = initialState, action) {
    switch (action.type) {
        case AUTH_SUCCESS:
            return {
                ...state, ...action.payload
            };
        case AUTH_FAIL:
            return {};
        default:
            return state
    }
}