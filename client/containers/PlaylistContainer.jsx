/**
 * ************************************
 *
 * @module  PlaylistContainer.jsx
 * @author Joe Nagy
 * @date 11/2/2021
 * @description Component to display playlist
 *
 * ************************************
 */

import React, { Component } from 'react';
import Track from '../components/Track.jsx'
import { render } from 'react-dom';
// MUI components 
import List from '@mui/material/List';

class PlaylistContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        // dynamically create track components from recs props 
        const tracks = []; 
        for(let i=0; i<this.props.recs.tracks.length; i++){
            tracks.push(<Track track={this.props.recs.tracks[i]}/>);
        }
        


        return (
            <div>
                <h1>Here's your playlist</h1>
                <List id="playlist-container">
                    {tracks}
                </List>
            </div>
        );
    }
}

export default PlaylistContainer;