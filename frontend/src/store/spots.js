import { csrfFetch } from './csrf';

const UPDATE = 'spots/update';
const DETAILS = 'spots/details';

const defaultState = {
    allSpots: [],
    byId: null,
};

export default function spotsReducer(state = defaultState, action) {
    switch (action.type) {
        case UPDATE:
            return {
                ...state,
                allSpots: action.spots,
            };
        case DETAILS:
            return {
                ...state,
                byId: action.spot,
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

function updateSpotDetails(spot) {
    return {
        type: DETAILS,
        spot,
    };
}

export const getSpots = () => async dispatch => {
    const response = await csrfFetch('/api/spots');
    const spots = await response.json();

    dispatch(updateSpots(spots));

    return spots;
};

export const getSpotById = id => async dispatch => {
    dispatch(updateSpotDetails(null));

    const response = await csrfFetch(`/api/spots/${id}`);
    const spot = await response.json();

    dispatch(updateSpotDetails(spot));

    return spot;
};
