import { combineReducers } from "redux";
import { authReducer } from "./AuthReducer";
import { friendsReducer } from "./FriendsReducer";


export const rootReducer = combineReducers({
    auth: authReducer,
    friends: friendsReducer,
});