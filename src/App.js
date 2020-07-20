import React from 'react';
import './config/ReactotronConfig';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import Routes from './routes';
import store from './store';
import history from './services/history';
import GLobalStyle from './styles/global';

function App() {
    return (
        <div className="App">
            <Provider store={store}>
                <Router history={history}>
                    <Routes />
                    <GLobalStyle />
                </Router>
            </Provider>
        </div>
    );
}

export default App;
