import {combineReducers} from "redux";

const songsReducer = () => {
    return [
        {
            title: 'No Scrubs',
            duration: '4:05'
        },
        {
            title: 'Macarena',
            duration: '2:30'
        },
        {
            title: 'All Star',
            duration: '3:15'
        },
        {
            title: 'I Want it That Way',
            duration: '1:45'
        }
    ]
};

const playersReducer = () => {
    return [
        {
            name: 'Gareth Bale',
            age: 34
        },
        {
            name: 'Thomas Muller',
            age: 33
        },
        {
            name: 'Mario Gotze',
            age: 30
        }
    ]
}

const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload;
    }

    return selectedSong;
}

const createdDriverReducer = (createdDriver = null, action) => {
    if(action.type === 'CREATED_DRIVER') {
        return action.payload;
    }

    return createdDriver;
}

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer,
    players: playersReducer,
    createdDriver: createdDriverReducer
});