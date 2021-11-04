/**
 * ************************************
 *
 * @module  Utility 
 * @author
 * @date
 * @description Utility functions to avoid cluttering global namespace 
 *
 * ************************************
 */

const utils = {}; 

utils.getTokens = () => {
    // object to return tokens in 
    let tokens = {}; 

    // get the url string via window object
    let url = window.location.href; 

    // search url for index of access token 
    // this will be the start of 'important' part of url
    let startIndex = url.search('access_token=');

    // use index to get token 

    // -> 'access_token=*token*'0
    let accessToken = url.slice(startIndex).split('&')[0];
    // -> 'refresh_token=*token*'
    let refreshToken = url.slice(startIndex).split('&')[1];

    // get actual tokens 
    accessToken = accessToken.split('=')[1]; 
    refreshToken = refreshToken.split('=')[1];

    // put tokens in object to return
    tokens['accessToken'] = accessToken; 
    tokens['refreshToken'] = refreshToken;

    return tokens; 
}

// helper function
// input: array of spotify track objects 
// output: object, key: 'uris', value: array of URI strings 
utils.getTrackURIs = (tracks) => {
    let uris = {}; 

    uris.uris = tracks.map(e => e.uri); 

    return uris; 
}

// EXPORT THE UTILITY HERE
module.exports = utils;