const ADD_TO_FAVS = 'ADD_TO_FAVS';
const REMOVE_FROM_FAVS = 'REMOVE_FROM_FAVS';
const UPDATE_SEARCH = 'UPDATE_SEARCH';

function addToFavourites(city) {
    return {
        type: ADD_TO_FAVS,
        city: city,
    }
}

function removeFromFavourites(city) {
    return {
        type: REMOVE_FROM_FAVS,
        city: city,
    }
}

function updateSearch(city) {
    return {
        type: UPDATE_SEARCH,
        city: city,
    }
}

export {
    ADD_TO_FAVS, REMOVE_FROM_FAVS, UPDATE_SEARCH,
    addToFavourites, removeFromFavourites, updateSearch,
}
