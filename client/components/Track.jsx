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

class Track extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div class="track">
                    <h1>Here's your track</h1>
                </div>
            </div>
        );
    }
}

export default Track;