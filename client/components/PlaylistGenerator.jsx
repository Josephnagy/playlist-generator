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
import PlaylistContainer from '../containers/PlaylistContainer.jsx';
// Dummy seed data 
import seeds from '../data/SampleSeeds.js';
// MUI Components 
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';



class PlaylistGenerator extends Component {
    constructor(props) {
        super(props);

        // BIND CONTEXT TO ALL FUNCTIONS!!!
        this.handleTrackOnChange = this.handleTrackOnChange.bind(this);
        this.handleArtistOnChange = this.handleArtistOnChange.bind(this);
        this.handleGenreOnChange = this.handleGenreOnChange.bind(this);
    }

    // change the state to update track seed 
    handleTrackOnChange(event){
        this.props.changeTrackSeed(event.target.value); 
    }

    // change the state to update track seed 
    handleArtistOnChange(event) {
        this.props.changeArtistSeed(event.target.value);
    }

    // change the state to update genre seed 
    handleGenreOnChange(event) {
        this.props.changeGenreSeed(event.target.value);
    }

    // runs every time the page reloads 
    componentDidMount() {
        // for debugging
        console.log('PlaylistGenerator COMPONENT DID MOUNT');
        console.log(this.props); 
        return;
    }

    // runs every time the page updates
    componentDidUpdate() {
        // for debugging
        console.log('PlaylistGenerator COMPONENT DID UPDATE');
        return;
    }

    render() {
        // dynamically create array of menu items for track seeds 
        const trackMenuItems = [<MenuItem value=''>None</MenuItem>];
        for(let i=0; i<seeds.tracks.length; i++){
            // create menu item
            let menuItem = <MenuItem value={seeds.tracks[i].trackID}>{seeds.tracks[i].trackName}</MenuItem>
            // push to array 
            trackMenuItems.push(menuItem); 
        }

        // create entire box for trackSeed
        let trackSeedBox = 
            <Box sx={{ minWidth: 120, maxWidth: 500 }}>
            <FormControl fullWidth>
                <InputLabel>Select a Track</InputLabel>
                <Select
                    id="track-select"
                        onChange={this.handleTrackOnChange}
                >
                    {trackMenuItems}
                </Select>
            </FormControl>
        </Box>

        // dynamically create array of menu items for artist seeds
        const artistMenuItems = [<MenuItem value=''>None</MenuItem>];
        for (let i = 0; i < seeds.artists.length; i++) {
            // create menu item
            let menuItem = <MenuItem value={seeds.artists[i].artistID}>{seeds.artists[i].name}</MenuItem>
            // push to array 
            artistMenuItems.push(menuItem);
        }

        // create entire box for artistSeed
        let artistSeedBox =
            <Box sx={{ minWidth: 120, maxWidth: 500}}>
                <FormControl fullWidth>
                    <InputLabel>Select an Artist</InputLabel>
                    <Select
                        id="artist-select"
                        onChange={this.handleArtistOnChange}
                    >
                        {artistMenuItems}
                    </Select>
                </FormControl>
            </Box>


        // dynamically create array of menu items for genre seeds
        const genreMenuItems = [<MenuItem value=''>None</MenuItem>];
        for (let i = 0; i < seeds.genres.length; i++) {
            // create menu item
            let menuItem = <MenuItem value={seeds.genres[i]}>{seeds.genres[i]}</MenuItem>
            // push to array 
            genreMenuItems.push(menuItem);
        }

        // create entire box for artistSeed
        let genreSeedBox =
            <Box sx={{ minWidth: 120, maxWidth: 500}}>
                <FormControl fullWidth>
                    <InputLabel>Select a Genre</InputLabel>
                    <Select
                        id="genre-select"
                        onChange={this.handleGenreOnChange}
                    >
                        {genreMenuItems}
                    </Select>
                </FormControl>
            </Box>

        // declare conditonal rendering components
        let playlist;
        let addToPlaylistsButton; 
        
        // if we have recs, pass them to compnent and display them 
        if (this.props.recs && this.props.recs.tracks && this.props.recs.tracks.length > 0) {
            playlist = <PlaylistContainer recs={this.props.recs}/>;
            addToPlaylistsButton = <Button 
                onClick={this.props.addToPlaylists}
                variant="outlined"
            >Add to my Playlists</Button>;
        }

        return (
            <div className="playlist-generator">
                <h1> I want a playlist with a</h1>
                    {trackSeedBox}
                    <br/>
                    {artistSeedBox}
                    <br/> 
                    {genreSeedBox}
                <h1>type vibe</h1>
                <Button 
                    variant="contained"
                    onClick={this.props.generatePlaylist}
                >Generate Playlist</Button>
                {addToPlaylistsButton}
                {playlist}
            </div>
        );
    }

}

export default PlaylistGenerator;