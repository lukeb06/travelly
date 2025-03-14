import { csrfFetch } from './csrf';

const UPDATE = 'spots/update';

const defaultState = {
    allSpots: [],
};

export default function spotsReducer(state = defaultState, action) {
    switch (action.type) {
        case UPDATE:
            return {
                ...state,
                allSpots: action.spots,
            };
        default:
            return state;
    }
}

function updateSpots(spots) {
    return {
        type: UPDATE,
        spots,
    };
}

export const getSpots = () => async dispatch => {
    const response = await csrfFetch('/api/spots');
    const spots = await response.json();

    dispatch(updateSpots(spots));

    return spots;
};
