import { all, takeLatest, put, call } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import api from '~/services/api';
import history from '~/services/history';
import { userActions } from './types';
import { userUpdateProfileSuccess, userUpdateProfileFailure } from './actions';

export function* signup({ payload }) {
    const { name, email, password } = payload;
    try {
        yield call(api.post, 'users', {
            name,
            email,
            password,
            provider: true,
        });
        yield put(userUpdateProfileSuccess());
        history.push('/');
        history.go();
    } catch (error) {
        toast.error('Falha no cadastro, verifique seus dados.');
        yield put(userUpdateProfileFailure);
    }
}
export default all([takeLatest(userActions.REGISTER_PROFILE_SUCCESS, signup)]);
