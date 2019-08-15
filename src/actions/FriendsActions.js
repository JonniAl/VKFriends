export const FRIENDS_SUCCESS = 'FRIENDS_SUCCESS';
export const FRIENDS_FAIL = 'FRIENDS_SUCCESS';

export function friendsSuccessAction(friendsData) {
    return {
        type: FRIENDS_SUCCESS,
        payload: friendsData
    }
}