import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux'
import {BrowserRouter} from 'react-router-dom';
import 'bootstrap-css-only/css/bootstrap.css';
import {store} from './utils/store'


ReactDOM.render(
        <Provider store={store}>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </Provider>, document.getElementById('root'));