import {connect} from 'react-redux';

const SongDetail = ({selectedSong, createdDriver}) => {
    console.log(selectedSong);
    console.log(createdDriver);

    if (!selectedSong) {
        return (
            <div>Select a song</div>
        )
    }

    return (
        <div>
            <h3>Details for:</h3>
            <p>
                Title: {selectedSong.title}
                <br/>
                Duration: {selectedSong.duration}
            </p>

            <div><h3>Driver</h3>
                <p>Name: {createdDriver.name}</p>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {selectedSong: state.selectedSong, createdDriver: state.createdDriver}
}

export default connect(mapStateToProps)(SongDetail);