//Action creator
export const selectSong = song => {
    //Return an action
    return {
        type: 'SONG_SELECTED',
        payload: song
    };
};

export const createDriver = driver => {
    //Return an action
    return {
        type: 'CREATED_DRIVER',
        payload: driver
    }
}

