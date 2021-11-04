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
// MUI Components 
import Button from '@mui/material/Button';


class Login extends Component {
    constructor(props) {
        super(props);
    }

    render() {     
        return (
            <div>
                <div id="login">
                    <h1>This is an example of the Authorization Code flow</h1>

                    <Button 
                        variant="contained"
                        href="/api/authentication/login"
                    >Log in with Spotify</Button>
                </div>
            </div>
        );
    }
}

export default Login;