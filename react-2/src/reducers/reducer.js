import {ADD_TO_FAVS, REMOVE_FROM_FAVS, UPDATE_SEARCH} from '../actions/actions';

function updateApp(state, action) {
    let newState = state;
    switch (action.type) {
        case ADD_TO_FAVS:
            newState.favorites.push(action.city);
            break;
        case REMOVE_FROM_FAVS:
            newState.favorites = newState.favorites.filter(city => city !== action.city);
            break;
        case UPDATE_SEARCH:
            newState.city = action.city;
            break;
        default:
    }
    localStorage['weatherState'] = JSON.stringify(newState);
    return newState;
}

export default updateApp;
