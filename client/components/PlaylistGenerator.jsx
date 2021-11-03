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
import seeds from '../data/SampleSeeds.js';


// import from child components...
class PlaylistGenerator extends Component {
    constructor(props) {
        super(props);
    }

    // runs every time the page reloads 
    componentDidMount() {
        // for debugging
        console.log('PlaylistGenerator COMPONENT DID MOUNT');
        return;
    }

    // runs every time the page updates
    componentDidUpdate() {
        // for debugging
        console.log('PlaylistGenerator COMPONENT DID UPDATE');
        return;
    }

    render() {
        console.log('SEEDS:'); 
        console.log(seeds); 
        return (
            <div className="playlist-generator">
                <h1> Here's the playlist generator</h1>
            </div>
        );
    }

}

export default PlaylistGenerator;