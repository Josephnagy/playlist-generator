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
// Components 
import Login from '../components/Login.jsx';
import UserInfo from '../components/UserInfo.jsx';
// Utility functions 
import Utility from '../utility.js'; 


// import from child components...
class MainContainer extends Component {
    constructor() {
        super();

        // state management 
        this.state = {
            user: null,
            accessCode: null, 
            accessToken: null, 
            refreshToken: null
        };
        // BIND CONTEXT TO ALL FUNCTIONS!!!
    }

    // runs every time the page reloads 
    componentDidMount(){
        // for debugging
        console.log('COMPONENT DID MOUNT'); 

        // prevent errors if tokens aren't there 
        if(window.location.href.length < 30) return; 

        // get tokens 
        let { accessToken, refreshToken} = Utility.getTokens();

        // get user data 
        Utility.getUser(accessToken);

        // save tokens to state 
        this.setState({
            ...this.state, 
            accessToken: [accessToken],
            refreshToken: [refreshToken] 
        })

        return;
    }

    // runs every time the page updates
    componentDidUpdate(){
        // for debugging
        console.log('COMPONENT DID UPDATE');
        return; 
    }

    render() {
        console.log('page just re-rendered'); 
        const loggedIn = (this.state.accessToken !== null) ? true: false;
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