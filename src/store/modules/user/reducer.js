import produce from 'immer';
import { INITIAL_STATE, userActions } from './types';
import { authActions } from '~/store/modules/auth/types';

export default function auth(state = INITIAL_STATE, action) {
    switch (action.type) {
        case authActions.LOAD_SUCCESS:
            return produce(state, (draft) => {
                draft.profile = action.payload.user;
            });
        case userActions.REGISTER_PROFILE_REQUEST:
            return produce(state, (draft) => {
                draft.loading = true;
            });
        case userActions.UPDATE_PROFILE_SUCCESS:
            return produce(state, (draft) => {
                draft.profile = action.payload.data;
                draft.loading = false;
            });
        case userActions.UPDATE_PROFILE_FAILURE:
            return produce(state, (draft) => {
                draft.loading = false;
            });
        default:
            return state;
    }
}
