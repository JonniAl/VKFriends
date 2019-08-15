import {FRIENDS_SUCCESS, FRIENDS_FAIL} from "../actions/FriendsActions";


const initialState = {
    items: [],
    isLoaded: false
};

export function friendsReducer(state = initialState, action) {
    switch (action.type) {
        case FRIENDS_SUCCESS:
            return {
                ...state, items: action.payload, isLoaded: true
            };
        case FRIENDS_FAIL:
            return {};
        default:
            return state
    }
}