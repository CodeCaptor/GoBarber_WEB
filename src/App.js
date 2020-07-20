import React from 'react';
import { Router } from 'react-router-dom';
import Routes from './routes';
import history from './services/history';
import './config/ReactotronConfig';
import GLobalStyle from './styles/global';

function App() {
    return (
        <div className="App">
            <Router history={history}>
                <Routes />
                <GLobalStyle />
            </Router>
        </div>
    );
}

export default App;
