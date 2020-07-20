import React from 'react';
import { Router } from 'react-router-dom';
import Routes from './routes';
import history from './services/history';
import './config/ReactotronConfig';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router history={history}>
        <Routes />
      </Router>
    </div>
  );
}

export default App;
