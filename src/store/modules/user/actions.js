import { userActions } from './types';

export function userUpdateProfileRequest(name, email, password) {
    return {
        type: userActions.UPDATE_PROFILE_REQUEST,
        payload: { name, email, password },
    };
}
export function userUpdateProfileSuccess() {
    return {
        type: userActions.UPDATE_PROFILE_SUCCESS,
    };
}
export function userUpdateProfileFailure() {
    return {
        type: userActions.UPDATE_PROFILE_FAILURE,
    };
}
