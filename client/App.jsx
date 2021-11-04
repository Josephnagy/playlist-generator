/**
 * ************************************
 *
 * @module  App.jsx
 * @author Joe Nagy
 * @date 11/2/2021
 * @description App
 *
 * ************************************
 */

import React, { Component } from 'react';
import { render } from 'react-dom';
import MainContainer from './containers/MainContainer.jsx';
import './scss/application.scss';

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div id="header-div">
                    <h1 id="title"> Playlist Garden</h1> 
                    <img id="logo" src="https://i.imgur.com/sONK6Yr.png"/>
                </div>
                <br />
                <br />
                <br />
                <br />
                <MainContainer />
            </div>
        );
    }
}

export default App;