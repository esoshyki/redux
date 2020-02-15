const initialState = [
  'Home playlist',
  'Work playlist '
]

export default function playlists(state = initialState, action) {
if (action.type === 'ADD_PLAYLIST') {
return [
  ...state,
  action.playload
]
} else if (action.type === 'DELETE_PLAYLIST') {
return state
}
return state
}