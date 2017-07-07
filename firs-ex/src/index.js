import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const initialState = [
    "love",
    "hope"
]

function playlist(state = initialState, action){
    if (action.type === 'ADD_TRACK'){
        return [
            ...state,
            action.payload 
            ];
    }
    return state;
}
const store = createStore(playlist);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
document.getElementById('root'));

// //store using without react----------------------
// import { createStore } from 'redux';

// //reducer---
// function playlist(state = [], action){
//     if (action.type === 'ADD_TRACK'){
//         return [
//             ...state,
//             action.payload 
//             ];
//     }
//     return state;
// }
// //---
// const store = createStore(playlist);
// const addTrackBtn = document.querySelectorAll('.addTrack')[0];
// const list = document.querySelectorAll('.list')[0];
// const testInput = document.querySelectorAll('.trackInput')[0];


// //checking changes and reacting---
// store.subscribe(() => {
//     list.innerHTML = "";
//     store.getState().forEach(track =>{
//         const li = document.createElement('li');
//         li.textContent = track;
//         list.appendChild(li);
//     })
// })
// //---

// store.dispatch({type: 'ADD_TRACK', payload: 'some song'});
// store.dispatch({type: 'ADD_TRACK', payload: 'some another song'});

// addTrackBtn.addEventListener('click', () => {
//     const trackName = testInput.value;
//     store.dispatch({type: 'ADD_TRACK', payload: trackName});
//     testInput.value='';
// })
// //------------------------------------------------------------

