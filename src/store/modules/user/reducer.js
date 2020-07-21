import produce from 'immer';
import { INITIAL_STATE } from './types';
import { authActions } from '~/store/modules/auth/types';

export default function auth(state = INITIAL_STATE, action) {
    switch (action.type) {
        case authActions.LOAD_SUCCESS:
            return produce(state, (draft) => {
                draft.profile = action.payload.user;
            });

        default:
            return state;
    }
}
