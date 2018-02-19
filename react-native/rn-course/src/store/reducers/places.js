import { ADD_PLACE, DELETE_PLACE } from '../actions/actionTypes';

const initalState = {
    places: [],
    selectedPlace: null
};

const reducer = (state = initalState, action) => {
    switch (action.type) {
        case ADD_PLACE:
            return {
                ...state,
                places: state.places.concat({
                    key: Math.random(),
                    name: action.placeName,
                    image: {
                        uri: "https://lh3.googleusercontent.com/_orhXmFAPaQhWc9464aACtB4DP7ccO7CaYF4fQExM508bi8YjAo54GHHw1qMhCKWJg=h900"
                    }
                }) 
            };
        case DELETE_PLACE:
            return {
                ...state,
                places: state.places.filter(place => {
                    return place.key !== state.selectedPlace.key;
                })
            };
        default:
            return state;
    };
};

export default reducer;