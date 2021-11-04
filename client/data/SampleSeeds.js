/**
 * ************************************
 *
 * @description sample seeds for playlist generator
 *
 * ************************************
 */
const seeds = {}; 

// sample artists 
const artists = [
    { 
        'artistID': '0TnOYISbd1XYRBk9myaseg', 
        'name': 'Pitbull'
    }, 
    {
        'artistID': '7HTof8FGoKM8jJei841NDg',
        'name': 'Cordae'
    },
    {
        'artistID': '6deZN1bslXzeGvOLaLMOIF',
        'name': 'Nickelback'
    },
    {
        'artistID': '4LLpKhyESsyAXpc4laK94U',
        'name': 'Mac Miller'
    },
    {
        'artistID': '246dkjvS1zLTtiykXe5h60',
        'name': 'Post Malone'
    },
    {
        'artistID': '6KImCVD70vtIoJWnq6nGn3',
        'name': 'Harry Styles'
    },
    {
        'artistID': '6vWDO969PvNqNYHIOW5v0m',
        'name': 'Beyoncé'
    },
    {
        'artistID': '0k17h0D3J5VfsdmQ1iZtE9',
        'name': 'Pink Floyd'
    },
    {
        'artistID': '7guDJrEfX3qb6FEbdPA5qi',
        'name': 'Stevie Wonder'
    },
    {
        'artistID': '36QJpDe2go2KgaRleHCDTp',
        'name': 'Led Zeppelin'
    },
]; 
// Track seeds
const tracks = [
    {
        trackID: '2BcMwX1MPV6ZHP4tUT9uq6',
        trackName: 'POWER',
        artist: 'Kanye West'
    },
    {
        trackID: '25yQPHgC35WNnnOUqFhgVR',
        trackName: 'Lucy In The Sky With Diamonds',
        artist: 'The Beatles'
    },
    {
        trackID: '2YpeDb67231RjR0MgVLzsG',
        trackName: 'Old Town Road',
        artist: 'Lil Nas X'
    },
    {
        trackID: '4ZtFanR9U6ndgddUvNcjcG',
        trackName: 'good 4 u',
        artist: 'Olivia Rodrigo'
    }
    // {
    //     trackID: '',
    //     trackName: '',
    //     artist: ''
    // },
    // {
    //     trackID: '',
    //     trackName: '',
    //     artist: ''
    // },
    // {
    //     trackID: '',
    //     trackName: '',
    //     artist: ''
    // },
    // {
    //     trackID: '',
    //     trackName: '',
    //     artist: ''
    // },
    // {
    //     trackID: '',
    //     trackName: '',
    //     artist: ''
    // },
    // {
    //     trackID: '',
    //     trackName: '',
    //     artist: ''
    // },
]

const genres = [
    "acoustic",
    "afrobeat",
    "alt-rock",
    "alternative",
    "ambient",
    "anime",
    "black-metal",
    "bluegrass",
    "blues",
    "bossanova",
    "brazil",
    "breakbeat",
    "british",
    "cantopop",
    "chicago-house",
    "children",
    "chill",
    "classical",
    "club",
    "comedy",
    "country",
    "dance",
    "dancehall",
    "death-metal",
    "deep-house",
    "detroit-techno",
    "disco",
    "disney",
    "drum-and-bass",
    "dub",
    "dubstep",
    "edm",
    "electro",
    "electronic",
    "emo",
    "folk",
    "forro",
    "french",
    "funk",
    "garage",
    "german",
    "gospel",
    "goth",
    "grindcore",
    "groove",
    "grunge",
    "guitar",
    "happy",
    "hard-rock",
    "hardcore",
    "hardstyle",
    "heavy-metal",
    "hip-hop",
    "holidays",
    "honky-tonk",
    "house",
    "idm",
    "indian",
    "indie",
    "indie-pop",
    "industrial",
    "iranian",
    "j-dance",
    "j-idol",
    "j-pop",
    "j-rock",
    "jazz",
    "k-pop",
    "kids",
    "latin",
    "latino",
    "malay",
    "mandopop",
    "metal",
    "metal-misc",
    "metalcore",
    "minimal-techno",
    "movies",
    "mpb",
    "new-age",
    "new-release",
    "opera",
    "pagode",
    "party",
    "philippines-opm",
    "piano",
    "pop",
    "pop-film",
    "post-dubstep",
    "power-pop",
    "progressive-house",
    "psych-rock",
    "punk",
    "punk-rock",
    "r-n-b",
    "rainy-day",
    "reggae",
    "reggaeton",
    "road-trip",
    "rock",
    "rock-n-roll",
    "rockabilly",
    "romance",
    "sad",
    "salsa",
    "samba",
    "sertanejo",
    "show-tunes",
    "singer-songwriter",
    "ska",
    "sleep",
    "songwriter",
    "soul",
    "soundtracks",
    "spanish",
    "study",
    "summer",
    "swedish",
    "synth-pop",
    "tango",
    "techno",
    "trance",
    "trip-hop",
    "turkish",
    "work-out",
    "world-music"
]; 

// add artists, genres and tracks to seeds 
seeds.artists = artists; 
seeds.genres = genres; 
seeds.tracks = tracks; 

module.exports = seeds; 