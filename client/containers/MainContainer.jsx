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
            genreSeed: '', 
            recs: null
        };
        // BIND CONTEXT TO ALL FUNCTIONS!!!
        this.changeTrackSeed = this.changeTrackSeed.bind(this);
        this.changeArtistSeed = this.changeArtistSeed.bind(this); 
        this.changeGenreSeed = this.changeGenreSeed.bind(this);
        this.generatePlaylist = this.generatePlaylist.bind(this);
    }

    //  Functions to update state when new seeds are selected 
    changeTrackSeed(track){
        this.setState({
            ...this.state, 
            trackSeed: track
        }); 
    }

    changeArtistSeed(artist){
        this.setState({
            ...this.state,
            artistSeed: artist
        });
    }

    changeGenreSeed(genre){
        this.setState({
            ...this.state,
            genreSeed: genre
        });
    }

    generatePlaylist() {
        console.log('GENERATING PLAYLIST');
        // check that at leats one of the seeds was used 

        // build request url 
        let url = 'https://api.spotify.com/v1/recommendations?'; 
        // add trackSeed 
        url += `seed_tracks=${this.state.trackSeed}&`;
        url += `seed_artists=${this.state.artistSeed}&`;
        url += `seed_genres=${this.state.genreSeed}`;
        console.log('request URL: ');
        console.log(url); 

        // fetch request 

        // format access token 
        let auth = "Bearer " + this.state.accessToken;
        // update state inside fetch request
        fetch(url, {
            method: "GET",
            headers: {
                "Content-type": "application/json",
                "Authorization": auth
            }
        })
            .then(response => response.json())
            .then(data => {
                this.setState({
                    ...this.state,
                    recs: data
                });
            })
            .catch(err => console.log(err));
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
            <PlaylistGenerator 
                changeTrackSeed={this.changeTrackSeed}
                changeArtistSeed={this.changeArtistSeed}
                changeGenreSeed={this.changeGenreSeed}
                generatePlaylist={this.generatePlaylist}
            />
        </div>;

        return (
            <div className="container">
                {display}
            </div>
        );
    }

}

export default MainContainer;