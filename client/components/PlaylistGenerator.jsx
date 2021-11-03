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
        return (
            <div className="playlist-generator">
            </div>
        );
    }

}

export default PlaylistGenerator;