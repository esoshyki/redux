import { combineReducers } from 'redux';

import tracks from './tracks';
import playlists from './playlists';
import filterTracks from './filterTrack'

export default combineReducers({
  tracks,
  playlists,
  filterTracks
})