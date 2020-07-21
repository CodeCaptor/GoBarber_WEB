import { userActions } from './types';

export function userRequest(name, email, password) {
    return {
        type: userActions.LOAD_REQUEST,
        payload: { name, email, password },
    };
}
export function userSuccess() {
    return {
        type: userActions.LOAD_SUCCESS,
    };
}
export function userFailure() {
    return {
        type: userActions.LOAD_FAILURE,
    };
}
