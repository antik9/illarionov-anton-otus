import { createStore } from 'redux';
import updateApp from '../reducers/reducer.js';

const initialState = {city: "Moscow", favorites: []};

if ( localStorage['weatherState'] === undefined ) {
    localStorage['weatherState'] = JSON.stringify(initialState);
}


let store = createStore(updateApp, JSON.parse(localStorage['weatherState']));

export default store;
