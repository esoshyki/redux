import React from 'react';
import { connect } from 'react-redux';
import { getTracks } from './actions/tracks';
import { Link } from 'react-router';
import  Menu from './Menu';

function App({tracks, onAddTrack, onFindTrack, onGetTracks, ownProps}) {
  console.log(tracks)
  console.log(ownProps)
    let trackInput, searchInput;
    const addTrack = () => {
      const trackName = trackInput.value;
      if (trackName) {
        onAddTrack(trackName);
        trackInput.value = null
      }
    }

    const findTrack = () => {
      const searchValue = searchInput.value;
      onFindTrack(searchValue)
    }

    return (
      <div>
        <Menu />
        <div>
          <input type="text" ref={(input) => trackInput = input}/>
          <button onClick={addTrack}>Add Track</button>
        </div>
        <div>
        <input type="text" onChange={findTrack} ref={(input) => searchInput = input}/>
          <button onClick={findTrack}>Find Track</button>
        </div>
        <div>
          <button onClick={onGetTracks}>Get Tracks</button>
        </div>
        <ul className="list">
          {
            tracks.map((track, index) => 
            <li key={index}>
              <Link to={`/tracks/${track.id}`}>{track.name}</Link></li>)
          }
        </ul>
      </div>
    );
  }


export default connect(
  (state, ownProps) => ({
    tracks: state.tracks.filter(track => track.name.includes(state.filterTracks)),
    ownProps
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
