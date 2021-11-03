/**
 * ************************************
 *
 * @module  UserInfo.jsx
 * @author Joe Nagy
 * @date 11/2/2021
 * @description Displays basic spotify user info 
 *
 * ************************************
 */

import React, { Component } from 'react';
import { render } from 'react-dom';

class UserInfo extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div id="login">
                    <h1>Congrats you logged in! Here's your user info</h1>
                    <a href="">Logout</a>
                </div>
            </div>
        );
    }
}

export default UserInfo;