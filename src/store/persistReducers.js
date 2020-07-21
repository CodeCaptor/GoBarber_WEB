import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default (reducers) => {
    const persistedReducer = persistReducer(
        {
            key: 'gobarber09',
            storage,
            whitelist: ['Auth', 'User'],
        },
        reducers
    );
    return persistedReducer;
};
