import {connect} from "react-redux";
import {createDriver, selectSong} from "../actions";

const SongList = (props) => {
    console.log(props);
    const renderList = (props) => {
        return props.songs.map((song) => {
            return (
                <div className="item" key={song.title}>
                    <div className="right floated content">
                        <button
                            className="ui button primary"
                            onClick={() => { props.selectSong(song) }}
                        >
                            Select
                        </button>
                    </div>
                    <div className="content">{song.title}</div>
                </div>
            )
        })
    }

    return (
        <div className="ui divided list">
            {renderList(props)}
            <button
                className="ui button primary"
                onClick={() => props.createDriver({name: 'Charles Leclerc'})}
            >
                Create Driver
            </button>
        </div>
    )
}

const mapStateToProps = (state) => {
    console.log(state);
    return {songs: state.songs };
}

export default connect(mapStateToProps, { selectSong: selectSong, createDriver: createDriver })(SongList);