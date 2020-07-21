import { all, takeLatest, put, call } from 'redux-saga/effects';
import api from '~/services/api';
import history from '~/services/history';

import { authActions } from './types';
import { authSuccess, authFailure } from './actions';

export function* auth({ payload }) {
    const { email, password } = payload;
    try {
        const response = yield call(api.post, 'sessions', { email, password });
        const { token, user } = response.data;
        if (!user.provider) {
            console.tron.error('usuário não é prestador de serviço');
            return;
        }
        yield put(authSuccess(token, user));
        history.push('/dashboard');
    } catch (error) {
        yield put(authFailure());
    }
}
export default all([takeLatest(authActions.LOAD_REQUEST, auth)]);
