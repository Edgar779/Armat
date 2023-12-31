import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import './assets/styles/allStyles.scss';
import { Provider } from 'react-redux';
import { store } from './store';
import {initAxiosInterceptors} from "./utils";

initAxiosInterceptors()

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter  basename="/admin">
            <Provider store={store}>
                <App />
            </Provider>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
