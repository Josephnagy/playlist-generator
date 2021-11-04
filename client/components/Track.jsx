/**
 * ************************************
 *
 * @module  Track.jsx
 * @author Joe Nagy
 * @date 11/2/2021
 * @description Component to display a single track 
 *
 * ************************************
 */

import React, { Component } from 'react';
import { render } from 'react-dom';
// MUI Components 
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';

class Track extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ListItem>
                <ListItemAvatar>
                    <Avatar>
                        <img src={this.props.track.album.images[2].url}/> 
                    </Avatar>
                </ListItemAvatar>
                <ListItemText 
                    primary={this.props.track.name} 
                    secondary={this.props.track.artists[0].name}
                />
            </ListItem>
        );
    }
}

export default Track;