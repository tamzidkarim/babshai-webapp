import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from './App';
import { AppProvider } from './context/Context';


const app = (
    <AppProvider>
        <App />
    </AppProvider>
);

ReactDOM.render(app, document.getElementById('root'));
