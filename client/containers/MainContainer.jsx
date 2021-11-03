/**
 * ************************************
 *
 * @module  MainContainer
 * @author
 * @date
 * @description stateful component that renders the app 
 *
 * ************************************
 */

import React, { Component } from 'react';
import Login from '../components/Login.jsx';
import UserInfo from '../components/UserInfo.jsx';

// import from child components...
class MainContainer extends Component {
    constructor() {
        super();

        // state management 
        this.state = {
            user: null
        };
        // BIND CONTEXT TO ALL FUNCTIONS!!!

    }

    render() {
        const loggedIn = (this.state.user !== null) ? true: false;  
        let display = <Login> </Login>;
        //  conditionally render login page based on user state
        // if user is logged in, display the webpage 
        // -> otherwise, display login page 
        if (loggedIn) display = <UserInfo> </UserInfo>;

        return (
            <div className="container">
                {display}
            </div>
        );
    }

}

export default MainContainer;