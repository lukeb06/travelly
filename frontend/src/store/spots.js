import { csrfFetch } from './csrf';

const UPDATE = 'spots/update';
const DETAILS = 'spots/details';

const defaultState = {
    allSpots: null,
    byId: {},
    selectedSpot: null,
};

function getSpotsById(spots) {
    const byId = {};

    spots.forEach(spot => {
        byId[spot.id] = spot;
    });

    return byId;
}

export default function spotsReducer(state = defaultState, action) {
    switch (action.type) {
        case UPDATE:
            return {
                ...state,
                allSpots: action.spots,
                byId: getSpotsById(action.spots),
            };
        case DETAILS:
            return {
                ...state,
                selectedSpot: action.spot,
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

    await new Promise(resolve => setTimeout(resolve, 3000));

    dispatch(updateSpotDetails(spot));

    return spot;
};
