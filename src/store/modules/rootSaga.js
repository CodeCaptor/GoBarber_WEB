import { all } from 'redux-saga/effects';
import Auth from './auth/sagas';

export default function* rootSaga() {
    return yield all([Auth]);
}
