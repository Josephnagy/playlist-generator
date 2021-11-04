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
        this.handleOnChange = this.handleOnChange.bind(this);
    }

    handleOnChange(event){
        this.props.changeTrackSeed(event.target.value); 
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
        const trackMenuItems = []; 
        for(let i=0; i<seeds.tracks.length; i++){
            // create menu item
            let menuItem = <MenuItem value={seeds.tracks[i].trackID}>{seeds.tracks[i].trackName}</MenuItem>
            // push to array 
            trackMenuItems.push(menuItem); 
        }

        // create entire box for trackSeed
        let trackSeedBox = 
        <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Age</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Age"
                    onChange={this.handleOnChange}
                >
                    {trackMenuItems}
                </Select>
            </FormControl>
        </Box>
        
        return (
            <div className="playlist-generator">
                <h1> I want a playlist with a...</h1>
                    {trackSeedBox}
                <h1>...type vibe</h1>
                <Button variant="contained">Generate Playlist</Button>
            </div>
        );
    }

}

export default PlaylistGenerator;