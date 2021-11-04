/**
 * ************************************
 *
 * @module  UserInfo.jsx
 * @author Joe Nagy
 * @date 11/2/2021
 * @description Displays basic spotify user info 
 *
 * ************************************
 */

import React, { Component } from 'react';
import { render } from 'react-dom';
// MUI Components 
import Button from '@mui/material/Button';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';

class UserInfo extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let greeting = `Welcome, ${this.props.user.display_name}!`;
        return (
            <div>
                <div id="login">

                    <ListItem>
                        <ListItemAvatar>
                            <Avatar id="user-img" src={this.props.user.images[0].url}/>
                        </ListItemAvatar>
                        <ListItemText
                            primary={greeting}
                        />
                    </ListItem>
                    <Button
                        variant="contained"
                        href="http://localhost:8080"
                    >Log Out</Button>
                </div>
            </div>
        );
    }
}

export default UserInfo;