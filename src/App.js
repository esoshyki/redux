import React from 'react';
import { connect } from 'react-redux';
import { getTracks } from './actions/tracks';

function App(props) {
    let trackInput, searchInput;

    const addTrack = () => {
      const trackName = trackInput.value;
      if (trackName) {
        props.onAddTrack(trackName);
        trackInput.value = null
      }
    }

    const findTrack = () => {
      const searchValue = searchInput.value;
      props.onFindTrack(searchValue)
    }

    return (
      <div>
        <div>
          <input type="text" ref={(input) => trackInput = input}/>
          <button onClick={addTrack}>Add Track</button>
        </div>
        <div>
        <input type="text" onChange={findTrack} ref={(input) => searchInput = input}/>
          <button onClick={findTrack}>Find Track</button>
        </div>
        <div>
          <button onClick={props.onGetTracks}>Get Tracks</button>
        </div>
        <ul className="list">
          {
            props.tracks.map((track, index) => 
            <li key={index}>{track.name}</li>)
          }
        </ul>
      </div>
    );
  }


export default connect(
  state => ({
    tracks: state.tracks.filter(track => track.name.includes(state.filterTracks))
  }),
  dispatch => ({
    onAddTrack: (name) => {
      const payload = {
        id: Date.now().toString(),
        name
      };
      dispatch({
        type: 'ADD_TRACK', payload
      })
    },
    onFindTrack: (name) => {
      dispatch({
        type: 'FIND_TRACK', payload: name
      })
    },
    onGetTracks: () => {
      dispatch(getTracks())
    }
  })
)(App);
