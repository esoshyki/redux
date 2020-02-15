const mockAPIData = [
  {
    id: 1,
    name: 'Enter Sandman'
  },
  {
    id: 2,
    name: 'Welcome Home'
  },
  {
    id: 3,
    name: 'Nothing else Matters'
  },
  {
    id: 4,
    name: 'Yesterday'
  }, 
]

export const getTracks = () => dispatch =>
 setTimeout(() => {
   console.log('I got tracks');
   dispatch({type: 'FETCH_TRACKS_SUCCESS', payload: mockAPIData})
 }, 2000)
