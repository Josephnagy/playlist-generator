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
import PlaylistGenerator from '../components/PlaylistGenerator.jsx';
// Utility functions 
import Utility from '../utility/utility.js'; 


// import from child components...
class MainContainer extends Component {
    constructor() {
        super();

        // state management 
        this.state = {
            user: null,
            accessCode: null, 
            accessToken: null, 
            refreshToken: null, 
            trackSeed: '', 
            artistSeed: '', 
            genreSeed: ''
        };
        // BIND CONTEXT TO ALL FUNCTIONS!!!
        this.changeTrackSeed = this.changeTrackSeed.bind(this);
    }

    //  Functions to update state when new seeds are selected 
    changeTrackSeed(track){
        this.setState({
            ...this.state, 
            trackSeed: track
        }); 
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
        let auth = "Bearer " + accessToken;
        
        // fetch request 
        // update state inside fetch request
        fetch('https://api.spotify.com/v1/me', {
            method: "GET",
            headers: {
                "Content-type": "application/json",
                "Authorization": auth
            }
        })
            .then(response => response.json())
            .then(user => {
                this.setState({
                    ...this.state,
                    user: user,
                    accessToken: accessToken,
                    refreshToken: refreshToken
                });
            })
            .catch(err => console.log(err)); 
        

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
        let display = <Login/>;
        
        //  conditionally render login page based on user state
        // if user is logged in, display the webpage 
        // -> otherwise, display login page 
        if (loggedIn) display = 
        <div>
            <UserInfo /> 
            <PlaylistGenerator changeTrackSeed={this.changeTrackSeed}/>
        </div>;

        return (
            <div className="container">
                {display}
            </div>
        );
    }

}

export default MainContainer;