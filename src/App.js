import React from 'react';
import './config/ReactotronConfig';
import { ToastContainer } from 'react-toastify';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import Routes from './routes';
import { store, persistor } from './store';
import history from './services/history';
import GLobalStyle from './styles/global';

function App() {
    return (
        <div className="App">
            <Provider store={store}>
                <PersistGate persistor={persistor}>
                    <Router history={history}>
                        <Routes />
                        <GLobalStyle />
                        <ToastContainer autoClose={3000} />
                    </Router>
                </PersistGate>
            </Provider>
        </div>
    );
}

export default App;
