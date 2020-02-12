import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';


function playlist(state = [], action) {
    if (action.type === 'ADD_TRACK') {
        return [
            ...state,
            action.payload
        ]
    }
    return state
}

const store = createStore(playlist); 

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));

// import { createStore } from 'redux';



// const store = createStore(playlist);
// const addTrackButton = document.querySelectorAll('.addTrack')[0];
// const list = document.querySelectorAll('.list')[0];
// const trackInput = document.querySelectorAll('.textInput')[0];

// store.subscribe(() => {
//     list.innerHTML = null
//     trackInput.value = null
//     store.getState().forEach(track => {
//         const li = document.createElement('li');
//         li.textContent = track;
//         list.appendChild(li)
//     })
// })

// addTrackButton.addEventListener('click', () => {
//     const trackName = trackInput.value;
//     store.dispatch({type: 'ADD_TRACK', payload: trackName})
// })
