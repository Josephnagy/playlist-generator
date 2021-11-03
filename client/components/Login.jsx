/**
 * ************************************
 *
 * @module  Login.jsx
 * @author Joe Nagy
 * @date 11/2/2021
 * @description Login Page 
 *
 * ************************************
 */

import React, { Component } from 'react';
import { render } from 'react-dom';

class Login extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div id="login">
                    <h1>This is an example of the Authorization Code flow</h1>
                    <a href="/api/authentication/login">Log in with Spotify</a>
                </div>
            </div>
        );
    }
}

export default Login;