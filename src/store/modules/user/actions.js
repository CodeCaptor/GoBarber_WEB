import { userActions } from './types';

export function userRequest(email, password) {
    return {
        type: userActions.LOAD_REQUEST,
        payload: { email, password },
    };
}

export function userSuccess(token, user) {
    return {
        type: userActions.LOAD_SUCCESS,
        payload: { token, user },
    };
}

export function userFailure() {
    return {
        type: userActions.LOAD_FAILURE,
    };
}
