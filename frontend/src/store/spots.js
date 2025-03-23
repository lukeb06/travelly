import { csrfFetch } from './csrf';

const UPDATE = 'spots/update';
const DETAILS = 'spots/details';
const UPDATE_CURRENT = 'spots/updateCurrent';
const REMOVE = 'spots/remove';

const defaultState = {
    allSpots: null,
    byId: {},
    selectedSpot: null,
    mySpots: null,
};

function getSpotsById(spots) {
    if (!spots) return {};
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
        case UPDATE_CURRENT:
            return {
                ...state,
                mySpots: action.spots,
            };
        case REMOVE: {
            const newSpots = state.allSpots.filter(spot => spot.id !== action.id);
            return {
                ...state,
                allSpots: newSpots,
                byId: getSpotsById(newSpots),
                selectedSpot: null,
                mySpots: state.mySpots.filter(spot => spot.id !== action.id),
            };
        }
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

function updateMySpots(spots) {
    return {
        type: UPDATE_CURRENT,
        spots,
    };
}

function removeSpot(id) {
    return {
        type: REMOVE,
        id,
    };
}

export const getSpots = () => async dispatch => {
    dispatch(updateSpots(null));

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

export const getMySpots = () => async dispatch => {
    dispatch(updateMySpots(null));

    const response = await csrfFetch('/api/spots/current');
    const spots = await response.json();

    dispatch(updateMySpots(spots));

    return spots;
};

export const deleteSpot = id => async dispatch => {
    const response = await csrfFetch(`/api/spots/${id}`, {
        method: 'DELETE',
    });

    dispatch(removeSpot(id));

    return response;
};
