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
        this.addToPlaylists = this.addToPlaylists.bind(this);
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

    // add current recomendation playlist to user's playlists
    addToPlaylists(){
        // setup request url 
        let userID = this.state.user.id; 
        let url = `https://api.spotify.com/v1/users/${userID}/playlists`;

        // prepare playlist name 
        let playlistName = 'Playlist Garden generated playlist'; 

        // prepare playlist description 
        let playlistDescription = 'from Playlist Garden'

        // prepare post request body 
        let playlistPostBody = {
            name: playlistName, 
            public: true, 
            collaborative: false, 
            description: playlistDescription
        }; 

        playlistPostBody = JSON.stringify(playlistPostBody);

        // prepare token for header
        let auth = "Bearer " + this.state.accessToken;
        // first make the post request
        // update state inside fetch request
        fetch(url, {
            method: "POST",
            headers: {
                "Content-type": "application/json",
                "Authorization": auth
            }, 
            body: playlistPostBody
        })
            .then(response => response.json())
            .then(data => {
                // now that the playlist has been created, add tracks to it
                // get playlist ID 
                let playlistID = data.id;
                console.log(data);

                // setup request URL
                let url = `https://api.spotify.com/v1/playlists/${playlistID}/tracks`;

                // setup body 
                let tracksPostBody = JSON.stringify(Utility.getTrackURIs(this.state.recs.tracks));

                // post request
                fetch(url, {
                    method: "POST",
                    headers: {
                        "Content-type": "application/json",
                        "Authorization": auth
                    },
                    body: tracksPostBody
                })
                .then(response => response.json())
                .then(response => console.log('post successful'))
                .catch(err => console.log(err));

            })
            .catch(err => console.log(err));

        // 

    }


    // use seeds to generate a playlist recomendation 
    generatePlaylist() {
        console.log('GENERATING PLAYLIST');
        // check that at leats one of the seeds was used 
        if(this.state.genreSeed === '' && this.state.artistSeed === '' && this.state.trackSeed === ''){
            window.alert('Please select at least one seed!'); 
            return;
        }

        // build request url 
        let url = 'https://api.spotify.com/v1/recommendations?'; 
        // add trackSeed 
        url += `seed_tracks=${this.state.trackSeed}&`;
        url += `seed_artists=${this.state.artistSeed}&`;
        url += `seed_genres=${this.state.genreSeed}`;

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
                addToPlaylists={this.addToPlaylists}
                recs={this.state.recs}
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