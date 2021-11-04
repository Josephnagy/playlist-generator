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
import { render } from 'react-dom';

class PlaylistContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div id="playlist-container">
                    <h1>Here's your playlist</h1>
                </div>
            </div>
        );
    }
}

export default PlaylistContainer;