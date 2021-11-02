/**
 * ************************************
 *
 * @module  index.js
 * @author Joe Nagy
 * @date 11/2/2021
 * @description entry point for application. Hangs React app off of #root in index.html
 *
 * ************************************
 */


import React from 'react';
import { render } from 'react-dom';
import App from './App.jsx';

// so webpack can bundle styles
import styles from './scss/application.scss';

render(
    <App />,
    document.getElementById('root')
);